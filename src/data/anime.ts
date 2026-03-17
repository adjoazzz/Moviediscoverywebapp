import type { Mood } from './moods';

// Anime reuses the Mood type for compatibility.
// movie.director = studio, movie.title = anime title
export const animes: Mood[] = [
  {
    id: 'visceral',
    name: 'Visceral',
    description: 'Raw, physical, gut-level anime that hits you before you can think.',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -900 },
    size: 180,
    movies: [
      { title: 'Berserk', director: 'OLM', year: 1997 },
      { title: 'Attack on Titan', director: 'MAPPA', year: 2013 },
      { title: 'Vinland Saga', director: 'Wit Studio', year: 2019 },
      { title: 'Demon Slayer', director: 'ufotable', year: 2019 },
      { title: 'Tokyo Ghoul', director: 'Pierrot', year: 2014 },
    ]
  },
];