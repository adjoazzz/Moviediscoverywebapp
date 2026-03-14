const API_KEY = (import.meta as any).env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

export interface TMDBMovie {
  poster_path: string | null;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
}

// Cache so we don't re-fetch the same movie twice
const cache: Record<string, TMDBMovie | null> = {};

export async function fetchMovieDetails(title: string, year: number): Promise<TMDBMovie | null> {
  const key = `${title}-${year}`;
  if (key in cache) return cache[key];

  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&year=${year}&language=en-US`
    );
    const data = await res.json();
    const result = data.results?.[0] ?? null;
    cache[key] = result;
    return result;
  } catch {
    cache[key] = null;
    return null;
  }
}