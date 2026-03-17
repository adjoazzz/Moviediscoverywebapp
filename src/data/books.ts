import type { Mood } from './moods';

// Books reuse the Mood type for compatibility.
// movie.director = author, movie.title = book title
export const books: Mood[] = [
  {
    id: 'visceral',
    name: 'Visceral',
    description: 'Raw, unflinching books that leave a physical imprint on you.',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -900 },
    size: 180,
    movies: [
      { title: 'Blood Meridian', director: 'Cormac McCarthy', year: 1985 },
      { title: 'The Road', director: 'Cormac McCarthy', year: 2006 },
      { title: 'American Psycho', director: 'Bret Easton Ellis', year: 1991 },
      { title: 'A Little Life', director: 'Hanya Yanagihara', year: 2015 },
      { title: 'We Need to Talk About Kevin', director: 'Lionel Shriver', year: 2003 },
    ]
  },
];