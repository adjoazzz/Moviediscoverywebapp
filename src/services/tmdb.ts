// @ts-ignore
const API_KEY = import.meta.env?.VITE_TMDB_API_KEY;
console.log('[TMDB] API key loaded:', API_KEY ? `${API_KEY.slice(0, 6)}...` : 'MISSING ❌');
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

export interface TMDBMovie {
  id: number;
  poster_path: string | null;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
}

const cache: Record<string, TMDBMovie | null> = {};

export async function fetchTrailerKey(tmdbId: number): Promise<string | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${tmdbId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    const trailer = data.results?.find(
      (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
    ) ?? data.results?.[0];
    return trailer?.key ?? null;
  } catch {
    return null;
  }
}

export async function fetchMovieDetails(title: string, year: number): Promise<TMDBMovie | null> {
  const key = `${title}-${year}`;
  if (key in cache) return cache[key];

  try {
    // First try: with year for precision
    let res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&year=${year}&language=en-US`
    );
    let data = await res.json();

    // Fallback: without year if no results found
    if (!data.results?.length) {
      res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=en-US`
      );
      data = await res.json();
    }

    const result: TMDBMovie | null = data.results?.[0] ?? null;
    cache[key] = result;
    return result;
  } catch (err) {
    console.error(`TMDB fetch failed for "${title}":`, err);
    cache[key] = null;
    return null;
  }
}

// ── TV / Drama / Anime ──────────────────────────────────────────────────────
export async function fetchTVDetails(title: string, year: number): Promise<TMDBMovie | null> {
  const key = `tv-${title}-${year}`;
  if (key in cache) return cache[key] as TMDBMovie | null;

  try {
    let res = await fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(title)}&first_air_date_year=${year}&language=en-US`
    );
    let data = await res.json();

    if (!data.results?.length) {
      res = await fetch(
        `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=en-US`
      );
      data = await res.json();
    }

    const r = data.results?.[0];
    const result = r ? {
      id: r.id,
      title: r.name,
      poster_path: r.poster_path,
      overview: r.overview,
      release_date: r.first_air_date,
      vote_average: r.vote_average,
    } as TMDBMovie : null;

    cache[key] = result;
    return result;
  } catch (err) {
    console.error(`TMDB TV fetch failed for "${title}":`, err);
    cache[key] = null;
    return null;
  }
}

export async function fetchTVTrailerKey(tmdbId: number): Promise<string | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/tv/${tmdbId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    const trailer = data.results?.find(
      (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
    ) ?? data.results?.[0];
    return trailer?.key ?? null;
  } catch {
    return null;
  }
}

// ── Books (Google Books API — no key needed) ────────────────────────────────
export interface BookDetails {
  id: string;
  title: string;
  poster_path: string | null; // thumbnail URL
  overview: string;
  release_date: string;
  vote_average: number;
}

const bookCache: Record<string, BookDetails | null> = {};

export async function fetchBookDetails(title: string, author: string): Promise<BookDetails | null> {
  const key = `${title}-${author}`;
  if (key in bookCache) return bookCache[key];

  try {
    // Use Open Library Search API — returns cover IDs and descriptions natively, no auth needed
    const query = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=1&fields=key,title,author_name,cover_i,first_publish_year,subject,ratings_average,description`);
    const data = await res.json();
    const doc = data.docs?.[0];

    if (!doc) {
      bookCache[key] = null;
      return null;
    }

    // cover_i is the Open Library cover ID — very reliable, no hotlink blocking
    const poster_path = doc.cover_i
      ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
      : null;

    // Fetch description from the works endpoint if we have a key
    let overview = '';
    if (doc.key) {
      try {
        const workRes = await fetch(`https://openlibrary.org${doc.key}.json`);
        const work = await workRes.json();
        overview = typeof work.description === 'string'
          ? work.description
          : work.description?.value ?? '';
      } catch {
        overview = '';
      }
    }

    const result: BookDetails = {
      id: doc.key ?? key,
      title: doc.title ?? title,
      poster_path,
      overview,
      release_date: doc.first_publish_year ? String(doc.first_publish_year) : '',
      vote_average: doc.ratings_average ? Math.round(doc.ratings_average * 10) / 10 : 0,
    };
    bookCache[key] = result;
    return result;
  } catch (err) {
    console.error(`Open Library fetch failed for "${title}":`, err);
    bookCache[key] = null;
    return null;
  }
}