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