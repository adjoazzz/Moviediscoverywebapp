import type { Mood } from './moods';

// Dramas reuse the Mood type for compatibility.
// movie.director = network/studio, movie.title = drama title
export const dramas: Mood[] = [
  {
    id: 'visceral',
    name: 'Visceral',
    description: 'Raw, physical, gut-level dramas that hit you before you can think.',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -900 },
    size: 180,
    movies: [
      { title: 'Signal', director: 'tvN', year: 2016 },
      { title: 'Stranger', director: 'tvN', year: 2017 },
      { title: 'My Mister', director: 'tvN', year: 2018 },
      { title: 'Nirvana in Fire', director: 'Dragon Television', year: 2015 },
      { title: 'Mother', director: 'tvN', year: 2018 },
    ]
  },
];