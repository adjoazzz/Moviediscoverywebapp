export interface Movie {
  title: string;
  director: string;
  year: number;
  description: string;
}

export interface Mood {
  id: string;
  name: string;
  color: string;
  zone: 'red' | 'orange' | 'blue' | 'green';
  position: { x: number; y: number };
  size: number;
  movies: Movie[];
}

export const moods: Mood[] = [
  // Row 1 - Top (Red and Blue zones)
  {
    id: 'melancholic',
    name: 'Melancholic',
    color: '#3292aa',
    zone: 'blue',
    position: { x: -450, y: -300 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003, description: 'Loneliness in a foreign place' },
      { title: 'Manchester by the Sea', director: 'Kenneth Lonergan', year: 2016, description: 'Grief and quiet devastation' },
      { title: 'Eternal Sunshine', director: 'Michel Gondry', year: 2004, description: 'Love and loss intertwined' },
      { title: 'Her', director: 'Spike Jonze', year: 2013, description: 'Beautiful sadness of connection' },
    ]
  },
  {
    id: 'mysterious',
    name: 'Mysterious',
    color: '#2a7c92',
    zone: 'blue',
    position: { x: -250, y: -300 },
    size: 180,
    movies: [
      { title: 'Mulholland Drive', director: 'David Lynch', year: 2001, description: 'Enigmatic dream logic' },
      { title: 'The Lighthouse', director: 'Robert Eggers', year: 2019, description: 'Hypnotic maritime descent' },
      { title: 'Under the Skin', director: 'Jonathan Glazer', year: 2013, description: 'Alien and unsettling' },
      { title: 'Blade Runner 2049', director: 'Denis Villeneuve', year: 2017, description: 'Haunting questions of existence' },
    ]
  },
  {
    id: 'thrilling',
    name: 'Thrilling',
    color: '#ee0a0e',
    zone: 'red',
    position: { x: -50, y: -300 },
    size: 180,
    movies: [
      { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991, description: 'A psychological thriller that keeps you on edge' },
      { title: 'Parasite', director: 'Bong Joon-ho', year: 2019, description: 'Unpredictable twists in every frame' },
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007, description: 'Relentless tension from start to finish' },
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014, description: 'Heart-pounding pursuit of perfection' },
    ]
  },
  {
    id: 'intense',
    name: 'Intense',
    color: '#c41e20',
    zone: 'red',
    position: { x: 150, y: -300 },
    size: 180,
    movies: [
      { title: 'Uncut Gems', director: 'Safdie Brothers', year: 2019, description: 'Anxiety-inducing from the first minute' },
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000, description: 'Visceral descent into obsession' },
      { title: 'Prisoners', director: 'Denis Villeneuve', year: 2013, description: 'Gripping moral complexity' },
      { title: 'There Will Be Blood', director: 'Paul Thomas Anderson', year: 2007, description: 'Raw ambition and darkness' },
    ]
  },

  // Row 2
  {
    id: 'dreamy',
    name: 'Dreamy',
    color: '#5aafcc',
    zone: 'blue',
    position: { x: -450, y: -100 },
    size: 180,
    movies: [
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000, description: 'Sensual slow-burn romance' },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011, description: 'Poetic meditation on existence' },
      { title: 'Only Lovers Left Alive', director: 'Jim Jarmusch', year: 2013, description: 'Languid immortal romance' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001, description: 'Fantastical Parisian daydream' },
    ]
  },
  {
    id: 'introspective',
    name: 'Introspective',
    color: '#4293a8',
    zone: 'blue',
    position: { x: -250, y: -100 },
    size: 180,
    movies: [
      { title: 'Synecdoche, New York', director: 'Charlie Kaufman', year: 2008, description: 'Labyrinthine self-examination' },
      { title: 'The Master', director: 'Paul Thomas Anderson', year: 2012, description: 'Searching for meaning and belonging' },
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017, description: 'Time, memory, and existence' },
      { title: 'The Social Network', director: 'David Fincher', year: 2010, description: 'Ambition and isolation' },
    ]
  },
  {
    id: 'rebellious',
    name: 'Rebellious',
    color: '#a8323e',
    zone: 'red',
    position: { x: -50, y: -100 },
    size: 180,
    movies: [
      { title: 'Fight Club', director: 'David Fincher', year: 1999, description: 'Anarchic questioning of society' },
      { title: 'Do the Right Thing', director: 'Spike Lee', year: 1989, description: 'Bold confrontation of injustice' },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015, description: 'Kinetic resistance and survival' },
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016, description: 'Defying expectations with quiet power' },
    ]
  },
  {
    id: 'visceral',
    name: 'Visceral',
    color: '#d64550',
    zone: 'red',
    position: { x: 150, y: -100 },
    size: 180,
    movies: [
      { title: 'Enter the Void', director: 'Gaspar Noé', year: 2009, description: 'Overwhelming sensory experience' },
      { title: 'Climax', director: 'Gaspar Noé', year: 2018, description: 'Raw, physical cinema' },
      { title: 'The Revenant', director: 'Alejandro Iñárritu', year: 2015, description: 'Primal survival instinct' },
      { title: 'Oldboy', director: 'Park Chan-wook', year: 2003, description: 'Brutal emotional reckoning' },
    ]
  },

  // Row 3
  {
    id: 'romantic',
    name: 'Romantic',
    color: '#66cc88',
    zone: 'green',
    position: { x: -450, y: 100 },
    size: 180,
    movies: [
      { title: 'Before Sunset', director: 'Richard Linklater', year: 2004, description: 'Intimate conversation and connection' },
      { title: 'The Notebook', director: 'Nick Cassavetes', year: 2004, description: 'Timeless love story' },
      { title: 'Pride and Prejudice', director: 'Joe Wright', year: 2005, description: 'Classic romantic tension' },
      { title: 'Carol', director: 'Todd Haynes', year: 2015, description: 'Forbidden love blooming' },
    ]
  },
  {
    id: 'liberating',
    name: 'Liberating',
    color: '#4fc26c',
    zone: 'green',
    position: { x: -250, y: 100 },
    size: 180,
    movies: [
      { title: 'Thelma & Louise', director: 'Ridley Scott', year: 1991, description: 'Breaking free from constraints' },
      { title: 'Into the Wild', director: 'Sean Penn', year: 2007, description: 'Escaping society for nature' },
      { title: 'Lady Bird', director: 'Greta Gerwig', year: 2017, description: 'Finding yourself and flying' },
      { title: 'The Motorcycle Diaries', director: 'Walter Salles', year: 2004, description: 'Transformative journey of discovery' },
    ]
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: '#d19354',
    zone: 'orange',
    position: { x: -50, y: 100 },
    size: 180,
    movies: [
      { title: 'Stand by Me', director: 'Rob Reiner', year: 1986, description: 'Bittersweet memories of youth' },
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017, description: 'Summer of first love' },
      { title: 'Before Sunrise', director: 'Richard Linklater', year: 1995, description: 'Fleeting magical connection' },
      { title: 'The Sandlot', director: 'David Mickey Evans', year: 1993, description: 'Golden days of childhood' },
    ]
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    color: '#ffb366',
    zone: 'orange',
    position: { x: 150, y: 100 },
    size: 180,
    movies: [
      { title: 'Moonrise Kingdom', director: 'Wes Anderson', year: 2012, description: 'Eccentric young love story' },
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013, description: 'Imaginative exploration of life' },
      { title: 'Big Fish', director: 'Tim Burton', year: 2003, description: 'Tall tales and beautiful myths' },
      { title: 'Fantastic Mr. Fox', director: 'Wes Anderson', year: 2009, description: 'Charming stop-motion adventure' },
    ]
  },

  // Row 4 - Bottom (Green and Orange zones)
  {
    id: 'peaceful',
    name: 'Peaceful',
    color: '#0c9a39',
    zone: 'green',
    position: { x: -450, y: 300 },
    size: 180,
    movies: [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', year: 1988, description: 'Gentle wonder and innocence' },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016, description: 'Quiet beauty in routine' },
      { title: 'A River Runs Through It', director: 'Robert Redford', year: 1992, description: 'Serene natural harmony' },
      { title: 'Nomadland', director: 'Chloé Zhao', year: 2020, description: 'Calm wandering through America' },
    ]
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    color: '#2db350',
    zone: 'green',
    position: { x: -250, y: 300 },
    size: 180,
    movies: [
      { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994, description: 'Enduring hope against all odds' },
      { title: 'Life is Beautiful', director: 'Roberto Benigni', year: 1997, description: 'Love triumphing over darkness' },
      { title: 'The Pursuit of Happyness', director: 'Gabriele Muccino', year: 2006, description: 'Persevering toward dreams' },
      { title: 'Up', director: 'Pete Docter', year: 2009, description: "It's never too late" },
    ]
  },
  {
    id: 'uplifting',
    name: 'Uplifting',
    color: '#ee870a',
    zone: 'orange',
    position: { x: -50, y: 300 },
    size: 180,
    movies: [
      { title: 'Little Miss Sunshine', director: 'Jonathan Dayton', year: 2006, description: 'Heartwarming family journey' },
      { title: 'The Intouchables', director: 'Olivier Nakache', year: 2011, description: 'Joyful celebration of friendship' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001, description: 'Delightfully whimsical warmth' },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016, description: 'Dreams soaring to life' },
    ]
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    color: '#f59e42',
    zone: 'orange',
    position: { x: 150, y: 300 },
    size: 180,
    movies: [
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014, description: 'Stylish escapade through history' },
      { title: 'Indiana Jones', director: 'Steven Spielberg', year: 1981, description: 'Classic treasure hunting thrills' },
      { title: 'Life of Pi', director: 'Ang Lee', year: 2012, description: 'Epic journey of survival' },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', year: 2001, description: 'Magical world of wonder' },
    ]
  },
];