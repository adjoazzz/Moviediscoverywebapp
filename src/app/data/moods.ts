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
 // ==================== ROW 1 (y = -1100) ====================
  {
    id: 'melancholic',
    name: 'Melancholic',
    color: '#3292aa',
    zone: 'blue',
    position: { x: -700, y: -1100 },
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
    position: { x: -500, y: -1100 },
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
    position: { x: -300, y: -1100 },
    size: 180,
    movies: [
      { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991, description: 'Psychological thriller' },
      { title: 'Parasite', director: 'Bong Joon-ho', year: 2019, description: 'Unpredictable twists' },
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007, description: 'Relentless tension' },
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014, description: 'Pursuit of perfection' },
    ]
  },
  {
    id: 'intense',
    name: 'Intense',
    color: '#c41e20',
    zone: 'red',
    position: { x: -100, y: -1100 },
    size: 180,
    movies: [
      { title: 'Uncut Gems', director: 'Safdie Brothers', year: 2019, description: 'Anxiety-inducing chaos' },
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000, description: 'Visceral descent' },
      { title: 'Prisoners', director: 'Denis Villeneuve', year: 2013, description: 'Gripping moral complexity' },
      { title: 'There Will Be Blood', director: 'Paul Thomas Anderson', year: 2007, description: 'Raw ambition' },
    ]
  },
  {
    id: 'dreamy',
    name: 'Dreamy',
    color: '#5aafcc',
    zone: 'blue',
    position: { x: 100, y: -1100 },
    size: 180,
    movies: [
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000, description: 'Sensual slow-burn romance' },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011, description: 'Poetic meditation' },
      { title: 'Only Lovers Left Alive', director: 'Jim Jarmusch', year: 2013, description: 'Languid immortal romance' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001, description: 'Parisian daydream' },
    ]
  },
  {
    id: 'introspective',
    name: 'Introspective',
    color: '#4293a8',
    zone: 'blue',
    position: { x: 300, y: -1100 },
    size: 180,
    movies: [
      { title: 'Synecdoche, New York', director: 'Charlie Kaufman', year: 2008, description: 'Self-examination' },
      { title: 'The Master', director: 'Paul Thomas Anderson', year: 2012, description: 'Searching for meaning' },
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017, description: 'Time and memory' },
      { title: 'The Social Network', director: 'David Fincher', year: 2010, description: 'Ambition and isolation' },
    ]
  },
  {
    id: 'rebellious',
    name: 'Rebellious',
    color: '#a8323e',
    zone: 'red',
    position: { x: 500, y: -1100 },
    size: 180,
    movies: [
      { title: 'Fight Club', director: 'David Fincher', year: 1999, description: 'Anarchic questioning' },
      { title: 'Do the Right Thing', director: 'Spike Lee', year: 1989, description: 'Confronting injustice' },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015, description: 'Kinetic resistance' },
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016, description: 'Defying expectations' },
    ]
  },
  {
    id: 'visceral',
    name: 'Visceral',
    color: '#d64550',
    zone: 'red',
    position: { x: 700, y: -1100 },
    size: 180,
    movies: [
      { title: 'Enter the Void', director: 'Gaspar Noé', year: 2009, description: 'Sensory experience' },
      { title: 'Climax', director: 'Gaspar Noé', year: 2018, description: 'Raw, physical cinema' },
      { title: 'The Revenant', director: 'Alejandro Iñárritu', year: 2015, description: 'Primal survival' },
      { title: 'Oldboy', director: 'Park Chan-wook', year: 2003, description: 'Brutal reckoning' },
    ]
  },

  // ==================== ROW 2 (y = -900) ====================
  {
    id: 'romantic',
    name: 'Romantic',
    color: '#66cc88',
    zone: 'green',
    position: { x: -700, y: -900 },
    size: 180,
    movies: [
      { title: 'Before Sunset', director: 'Richard Linklater', year: 2004, description: 'Intimate conversation' },
      { title: 'The Notebook', director: 'Nick Cassavetes', year: 2004, description: 'Timeless love' },
      { title: 'Pride and Prejudice', director: 'Joe Wright', year: 2005, description: 'Classic tension' },
      { title: 'Carol', director: 'Todd Haynes', year: 2015, description: 'Forbidden love' },
    ]
  },
  {
    id: 'liberating',
    name: 'Liberating',
    color: '#4fc26c',
    zone: 'green',
    position: { x: -500, y: -900 },
    size: 180,
    movies: [
      { title: 'Thelma & Louise', director: 'Ridley Scott', year: 1991, description: 'Breaking free' },
      { title: 'Into the Wild', director: 'Sean Penn', year: 2007, description: 'Escaping society' },
      { title: 'Lady Bird', director: 'Greta Gerwig', year: 2017, description: 'Finding yourself' },
      { title: 'The Motorcycle Diaries', director: 'Walter Salles', year: 2004, description: 'Journey of discovery' },
    ]
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: '#d19354',
    zone: 'orange',
    position: { x: -300, y: -900 },
    size: 180,
    movies: [
      { title: 'Stand by Me', director: 'Rob Reiner', year: 1986, description: 'Memories of youth' },
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017, description: 'Summer of first love' },
      { title: 'Before Sunrise', director: 'Richard Linklater', year: 1995, description: 'Fleeting connection' },
      { title: 'The Sandlot', director: 'David Mickey Evans', year: 1993, description: 'Golden childhood' },
    ]
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    color: '#ffb366',
    zone: 'orange',
    position: { x: -100, y: -900 },
    size: 180,
    movies: [
      { title: 'Moonrise Kingdom', director: 'Wes Anderson', year: 2012, description: 'Eccentric young love' },
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013, description: 'Imaginative exploration' },
      { title: 'Big Fish', director: 'Tim Burton', year: 2003, description: 'Beautiful myths' },
      { title: 'Fantastic Mr. Fox', director: 'Wes Anderson', year: 2009, description: 'Charming adventure' },
    ]
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    color: '#0c9a39',
    zone: 'green',
    position: { x: 100, y: -900 },
    size: 180,
    movies: [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', year: 1988, description: 'Gentle wonder' },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016, description: 'Beauty in routine' },
      { title: 'A River Runs Through It', director: 'Robert Redford', year: 1992, description: 'Natural harmony' },
      { title: 'Nomadland', director: 'Chloé Zhao', year: 2020, description: 'Calm wandering' },
    ]
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    color: '#2db350',
    zone: 'green',
    position: { x: 300, y: -900 },
    size: 180,
    movies: [
      { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994, description: 'Enduring hope' },
      { title: 'Life is Beautiful', director: 'Roberto Benigni', year: 1997, description: 'Love triumphing' },
      { title: 'The Pursuit of Happyness', director: 'Gabriele Muccino', year: 2006, description: 'Persevering' },
      { title: 'Up', director: 'Pete Docter', year: 2009, description: "Never too late" },
    ]
  },
  {
    id: 'uplifting',
    name: 'Uplifting',
    color: '#ee870a',
    zone: 'orange',
    position: { x: 500, y: -900 },
    size: 180,
    movies: [
      { title: 'Little Miss Sunshine', director: 'Jonathan Dayton', year: 2006, description: 'Heartwarming journey' },
      { title: 'The Intouchables', director: 'Olivier Nakache', year: 2011, description: 'Celebration of friendship' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001, description: 'Whimsical warmth' },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016, description: 'Dreams soaring' },
    ]
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    color: '#f59e42',
    zone: 'orange',
    position: { x: 700, y: -900 },
    size: 180,
    movies: [
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014, description: 'Stylish escapade' },
      { title: 'Raiders of the Lost Ark', director: 'Steven Spielberg', year: 1981, description: 'Treasure hunting thrills' },
      { title: 'Life of Pi', director: 'Ang Lee', year: 2012, description: 'Epic journey' },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', year: 2001, description: 'Magical world' },
    ]
  },

  // ==================== ROW 3 (y = -700) ====================
  {
    id: 'ethereal',
    name: 'Ethereal',
    color: '#9db4c0',
    zone: 'blue',
    position: { x: -700, y: -700 },
    size: 180,
    movies: [
      { title: 'The Fountain', director: 'Darren Aronofsky', year: 2006, description: 'Transcendent love story' },
      { title: 'Annihilation', director: 'Alex Garland', year: 2018, description: 'Strange and beautiful' },
      { title: 'The Fall', director: 'Tarsem Singh', year: 2006, description: 'Visually stunning fantasy' },
      { title: 'Wings of Desire', director: 'Wim Wenders', year: 1987, description: 'Angels observing life' },
    ]
  },
  {
    id: 'contemplative',
    name: 'Contemplative',
    color: '#5b8fa3',
    zone: 'blue',
    position: { x: -500, y: -700 },
    size: 180,
    movies: [
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016, description: 'Language and time' },
      { title: 'Columbus', director: 'Kogonada', year: 2017, description: 'Architecture and connection' },
      { title: 'Stalker', director: 'Andrei Tarkovsky', year: 1979, description: 'Philosophical journey' },
      { title: 'First Reformed', director: 'Paul Schrader', year: 2017, description: 'Crisis of faith' },
    ]
  },
  {
    id: 'vengeful',
    name: 'Vengeful',
    color: '#8b1a1a',
    zone: 'red',
    position: { x: -300, y: -700 },
    size: 180,
    movies: [
      { title: 'Kill Bill', director: 'Quentin Tarantino', year: 2003, description: 'Revenge odyssey' },
      { title: 'The Count of Monte Cristo', director: 'Kevin Reynolds', year: 2002, description: 'Justice served cold' },
      { title: 'I Saw the Devil', director: 'Kim Jee-woon', year: 2010, description: 'Dark retribution' },
      { title: 'Blue Ruin', director: 'Jeremy Saulnier', year: 2013, description: 'Brutal consequences' },
    ]
  },
  {
    id: 'chaotic',
    name: 'Chaotic',
    color: '#ff4444',
    zone: 'red',
    position: { x: -100, y: -700 },
    size: 180,
    movies: [
      { title: 'Uncut Gems', director: 'Safdie Brothers', year: 2019, description: 'Relentless chaos' },
      { title: 'Good Time', director: 'Safdie Brothers', year: 2017, description: 'One wild night' },
      { title: 'Spring Breakers', director: 'Harmony Korine', year: 2012, description: 'Neon fever dream' },
      { title: 'Fear and Loathing in Las Vegas', director: 'Terry Gilliam', year: 1998, description: 'Psychedelic madness' },
    ]
  },
  {
    id: 'surreal',
    name: 'Surreal',
    color: '#7b68ee',
    zone: 'blue',
    position: { x: 100, y: -700 },
    size: 180,
    movies: [
      { title: 'Eraserhead', director: 'David Lynch', year: 1977, description: 'Industrial nightmare' },
      { title: 'The Holy Mountain', director: 'Alejandro Jodorowsky', year: 1973, description: 'Mystical journey' },
      { title: 'Donnie Darko', director: 'Richard Kelly', year: 2001, description: 'Time travel mystery' },
      { title: 'Being John Malkovich', director: 'Spike Jonze', year: 1999, description: 'Absurdist comedy' },
    ]
  },
  {
    id: 'hypnotic',
    name: 'Hypnotic',
    color: '#4a5f7f',
    zone: 'blue',
    position: { x: 300, y: -700 },
    size: 180,
    movies: [
      { title: 'Enter the Void', director: 'Gaspar Noé', year: 2009, description: 'POV journey through death' },
      { title: 'Koyaanisqatsi', director: 'Godfrey Reggio', year: 1982, description: 'Visual meditation' },
      { title: 'Mandy', director: 'Panos Cosmatos', year: 2018, description: 'Psychedelic revenge' },
      { title: 'Valhalla Rising', director: 'Nicolas Winding Refn', year: 2009, description: 'Brutal odyssey' },
    ]
  },
  {
    id: 'provocative',
    name: 'Provocative',
    color: '#b22222',
    zone: 'red',
    position: { x: 500, y: -700 },
    size: 180,
    movies: [
      { title: 'The Handmaiden', director: 'Park Chan-wook', year: 2016, description: 'Erotic thriller' },
      { title: 'Black Swan', director: 'Darren Aronofsky', year: 2010, description: 'Obsessive perfection' },
      { title: 'Eyes Wide Shut', director: 'Stanley Kubrick', year: 1999, description: 'Mysterious desires' },
      { title: 'Nymphomaniac', director: 'Lars von Trier', year: 2013, description: 'Sexual exploration' },
    ]
  },
  {
    id: 'disturbing',
    name: 'Disturbing',
    color: '#6a0dad',
    zone: 'red',
    position: { x: 700, y: -700 },
    size: 180,
    movies: [
      { title: 'Hereditary', director: 'Ari Aster', year: 2018, description: 'Family horror' },
      { title: 'Audition', director: 'Takashi Miike', year: 1999, description: 'Slow-burn terror' },
      { title: 'Funny Games', director: 'Michael Haneke', year: 1997, description: 'Cruel experiment' },
      { title: 'Midsommar', director: 'Ari Aster', year: 2019, description: 'Daylight nightmare' },
    ]
  },

  // ==================== ROW 4 (y = -500) ====================
  {
    id: 'tender',
    name: 'Tender',
    color: '#ffb6c1',
    zone: 'green',
    position: { x: -700, y: -500 },
    size: 180,
    movies: [
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016, description: 'Coming of age story' },
      { title: 'The Florida Project', director: 'Sean Baker', year: 2017, description: 'Childhood innocence' },
      { title: 'Aftersun', director: 'Charlotte Wells', year: 2022, description: 'Father-daughter bond' },
      { title: 'Past Lives', director: 'Celine Song', year: 2023, description: 'Paths not taken' },
    ]
  },
  {
    id: 'empowering',
    name: 'Empowering',
    color: '#32cd32',
    zone: 'green',
    position: { x: -500, y: -500 },
    size: 180,
    movies: [
      { title: 'Hidden Figures', director: 'Theodore Melfi', year: 2016, description: 'Breaking barriers' },
      { title: 'Erin Brockovich', director: 'Steven Soderbergh', year: 2000, description: 'Fighting for justice' },
      { title: 'Joy', director: 'David O. Russell', year: 2015, description: 'Self-made success' },
      { title: 'The Help', director: 'Tate Taylor', year: 2011, description: 'Finding voice' },
    ]
  },
  {
    id: 'vintage',
    name: 'Vintage',
    color: '#daa520',
    zone: 'orange',
    position: { x: -300, y: -500 },
    size: 180,
    movies: [
      { title: 'Cinema Paradiso', director: 'Giuseppe Tornatore', year: 1988, description: 'Love of film' },
      { title: 'Roman Holiday', director: 'William Wyler', year: 1953, description: 'Classic romance' },
      { title: 'Casablanca', director: 'Michael Curtiz', year: 1942, description: 'Timeless love' },
      { title: 'Breakfast at Tiffany\'s', director: 'Blake Edwards', year: 1961, description: 'Iconic elegance' },
    ]
  },
  {
    id: 'eccentric',
    name: 'Eccentric',
    color: '#ff6347',
    zone: 'orange',
    position: { x: -100, y: -500 },
    size: 180,
    movies: [
      { title: 'The Lobster', director: 'Yorgos Lanthimos', year: 2015, description: 'Absurdist romance' },
      { title: 'Swiss Army Man', director: 'Daniels', year: 2016, description: 'Wildly original' },
      { title: 'I Heart Huckabees', director: 'David O. Russell', year: 2004, description: 'Existential comedy' },
      { title: 'Synecdoche, New York', director: 'Charlie Kaufman', year: 2008, description: 'Meta masterpiece' },
    ]
  },
  {
    id: 'tranquil',
    name: 'Tranquil',
    color: '#87ceeb',
    zone: 'blue',
    position: { x: 100, y: -500 },
    size: 180,
    movies: [
      { title: 'Minari', director: 'Lee Isaac Chung', year: 2020, description: 'Quiet family drama' },
      { title: 'The Straight Story', director: 'David Lynch', year: 1999, description: 'Gentle journey' },
      { title: 'Still Walking', director: 'Hirokazu Kore-eda', year: 2008, description: 'Family gathering' },
      { title: 'Certified Copy', director: 'Abbas Kiarostami', year: 2010, description: 'Contemplative walk' },
    ]
  },
  {
    id: 'optimistic',
    name: 'Optimistic',
    color: '#98fb98',
    zone: 'green',
    position: { x: 300, y: -500 },
    size: 180,
    movies: [
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013, description: 'Dream big' },
      { title: 'Chef', director: 'Jon Favreau', year: 2014, description: 'Starting fresh' },
      { title: 'Yes Man', director: 'Peyton Reed', year: 2008, description: 'Saying yes to life' },
      { title: 'Begin Again', director: 'John Carney', year: 2013, description: 'Second chances' },
    ]
  },
  {
    id: 'magical',
    name: 'Magical',
    color: '#dda0dd',
    zone: 'orange',
    position: { x: 500, y: -500 },
    size: 180,
    movies: [
      { title: 'Pan\'s Labyrinth', director: 'Guillermo del Toro', year: 2006, description: 'Dark fairy tale' },
      { title: 'The Shape of Water', director: 'Guillermo del Toro', year: 2017, description: 'Romantic fantasy' },
      { title: 'Howl\'s Moving Castle', director: 'Hayao Miyazaki', year: 2004, description: 'Enchanted adventure' },
      { title: 'Stardust', director: 'Matthew Vaughn', year: 2007, description: 'Fantastical quest' },
    ]
  },
  {
    id: 'epic',
    name: 'Epic',
    color: '#b8860b',
    zone: 'orange',
    position: { x: 700, y: -500 },
    size: 180,
    movies: [
      { title: 'Lawrence of Arabia', director: 'David Lean', year: 1962, description: 'Desert epic' },
      { title: 'The Lord of the Rings', director: 'Peter Jackson', year: 2001, description: 'Fantasy journey' },
      { title: 'Dune', director: 'Denis Villeneuve', year: 2021, description: 'Sci-fi spectacle' },
      { title: 'Apocalypse Now', director: 'Francis Ford Coppola', year: 1979, description: 'War odyssey' },
    ]
  },

  // ==================== ROW 5 (y = -300) ====================
  {
    id: 'bittersweet',
    name: 'Bittersweet',
    color: '#cd853f',
    zone: 'orange',
    position: { x: -700, y: -300 },
    size: 180,
    movies: [
      { title: 'Coco', director: 'Lee Unkrich', year: 2017, description: 'Death and remembrance' },
      { title: 'About Time', director: 'Richard Curtis', year: 2013, description: 'Time and love' },
      { title: 'Brooklyn', director: 'John Crowley', year: 2015, description: 'Immigration and love' },
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016, description: 'Language of loss' },
    ]
  },
  {
    id: 'triumphant',
    name: 'Triumphant',
    color: '#ffd700',
    zone: 'orange',
    position: { x: -500, y: -300 },
    size: 180,
    movies: [
      { title: 'Rocky', director: 'John G. Avildsen', year: 1976, description: 'Underdog victory' },
      { title: 'Rudy', director: 'David Anspaugh', year: 1993, description: 'Never give up' },
      { title: 'Remember the Titans', director: 'Boaz Yakin', year: 2000, description: 'Unity through sports' },
      { title: 'The Martian', director: 'Ridley Scott', year: 2015, description: 'Survival against odds' },
    ]
  },
  {
    id: 'gritty',
    name: 'Gritty',
    color: '#696969',
    zone: 'red',
    position: { x: -300, y: -300 },
    size: 180,
    movies: [
      { title: 'Taxi Driver', director: 'Martin Scorsese', year: 1976, description: 'Urban descent' },
      { title: 'City of God', director: 'Fernando Meirelles', year: 2002, description: 'Favela violence' },
      { title: 'The Wrestler', director: 'Darren Aronofsky', year: 2008, description: 'Broken dreams' },
      { title: 'Trainspotting', director: 'Danny Boyle', year: 1996, description: 'Addiction spiral' },
    ]
  },
  {
    id: 'electrifying',
    name: 'Electrifying',
    color: '#ff1493',
    zone: 'red',
    position: { x: -100, y: -300 },
    size: 180,
    movies: [
      { title: 'Drive', director: 'Nicolas Winding Refn', year: 2011, description: 'Neon noir' },
      { title: 'The Matrix', director: 'Wachowskis', year: 1999, description: 'Reality bending' },
      { title: 'Scott Pilgrim vs. the World', director: 'Edgar Wright', year: 2010, description: 'Video game love' },
      { title: 'Tron: Legacy', director: 'Joseph Kosinski', year: 2010, description: 'Digital world' },
    ]
  },
  {
    id: 'meditative',
    name: 'Meditative',
    color: '#778899',
    zone: 'blue',
    position: { x: 100, y: -300 },
    size: 180,
    movies: [
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011, description: 'Cosmic contemplation' },
      { title: '2001: A Space Odyssey', director: 'Stanley Kubrick', year: 1968, description: 'Space meditation' },
      { title: 'Solaris', director: 'Andrei Tarkovsky', year: 1972, description: 'Memory and loss' },
      { title: 'Silent Light', director: 'Carlos Reygadas', year: 2007, description: 'Slow cinema' },
    ]
  },
  {
    id: 'invigorating',
    name: 'Invigorating',
    color: '#00ced1',
    zone: 'blue',
    position: { x: 300, y: -300 },
    size: 180,
    movies: [
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014, description: 'Drumming intensity' },
      { title: 'Black Swan', director: 'Darren Aronofsky', year: 2010, description: 'Perfection pursuit' },
      { title: 'The Social Network', director: 'David Fincher', year: 2010, description: 'Fast-paced ambition' },
      { title: 'Steve Jobs', director: 'Danny Boyle', year: 2015, description: 'Backstage tension' },
    ]
  },
  {
    id: 'sinister',
    name: 'Sinister',
    color: '#2f4f4f',
    zone: 'red',
    position: { x: 500, y: -300 },
    size: 180,
    movies: [
      { title: 'The Witch', director: 'Robert Eggers', year: 2015, description: 'Period horror' },
      { title: 'The Shining', director: 'Stanley Kubrick', year: 1980, description: 'Hotel madness' },
      { title: 'Zodiac', director: 'David Fincher', year: 2007, description: 'Serial killer hunt' },
      { title: 'Seven', director: 'David Fincher', year: 1995, description: 'Dark detective work' },
    ]
  },
  {
    id: 'ominous',
    name: 'Ominous',
    color: '#191970',
    zone: 'red',
    position: { x: 700, y: -300 },
    size: 180,
    movies: [
      { title: 'The Lighthouse', director: 'Robert Eggers', year: 2019, description: 'Maritime madness' },
      { title: 'The VVitch', director: 'Robert Eggers', year: 2015, description: 'Colonial terror' },
      { title: 'It Follows', director: 'David Robert Mitchell', year: 2014, description: 'Inescapable dread' },
      { title: 'The Thing', director: 'John Carpenter', year: 1982, description: 'Antarctic paranoia' },
    ]
  },

  // ==================== ROW 6 (y = -100) ====================
  {
    id: 'sensual',
    name: 'Sensual',
    color: '#dc143c',
    zone: 'red',
    position: { x: -700, y: -100 },
    size: 180,
    movies: [
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017, description: 'Italian summer romance' },
      { title: 'Y Tu Mamá También', director: 'Alfonso Cuarón', year: 2001, description: 'Road trip awakening' },
      { title: 'Blue is the Warmest Color', director: 'Abdellatif Kechiche', year: 2013, description: 'Passionate love' },
      { title: 'Portrait of a Lady on Fire', director: 'Céline Sciamma', year: 2019, description: 'Forbidden desire' },
    ]
  },
  {
    id: 'jubilant',
    name: 'Jubilant',
    color: '#ff8c00',
    zone: 'orange',
    position: { x: -500, y: -100 },
    size: 180,
    movies: [
      { title: 'Mamma Mia!', director: 'Phyllida Lloyd', year: 2008, description: 'ABBA musical joy' },
      { title: 'The Greatest Showman', director: 'Michael Gracey', year: 2017, description: 'Circus spectacle' },
      { title: 'Sing Street', director: 'John Carney', year: 2016, description: '80s music dreams' },
      { title: 'School of Rock', director: 'Richard Linklater', year: 2003, description: 'Rock and roll fun' },
    ]
  },
  {
    id: 'wistful',
    name: 'Wistful',
    color: '#bc8f8f',
    zone: 'orange',
    position: { x: -300, y: -100 },
    size: 180,
    movies: [
      { title: 'The Before Trilogy', director: 'Richard Linklater', year: 1995, description: 'Love across time' },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016, description: 'Dreams and sacrifice' },
      { title: '500 Days of Summer', director: 'Marc Webb', year: 2009, description: 'Modern romance' },
      { title: 'Blue Valentine', director: 'Derek Cianfrance', year: 2010, description: 'Love\'s decay' },
    ]
  },
  {
    id: 'playful',
    name: 'Playful',
    color: '#ff69b4',
    zone: 'orange',
    position: { x: -100, y: -100 },
    size: 180,
    movies: [
      { title: 'Paddington 2', director: 'Paul King', year: 2017, description: 'Bear\'s charm' },
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014, description: 'Hotel caper' },
      { title: 'Scott Pilgrim', director: 'Edgar Wright', year: 2010, description: 'Comic book love' },
      { title: 'Everything Everywhere All at Once', director: 'Daniels', year: 2022, description: 'Multiverse madness' },
    ]
  },
  {
    id: 'serene',
    name: 'Serene',
    color: '#b0e0e6',
    zone: 'blue',
    position: { x: 100, y: -100 },
    size: 180,
    movies: [
      { title: 'The Secret World of Arrietty', director: 'Hiromasa Yonebayashi', year: 2010, description: 'Tiny world wonder' },
      { title: 'Ponyo', director: 'Hayao Miyazaki', year: 2008, description: 'Ocean magic' },
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017, description: 'Time standing still' },
      { title: 'The Straight Story', director: 'David Lynch', year: 1999, description: 'Cross-country journey' },
    ]
  },
  {
    id: 'inspiring',
    name: 'Inspiring',
    color: '#40e0d0',
    zone: 'green',
    position: { x: 300, y: -100 },
    size: 180,
    movies: [
      { title: 'Dead Poets Society', director: 'Peter Weir', year: 1989, description: 'Seize the day' },
      { title: 'Good Will Hunting', director: 'Gus Van Sant', year: 1997, description: 'Finding potential' },
      { title: 'October Sky', director: 'Joe Johnston', year: 1999, description: 'Rocket dreams' },
      { title: 'Searching for Bobby Fischer', director: 'Steven Zaillian', year: 1993, description: 'Chess prodigy' },
    ]
  },
  {
    id: 'frenetic',
    name: 'Frenetic',
    color: '#ff4500',
    zone: 'red',
    position: { x: 500, y: -100 },
    size: 180,
    movies: [
      { title: 'Run Lola Run', director: 'Tom Tykwer', year: 1998, description: 'Racing against time' },
      { title: 'Snatch', director: 'Guy Ritchie', year: 2000, description: 'Criminal chaos' },
      { title: 'Baby Driver', director: 'Edgar Wright', year: 2017, description: 'Musical getaway' },
      { title: 'The Bourne Supremacy', director: 'Paul Greengrass', year: 2004, description: 'Fast-paced thriller' },
    ]
  },
  {
    id: 'haunting',
    name: 'Haunting',
    color: '#483d8b',
    zone: 'blue',
    position: { x: 700, y: -100 },
    size: 180,
    movies: [
      { title: 'The Others', director: 'Alejandro Amenábar', year: 2001, description: 'Gothic mystery' },
      { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999, description: 'Seeing the dead' },
      { title: 'The Orphanage', director: 'J.A. Bayona', year: 2007, description: 'Maternal horror' },
      { title: 'Lake Mungo', director: 'Joel Anderson', year: 2008, description: 'Documentary terror' },
    ]
  },

  // ==================== ROW 7 (y = 100) ====================
  {
    id: 'heartwarming',
    name: 'Heartwarming',
    color: '#f08080',
    zone: 'orange',
    position: { x: -700, y: 100 },
    size: 180,
    movies: [
      { title: 'About Time', director: 'Richard Curtis', year: 2013, description: 'Time and family' },
      { title: 'The Farewell', director: 'Lulu Wang', year: 2019, description: 'Cultural goodbyes' },
      { title: 'Hunt for the Wilderpeople', director: 'Taika Waititi', year: 2016, description: 'Unlikely bond' },
      { title: 'A Beautiful Day in the Neighborhood', director: 'Marielle Heller', year: 2019, description: 'Mr. Rogers kindness' },
    ]
  },
  {
    id: 'exhilarating',
    name: 'Exhilarating',
    color: '#00ff7f',
    zone: 'green',
    position: { x: -500, y: 100 },
    size: 180,
    movies: [
      { title: 'Top Gun: Maverick', director: 'Joseph Kosinski', year: 2022, description: 'Sky-high thrills' },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015, description: 'Desert chase' },
      { title: 'Mission: Impossible - Fallout', director: 'Christopher McQuarrie', year: 2018, description: 'Impossible stunts' },
      { title: 'Edge of Tomorrow', director: 'Doug Liman', year: 2014, description: 'Time loop action' },
    ]
  },
  {
    id: 'cozy',
    name: 'Cozy',
    color: '#d2691e',
    zone: 'orange',
    position: { x: -300, y: 100 },
    size: 180,
    movies: [
      { title: 'The Holiday', director: 'Nancy Meyers', year: 2006, description: 'House swap romance' },
      { title: 'When Harry Met Sally', director: 'Rob Reiner', year: 1989, description: 'Friendship to love' },
      { title: 'Julie & Julia', director: 'Nora Ephron', year: 2009, description: 'Cooking joy' },
      { title: 'You\'ve Got Mail', director: 'Nora Ephron', year: 1998, description: 'Email romance' },
    ]
  },
  {
    id: 'delightful',
    name: 'Delightful',
    color: '#ffa07a',
    zone: 'orange',
    position: { x: -100, y: 100 },
    size: 180,
    movies: [
      { title: 'The Princess Bride', director: 'Rob Reiner', year: 1987, description: 'Fairy tale adventure' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001, description: 'Parisian whimsy' },
      { title: 'Ratatouille', director: 'Brad Bird', year: 2007, description: 'Culinary dreams' },
      { title: 'Sing', director: 'Garth Jennings', year: 2016, description: 'Musical competition' },
    ]
  },
  {
    id: 'soothing',
    name: 'Soothing',
    color: '#afeeee',
    zone: 'blue',
    position: { x: 100, y: 100 },
    size: 180,
    movies: [
      { title: 'A Quiet Place', director: 'John Krasinski', year: 2018, description: 'Silent survival (ironic!)' },
      { title: 'The Secret Garden', director: 'Agnieszka Holland', year: 1993, description: 'Garden healing' },
      { title: 'Whisper of the Heart', director: 'Yoshifumi Kondō', year: 1995, description: 'Creative awakening' },
      { title: 'The Secret Life of Pets', director: 'Chris Renaud', year: 2016, description: 'Pet adventures' },
    ]
  },
  {
    id: 'refreshing',
    name: 'Refreshing',
    color: '#7fffd4',
    zone: 'green',
    position: { x: 300, y: 100 },
    size: 180,
    movies: [
      { title: 'The Way Way Back', director: 'Nat Faxon', year: 2013, description: 'Summer coming-of-age' },
      { title: 'The Perks of Being a Wallflower', director: 'Stephen Chbosky', year: 2012, description: 'Teen authenticity' },
      { title: 'Sing Street', director: 'John Carney', year: 2016, description: 'Music liberation' },
      { title: 'Kings of Summer', director: 'Jordan Vogt-Roberts', year: 2013, description: 'Independence summer' },
    ]
  },
  {
    id: 'suspenseful',
    name: 'Suspenseful',
    color: '#8b0000',
    zone: 'red',
    position: { x: 500, y: 100 },
    size: 180,
    movies: [
      { title: 'Rear Window', director: 'Alfred Hitchcock', year: 1954, description: 'Voyeuristic thriller' },
      { title: 'Jaws', director: 'Steven Spielberg', year: 1975, description: 'Shark terror' },
      { title: 'Sicario', director: 'Denis Villeneuve', year: 2015, description: 'Border tension' },
      { title: 'Gravity', director: 'Alfonso Cuarón', year: 2013, description: 'Space survival' },
    ]
  },
  {
    id: 'eerie',
    name: 'Eerie',
    color: '#556b2f',
    zone: 'blue',
    position: { x: 700, y: 100 },
    size: 180,
    movies: [
      { title: 'Donnie Darko', director: 'Richard Kelly', year: 2001, description: 'Time loop mystery' },
      { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999, description: 'Seeing ghosts' },
      { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010, description: 'Asylum mystery' },
      { title: 'The Prestige', director: 'Christopher Nolan', year: 2006, description: 'Magic rivalry' },
    ]
  },

  // ==================== ROW 8 (y = 300) ====================
  {
    id: 'charming',
    name: 'Charming',
    color: '#ff7f50',
    zone: 'orange',
    position: { x: -700, y: 300 },
    size: 180,
    movies: [
      { title: 'Notting Hill', director: 'Roger Michell', year: 1999, description: 'Bookshop romance' },
      { title: 'Roman Holiday', director: 'William Wyler', year: 1953, description: 'Princess escape' },
      { title: 'Midnight in Paris', director: 'Woody Allen', year: 2011, description: 'Time travel romance' },
      { title: 'About a Boy', director: 'Chris Weitz', year: 2002, description: 'Unlikely friendship' },
    ]
  },
  {
    id: 'spirited',
    name: 'Spirited',
    color: '#3cb371',
    zone: 'green',
    position: { x: -500, y: 300 },
    size: 180,
    movies: [
      { title: 'Legally Blonde', director: 'Robert Luketic', year: 2001, description: 'Pink power' },
      { title: 'Pitch Perfect', director: 'Jason Moore', year: 2012, description: 'A cappella fun' },
      { title: 'Clueless', director: 'Amy Heckerling', year: 1995, description: 'Teen makeover' },
      { title: 'Mean Girls', director: 'Mark Waters', year: 2004, description: 'High school hierarchy' },
    ]
  },
  {
    id: 'folksy',
    name: 'Folksy',
    color: '#cd5c5c',
    zone: 'orange',
    position: { x: -300, y: 300 },
    size: 180,
    movies: [
      { title: 'O Brother, Where Art Thou?', director: 'Coen Brothers', year: 2000, description: 'Southern odyssey' },
      { title: 'Inside Llewyn Davis', director: 'Coen Brothers', year: 2013, description: 'Folk music struggle' },
      { title: 'A Serious Man', director: 'Coen Brothers', year: 2009, description: 'Suburban malaise' },
      { title: 'Nebraska', director: 'Alexander Payne', year: 2013, description: 'Father-son road trip' },
    ]
  },
  {
    id: 'fantastical',
    name: 'Fantastical',
    color: '#9370db',
    zone: 'orange',
    position: { x: -100, y: 300 },
    size: 180,
    movies: [
      { title: 'Pan\'s Labyrinth', director: 'Guillermo del Toro', year: 2006, description: 'Dark fantasy' },
      { title: 'The Wizard of Oz', director: 'Victor Fleming', year: 1939, description: 'Over the rainbow' },
      { title: 'Labyrinth', director: 'Jim Henson', year: 1986, description: 'Goblin king quest' },
      { title: 'The NeverEnding Story', director: 'Wolfgang Petersen', year: 1984, description: 'Book adventure' },
    ]
  },
  {
    id: 'blissful',
    name: 'Blissful',
    color: '#add8e6',
    zone: 'blue',
    position: { x: 100, y: 300 },
    size: 180,
    movies: [
      { title: 'Before Sunrise', director: 'Richard Linklater', year: 1995, description: 'One perfect night' },
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003, description: 'Tokyo connection' },
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000, description: 'Longing glances' },
      { title: 'Moonrise Kingdom', director: 'Wes Anderson', year: 2012, description: 'Young love escape' },
    ]
  },
  {
    id: 'radiant',
    name: 'Radiant',
    color: '#ffec8b',
    zone: 'orange',
    position: { x: 300, y: 300 },
    size: 180,
    movies: [
      { title: 'Sunshine', director: 'Danny Boyle', year: 2007, description: 'Reigniting the sun' },
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014, description: 'Pastel perfection' },
      { title: 'Big Fish', director: 'Tim Burton', year: 2003, description: 'Tall tales' },
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013, description: 'Epic daydream' },
    ]
  },
  {
    id: 'menacing',
    name: 'Menacing',
    color: '#800000',
    zone: 'red',
    position: { x: 500, y: 300 },
    size: 180,
    movies: [
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007, description: 'Relentless pursuit' },
      { title: 'There Will Be Blood', director: 'Paul Thomas Anderson', year: 2007, description: 'Oil empire greed' },
      { title: 'Nightcrawler', director: 'Dan Gilroy', year: 2014, description: 'Media predator' },
      { title: 'American Psycho', director: 'Mary Harron', year: 2000, description: 'Yuppie psychosis' },
    ]
  },
  {
    id: 'cryptic',
    name: 'Cryptic',
    color: '#2f4f4f',
    zone: 'blue',
    position: { x: 700, y: 300 },
    size: 180,
    movies: [
      { title: 'Primer', director: 'Shane Carruth', year: 2004, description: 'Time travel puzzle' },
      { title: 'Memento', director: 'Christopher Nolan', year: 2000, description: 'Reverse mystery' },
      { title: 'Triangle', director: 'Christopher Smith', year: 2009, description: 'Loop horror' },
      { title: 'Coherence', director: 'James Ward Byrkit', year: 2013, description: 'Reality fracture' },
    ]
  },

  // ==================== ROW 9 (y = 500) ====================
  {
    id: 'vivacious',
    name: 'Vivacious',
    color: '#ff1493',
    zone: 'orange',
    position: { x: -700, y: 500 },
    size: 180,
    movies: [
      { title: 'Moulin Rouge!', director: 'Baz Luhrmann', year: 2001, description: 'Bohemian rhapsody' },
      { title: 'Chicago', director: 'Rob Marshall', year: 2002, description: 'Jazz age murder' },
      { title: 'Burlesque', director: 'Steve Antin', year: 2010, description: 'Club dreams' },
      { title: 'The Rocky Horror Picture Show', director: 'Jim Sharman', year: 1975, description: 'Cult classic' },
    ]
  },
  {
    id: 'wholesome',
    name: 'Wholesome',
    color: '#90ee90',
    zone: 'green',
    position: { x: -500, y: 500 },
    size: 180,
    movies: [
      { title: 'The Sound of Music', director: 'Robert Wise', year: 1965, description: 'Musical hills' },
      { title: 'Mary Poppins', director: 'Robert Stevenson', year: 1964, description: 'Practically perfect' },
      { title: 'Cheaper by the Dozen', director: 'Shawn Levy', year: 2003, description: 'Big family chaos' },
      { title: 'Akeelah and the Bee', director: 'Doug Atchison', year: 2006, description: 'Spelling triumph' },
    ]
  },
  {
    id: 'quirky',
    name: 'Quirky',
    color: '#fa8072',
    zone: 'orange',
    position: { x: -300, y: 500 },
    size: 180,
    movies: [
      { title: 'Napoleon Dynamite', director: 'Jared Hess', year: 2004, description: 'Awkward teen' },
      { title: 'Juno', director: 'Jason Reitman', year: 2007, description: 'Teen pregnancy' },
      { title: 'Little Miss Sunshine', director: 'Jonathan Dayton', year: 2006, description: 'Beauty pageant' },
      { title: 'Garden State', director: 'Zach Braff', year: 2004, description: 'Return home' },
    ]
  },
  {
    id: 'enchanting',
    name: 'Enchanting',
    color: '#da70d6',
    zone: 'orange',
    position: { x: -100, y: 500 },
    size: 180,
    movies: [
      { title: 'The Princess Bride', director: 'Rob Reiner', year: 1987, description: 'As you wish' },
      { title: 'Stardust', director: 'Matthew Vaughn', year: 2007, description: 'Falling star' },
      { title: 'Ella Enchanted', director: 'Tommy O\'Haver', year: 2004, description: 'Cursed obedience' },
      { title: 'Penelope', director: 'Mark Palansky', year: 2006, description: 'Pig-nosed princess' },
    ]
  },
  {
    id: 'mellow',
    name: 'Mellow',
    color: '#b0c4de',
    zone: 'blue',
    position: { x: 100, y: 500 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003, description: 'Quiet connection' },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016, description: 'Bus driver poet' },
      { title: 'The Station Agent', director: 'Tom McCarthy', year: 2003, description: 'Small town life' },
      { title: 'Away We Go', director: 'Sam Mendes', year: 2009, description: 'Finding home' },
    ]
  },
  {
    id: 'motivating',
    name: 'Motivating',
    color: '#20b2aa',
    zone: 'green',
    position: { x: 300, y: 500 },
    size: 180,
    movies: [
      { title: 'Coach Carter', director: 'Thomas Carter', year: 2005, description: 'Basketball discipline' },
      { title: 'We Are Marshall', director: 'McG', year: 2006, description: 'Rebuilding after tragedy' },
      { title: 'Miracle', director: 'Gavin O\'Connor', year: 2004, description: 'Hockey upset' },
      { title: 'Invictus', director: 'Clint Eastwood', year: 2009, description: 'Rugby unity' },
    ]
  },
  {
    id: 'nerve-wracking',
    name: 'Nerve-Wracking',
    color: '#b22222',
    zone: 'red',
    position: { x: 500, y: 500 },
    size: 180,
    movies: [
      { title: '127 Hours', director: 'Danny Boyle', year: 2010, description: 'Canyon survival' },
      { title: 'Buried', director: 'Rodrigo Cortés', year: 2010, description: 'Coffin entrapment' },
      { title: 'Locke', director: 'Steven Knight', year: 2013, description: 'Car confession' },
      { title: 'Phone Booth', director: 'Joel Schumacher', year: 2002, description: 'Sniper call' },
    ]
  },
  {
    id: 'uncanny',
    name: 'Uncanny',
    color: '#4b0082',
    zone: 'blue',
    position: { x: 700, y: 500 },
    size: 180,
    movies: [
      { title: 'Ex Machina', director: 'Alex Garland', year: 2014, description: 'AI test' },
      { title: 'The Lobster', director: 'Yorgos Lanthimos', year: 2015, description: 'Dating dystopia' },
      { title: 'Her', director: 'Spike Jonze', year: 2013, description: 'OS romance' },
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016, description: 'Alien language' },
    ]
  },

  // ==================== ROW 10 (y = 700) ====================
  {
    id: 'luxurious',
    name: 'Luxurious',
    color: '#ffd700',
    zone: 'orange',
    position: { x: -700, y: 700 },
    size: 180,
    movies: [
      { title: 'The Great Gatsby', director: 'Baz Luhrmann', year: 2013, description: 'Jazz age opulence' },
      { title: 'Marie Antoinette', director: 'Sofia Coppola', year: 2006, description: 'Versailles excess' },
      { title: 'Crazy Rich Asians', director: 'Jon M. Chu', year: 2018, description: 'Singapore wealth' },
      { title: 'The Devil Wears Prada', director: 'David Frankel', year: 2006, description: 'Fashion empire' },
    ]
  },
  {
    id: 'earnest',
    name: 'Earnest',
    color: '#66cdaa',
    zone: 'green',
    position: { x: -500, y: 700 },
    size: 180,
    movies: [
      { title: 'Spotlight', director: 'Tom McCarthy', year: 2015, description: 'Investigative journalism' },
      { title: 'The Post', director: 'Steven Spielberg', year: 2017, description: 'Pentagon Papers' },
      { title: 'All the President\'s Men', director: 'Alan J. Pakula', year: 1976, description: 'Watergate investigation' },
      { title: 'The Insider', director: 'Michael Mann', year: 1999, description: 'Tobacco whistleblower' },
    ]
  },
  {
    id: 'retro',
    name: 'Retro',
    color: '#dda0dd',
    zone: 'orange',
    position: { x: -300, y: 700 },
    size: 180,
    movies: [
      { title: 'Dazed and Confused', director: 'Richard Linklater', year: 1993, description: '70s last day' },
      { title: 'American Graffiti', director: 'George Lucas', year: 1973, description: '60s cruising' },
      { title: 'Almost Famous', director: 'Cameron Crowe', year: 2000, description: '70s rock journalism' },
      { title: 'Boogie Nights', director: 'Paul Thomas Anderson', year: 1997, description: '70s porn industry' },
    ]
  },
  {
    id: 'zany',
    name: 'Zany',
    color: '#ff6347',
    zone: 'orange',
    position: { x: -100, y: 700 },
    size: 180,
    movies: [
      { title: 'The Lego Movie', director: 'Phil Lord', year: 2014, description: 'Everything is awesome' },
      { title: 'Ace Ventura', director: 'Tom Shadyac', year: 1994, description: 'Pet detective' },
      { title: 'Anchorman', director: 'Adam McKay', year: 2004, description: 'News team comedy' },
      { title: 'Tropic Thunder', director: 'Ben Stiller', year: 2008, description: 'War movie satire' },
    ]
  },
  {
    id: 'restful',
    name: 'Restful',
    color: '#e0ffff',
    zone: 'blue',
    position: { x: 100, y: 700 },
    size: 180,
    movies: [
      { title: 'The Secret Garden', director: 'Agnieszka Holland', year: 1993, description: 'Garden healing' },
      { title: 'Kiki\'s Delivery Service', director: 'Hayao Miyazaki', year: 1989, description: 'Witch growing up' },
      { title: 'The Wind Rises', director: 'Hayao Miyazaki', year: 2013, description: 'Dream of flight' },
      { title: 'From Up on Poppy Hill', director: 'Gorō Miyazaki', year: 2011, description: 'Quiet romance' },
    ]
  },
  {
    id: 'empathetic',
    name: 'Empathetic',
    color: '#87ceeb',
    zone: 'green',
    position: { x: 300, y: 700 },
    size: 180,
    movies: [
      { title: 'Room', director: 'Lenny Abrahamson', year: 2015, description: 'Captivity and escape' },
      { title: 'Wonder', director: 'Stephen Chbosky', year: 2017, description: 'Facial difference' },
      { title: 'The Theory of Everything', director: 'James Marsh', year: 2014, description: 'Hawking story' },
      { title: 'Lion', director: 'Garth Davis', year: 2016, description: 'Finding home' },
    ]
  },
  {
    id: 'chilling',
    name: 'Chilling',
    color: '#800080',
    zone: 'red',
    position: { x: 500, y: 700 },
    size: 180,
    movies: [
      { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991, description: 'FBI vs serial killer' },
      { title: 'Zodiac', director: 'David Fincher', year: 2007, description: 'Hunt for killer' },
      { title: 'Catch Me If You Can', director: 'Steven Spielberg', year: 2002, description: 'Con artist chase' },
      { title: 'The Girl with the Dragon Tattoo', director: 'David Fincher', year: 2011, description: 'Dark mystery' },
    ]
  },
  {
    id: 'puzzling',
    name: 'Puzzling',
    color: '#708090',
    zone: 'blue',
    position: { x: 700, y: 700 },
    size: 180,
    movies: [
      { title: 'Inception', director: 'Christopher Nolan', year: 2010, description: 'Dream heist' },
      { title: 'The Prestige', director: 'Christopher Nolan', year: 2006, description: 'Magician rivalry' },
      { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010, description: 'Asylum investigation' },
      { title: 'Gone Girl', director: 'David Fincher', year: 2014, description: 'Missing wife' },
    ]
  },

  // ==================== ROW 11 (y = 900) ====================
  {
    id: 'glamorous',
    name: 'Glamorous',
    color: '#ff69b4',
    zone: 'orange',
    position: { x: -700, y: 900 },
    size: 180,
    movies: [
      { title: 'Breakfast at Tiffany\'s', director: 'Blake Edwards', year: 1961, description: 'Audrey elegance' },
      { title: 'Funny Face', director: 'Stanley Donen', year: 1957, description: 'Fashion photography' },
      { title: 'Gentlemen Prefer Blondes', director: 'Howard Hawks', year: 1953, description: 'Diamonds are forever' },
      { title: 'Sabrina', director: 'Billy Wilder', year: 1954, description: 'Chauffeur\'s daughter' },
    ]
  },
  {
    id: 'grounded',
    name: 'Grounded',
    color: '#8fbc8f',
    zone: 'green',
    position: { x: -500, y: 900 },
    size: 180,
    movies: [
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016, description: 'Miami coming-of-age' },
      { title: 'The Florida Project', director: 'Sean Baker', year: 2017, description: 'Motel childhood' },
      { title: 'Minari', director: 'Lee Isaac Chung', year: 2020, description: 'Korean farm family' },
      { title: 'Nomadland', director: 'Chloé Zhao', year: 2020, description: 'Van life' },
    ]
  },
  {
    id: 'groovy',
    name: 'Groovy',
    color: '#ff8c00',
    zone: 'orange',
    position: { x: -300, y: 900 },
    size: 180,
    movies: [
      { title: 'Austin Powers', director: 'Jay Roach', year: 1997, description: 'Shagadelic spy' },
      { title: 'That Thing You Do!', director: 'Tom Hanks', year: 1996, description: '60s band rise' },
      { title: 'Hairspray', director: 'Adam Shankman', year: 2007, description: '60s dance show' },
      { title: 'Velvet Goldmine', director: 'Todd Haynes', year: 1998, description: 'Glam rock era' },
    ]
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    color: '#ff4500',
    zone: 'orange',
    position: { x: -100, y: 900 },
    size: 180,
    movies: [
      { title: 'Coco', director: 'Lee Unkrich', year: 2017, description: 'Day of the Dead' },
      { title: 'Encanto', director: 'Jared Bush', year: 2021, description: 'Colombian magic' },
      { title: 'Kubo and the Two Strings', director: 'Travis Knight', year: 2016, description: 'Japanese folklore' },
      { title: 'The Book of Life', director: 'Jorge R. Gutiérrez', year: 2014, description: 'Mexican afterlife' },
    ]
  },
  {
    id: 'still',
    name: 'Still',
    color: '#b0c4de',
    zone: 'blue',
    position: { x: 100, y: 900 },
    size: 180,
    movies: [
      { title: 'The Remains of the Day', director: 'James Ivory', year: 1993, description: 'Butler\'s regret' },
      { title: 'Never Let Me Go', director: 'Mark Romanek', year: 2010, description: 'Quiet dystopia' },
      { title: 'The Reader', director: 'Stephen Daldry', year: 2008, description: 'Secret past' },
      { title: 'Brooklyn', director: 'John Crowley', year: 2015, description: 'Irish immigration' },
    ]
  },
  {
    id: 'courageous',
    name: 'Courageous',
    color: '#228b22',
    zone: 'green',
    position: { x: 300, y: 900 },
    size: 180,
    movies: [
      { title: 'Braveheart', director: 'Mel Gibson', year: 1995, description: 'Scottish rebellion' },
      { title: '12 Years a Slave', director: 'Steve McQueen', year: 2013, description: 'Survival and freedom' },
      { title: 'Schindler\'s List', director: 'Steven Spielberg', year: 1993, description: 'Saving lives' },
      { title: 'The Revenant', director: 'Alejandro Iñárritu', year: 2015, description: 'Frontier survival' },
    ]
  },
  {
    id: 'relentless',
    name: 'Relentless',
    color: '#dc143c',
    zone: 'red',
    position: { x: 500, y: 900 },
    size: 180,
    movies: [
      { title: 'The Terminator', director: 'James Cameron', year: 1984, description: 'Machine pursuit' },
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007, description: 'Hitman chase' },
      { title: 'The Raid', director: 'Gareth Evans', year: 2011, description: 'Non-stop action' },
      { title: 'John Wick', director: 'Chad Stahelski', year: 2014, description: 'Revenge rampage' },
    ]
  },
  {
    id: 'enigmatic',
    name: 'Enigmatic',
    color: '#663399',
    zone: 'blue',
    position: { x: 700, y: 900 },
    size: 180,
    movies: [
      { title: 'Mulholland Drive', director: 'David Lynch', year: 2001, description: 'LA mystery' },
      { title: 'Enemy', director: 'Denis Villeneuve', year: 2013, description: 'Doppelgänger' },
      { title: 'The Double', director: 'Richard Ayoade', year: 2013, description: 'Identity crisis' },
      { title: 'Pi', director: 'Darren Aronofsky', year: 1998, description: 'Mathematical obsession' },
    ]
  },

  // ==================== ROW 12 (y = 1100) ====================
  {
    id: 'dazzling',
    name: 'Dazzling',
    color: '#ffdf00',
    zone: 'orange',
    position: { x: -700, y: 1100 },
    size: 180,
    movies: [
      { title: 'The Greatest Showman', director: 'Michael Gracey', year: 2017, description: 'Circus spectacle' },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016, description: 'Musical dreams' },
      { title: 'The Wizard of Oz', director: 'Victor Fleming', year: 1939, description: 'Technicolor wonder' },
      { title: 'Singin\' in the Rain', director: 'Stanley Donen', year: 1952, description: 'Hollywood golden age' },
    ]
  },
  {
    id: 'sincere',
    name: 'Sincere',
    color: '#48d1cc',
    zone: 'green',
    position: { x: -500, y: 1100 },
    size: 180,
    movies: [
      { title: 'Short Term 12', director: 'Destin Daniel Cretton', year: 2013, description: 'Foster care' },
      { title: 'The Spectacular Now', director: 'James Ponsoldt', year: 2013, description: 'Teen authenticity' },
      { title: 'Me and Earl and the Dying Girl', director: 'Alfonso Gomez-Rejon', year: 2015, description: 'Friendship and illness' },
      { title: 'The Edge of Seventeen', director: 'Kelly Fremon Craig', year: 2016, description: 'High school honesty' },
    ]
  },
  {
    id: 'summery',
    name: 'Summery',
    color: '#ffa500',
    zone: 'orange',
    position: { x: -300, y: 1100 },
    size: 180,
    movies: [
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017, description: 'Italian summer love' },
      { title: 'The Way Way Back', director: 'Nat Faxon', year: 2013, description: 'Beach town summer' },
      { title: 'Wet Hot American Summer', director: 'David Wain', year: 2001, description: 'Camp chaos' },
      { title: 'Dirty Dancing', director: 'Emile Ardolino', year: 1987, description: 'Resort romance' },
    ]
  },
  {
    id: 'carefree',
    name: 'Carefree',
    color: '#ffdab9',
    zone: 'orange',
    position: { x: -100, y: 1100 },
    size: 180,
    movies: [
      { title: 'Ferris Bueller\'s Day Off', director: 'John Hughes', year: 1986, description: 'Perfect skip day' },
      { title: 'Superbad', director: 'Greg Mottola', year: 2007, description: 'Party quest' },
      { title: 'The Hangover', director: 'Todd Phillips', year: 2009, description: 'Vegas aftermath' },
      { title: 'Bridesmaids', director: 'Paul Feig', year: 2011, description: 'Wedding chaos' },
    ]
  },
  {
    id: 'gentle',
    name: 'Gentle',
    color: '#afeeee',
    zone: 'blue',
    position: { x: 100, y: 1100 },
    size: 180,
    movies: [
      { title: 'The Wind Rises', director: 'Hayao Miyazaki', year: 2013, description: 'Dream of flying' },
      { title: 'When Marnie Was There', director: 'Hiromasa Yonebayashi', year: 2014, description: 'Mysterious friendship' },
      { title: 'Only Yesterday', director: 'Isao Takahata', year: 1991, description: 'Childhood memories' },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', year: 2013, description: 'Folk tale beauty' },
    ]
  },
  {
    id: 'resilient',
    name: 'Resilient',
    color: '#00fa9a',
    zone: 'green',
    position: { x: 300, y: 1100 },
    size: 180,
    movies: [
      { title: '127 Hours', director: 'Danny Boyle', year: 2010, description: 'Survival determination' },
      { title: 'Unbroken', director: 'Angelina Jolie', year: 2014, description: 'WWII endurance' },
      { title: 'Wild', director: 'Jean-Marc Vallée', year: 2014, description: 'Pacific Crest healing' },
      { title: 'Cast Away', director: 'Robert Zemeckis', year: 2000, description: 'Island survival' },
    ]
  },
  {
    id: 'brutal',
    name: 'Brutal',
    color: '#8b0000',
    zone: 'red',
    position: { x: 500, y: 1100 },
    size: 180,
    movies: [
      { title: 'Saving Private Ryan', director: 'Steven Spielberg', year: 1998, description: 'War reality' },
      { title: 'Hacksaw Ridge', director: 'Mel Gibson', year: 2016, description: 'Pacifist soldier' },
      { title: '1917', director: 'Sam Mendes', year: 2019, description: 'One-shot war' },
      { title: 'Dunkirk', director: 'Christopher Nolan', year: 2017, description: 'Evacuation tension' },
    ]
  },
  {
    id: 'abstract',
    name: 'Abstract',
    color: '#9370db',
    zone: 'blue',
    position: { x: 700, y: 1100 },
    size: 180,
    movies: [
      { title: 'Upstream Color', director: 'Shane Carruth', year: 2013, description: 'Sensory experience' },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011, description: 'Cosmic visual poem' },
      { title: 'The Fountain', director: 'Darren Aronofsky', year: 2006, description: 'Three timelines' },
      { title: 'Mr. Nobody', director: 'Jaco Van Dormael', year: 2009, description: 'Multiple lives' },
    ]
  },
];