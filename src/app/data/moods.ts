export interface Movie {
  title: string;
  director: string;
  year: number;
}

export interface Mood {
  id: string;
  name: string;
  color: string;
  zone: 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  position: { x: number; y: number };
  size: number;
  movies: Movie[];
}

// Color is computed dynamically in Home.tsx based on grid position.
// The color field here is a placeholder only.
// Grid: 10 cols (x: -900 to 900), 10 rows (y: -900 to 900)
// Center (0, 0) = Adventurous

export const moods: Mood[] = [

  // ==================== ROW 1 (y = -900) — RED zone ====================
  {
    id: 'visceral',
    name: 'Visceral',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -900 },
    size: 180,
    movies: [
      { title: 'Enter the Void', director: 'Gaspar Noé', year: 2009 },
      { title: 'Climax', director: 'Gaspar Noé', year: 2018 },
      { title: 'The Revenant', director: 'Alejandro Iñárritu', year: 2015 },
      { title: 'Oldboy', director: 'Park Chan-wook', year: 2003 },
      { title: 'Irreversible', director: 'Gaspar Noé', year: 2002 },
      { title: 'Raw', director: 'Julia Ducournau', year: 2016 },
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000 },
      { title: 'Mandy', director: 'Panos Cosmatos', year: 2018 },
      { title: 'Possessor', director: 'Brandon Cronenberg', year: 2020 },
      { title: 'Martyrs', director: 'Pascal Laugier', year: 2008 },
      { title: 'Titane', director: 'Julia Ducournau', year: 2021 },
      { title: 'The Substance', director: 'Coralie Fargeat', year: 2024 },
      { title: 'Bone Tomahawk', director: 'S. Craig Zahler', year: 2015 },
    ]
  },
  {
    id: 'brutal',
    name: 'Brutal',
    color: '#ff0000',
    zone: 'red',
    position: { x: -700, y: -900 },
    size: 180,
    movies: [
      { title: 'Saving Private Ryan', director: 'Steven Spielberg', year: 1998 },
      { title: 'Hacksaw Ridge', director: 'Mel Gibson', year: 2016 },
      { title: '1917', director: 'Sam Mendes', year: 2019 },
      { title: 'Dunkirk', director: 'Christopher Nolan', year: 2017 },
      { title: 'Come and See', director: 'Elem Klimov', year: 1985 },
      { title: 'Apocalypse Now', director: 'Francis Ford Coppola', year: 1979 },
      { title: 'Full Metal Jacket', director: 'Stanley Kubrick', year: 1987 },
      { title: 'Platoon', director: 'Oliver Stone', year: 1986 },
      { title: 'The Hurt Locker', director: 'Kathryn Bigelow', year: 2008 },
      { title: 'Fury', director: 'David Ayer', year: 2014 },
      { title: 'Beasts of No Nation', director: 'Cary Fukunaga', year: 2015 },
      { title: 'The Thin Red Line', director: 'Terrence Malick', year: 1998 },
      { title: 'All Quiet on the Western Front', director: 'Edward Berger', year: 2022 },
    ]
  },
  {
    id: 'intense',
    name: 'Intense',
    color: '#ff0000',
    zone: 'red',
    position: { x: -500, y: -900 },
    size: 180,
    movies: [
      { title: 'Uncut Gems', director: 'Safdie Brothers', year: 2019 },
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000 },
      { title: 'Prisoners', director: 'Denis Villeneuve', year: 2013 },
      { title: 'There Will Be Blood', director: 'Paul Thomas Anderson', year: 2007 },
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014 },
      { title: 'Black Swan', director: 'Darren Aronofsky', year: 2010 },
      { title: 'Sicario', director: 'Denis Villeneuve', year: 2015 },
      { title: 'Nocturnal Animals', director: 'Tom Ford', year: 2016 },
      { title: 'Zodiac', director: 'David Fincher', year: 2007 },
      { title: 'Mother!', director: 'Darren Aronofsky', year: 2017 },
      { title: 'The Guilty', director: 'Antoine Fuqua', year: 2021 },
      { title: 'Tár', director: 'Todd Field', year: 2022 },
      { title: 'The Zone of Interest', director: 'Jonathan Glazer', year: 2023 },
    ]
  },
  {
    id: 'thrilling',
    name: 'Thrilling',
    color: '#ff0000',
    zone: 'red',
    position: { x: -300, y: -900 },
    size: 180,
    movies: [
      { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991 },
      { title: 'Parasite', director: 'Bong Joon-ho', year: 2019 },
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007 },
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014 },
      { title: 'Gone Girl', director: 'David Fincher', year: 2014 },
      { title: 'Knives Out', director: 'Rian Johnson', year: 2019 },
      { title: 'Rear Window', director: 'Alfred Hitchcock', year: 1954 },
      { title: 'The Prestige', director: 'Christopher Nolan', year: 2006 },
      { title: 'Oldboy', director: 'Park Chan-wook', year: 2003 },
      { title: 'Memento', director: 'Christopher Nolan', year: 2000 },
      { title: 'Se7en', director: 'David Fincher', year: 1995 },
      { title: 'Caché', director: 'Michael Haneke', year: 2005 },
      { title: 'Saltburn', director: 'Emerald Fennell', year: 2023 },
      { title: 'A Haunting in Venice', director: 'Kenneth Branagh', year: 2023 },
    ]
  },
  {
    id: 'relentless',
    name: 'Relentless',
    color: '#ff0000',
    zone: 'red',
    position: { x: -100, y: -900 },
    size: 180,
    movies: [
      { title: 'The Terminator', director: 'James Cameron', year: 1984 },
      { title: 'The Raid', director: 'Gareth Evans', year: 2011 },
      { title: 'John Wick', director: 'Chad Stahelski', year: 2014 },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015 },
      { title: 'Heat', director: 'Michael Mann', year: 1995 },
      { title: 'Drive', director: 'Nicolas Winding Refn', year: 2011 },
      { title: 'Upgrade', director: 'Leigh Whannell', year: 2018 },
      { title: 'Atomic Blonde', director: 'David Leitch', year: 2017 },
      { title: 'Collateral', director: 'Michael Mann', year: 2004 },
      { title: 'A Prophet', director: 'Jacques Audiard', year: 2009 },
      { title: 'John Wick: Chapter 4', director: 'Chad Stahelski', year: 2023 },
      { title: 'The Raid 2', director: 'Gareth Evans', year: 2014 },
      { title: 'Extraction', director: 'Sam Hargrave', year: 2020 },
    ]
  },
  {
    id: 'chaotic',
    name: 'Chaotic',
    color: '#ff4400',
    zone: 'orange',
    position: { x: 100, y: -900 },
    size: 180,
    movies: [
      { title: 'Uncut Gems', director: 'Safdie Brothers', year: 2019 },
      { title: 'Good Time', director: 'Safdie Brothers', year: 2017 },
      { title: 'Spring Breakers', director: 'Harmony Korine', year: 2012 },
      { title: 'Fear and Loathing in Las Vegas', director: 'Terry Gilliam', year: 1998 },
      { title: 'The Wolf of Wall Street', director: 'Martin Scorsese', year: 2013 },
      { title: 'Natural Born Killers', director: 'Oliver Stone', year: 1994 },
      { title: 'A Scanner Darkly', director: 'Richard Linklater', year: 2006 },
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000 },
      { title: 'Pi', director: 'Darren Aronofsky', year: 1998 },
      { title: 'Possessor', director: 'Brandon Cronenberg', year: 2020 },
      { title: 'Climax', director: 'Gaspar Noé', year: 2018 },
      { title: 'Beau Is Afraid', director: 'Ari Aster', year: 2023 },
      { title: 'Monkey Man', director: 'Dev Patel', year: 2024 },
    ]
  },
  {
    id: 'rebellious',
    name: 'Rebellious',
    color: '#ff4400',
    zone: 'orange',
    position: { x: 300, y: -900 },
    size: 180,
    movies: [
      { title: 'Fight Club', director: 'David Fincher', year: 1999 },
      { title: 'Do the Right Thing', director: 'Spike Lee', year: 1989 },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015 },
      { title: 'A Clockwork Orange', director: 'Stanley Kubrick', year: 1971 },
      { title: 'Network', director: 'Sidney Lumet', year: 1976 },
      { title: 'Easy Rider', director: 'Dennis Hopper', year: 1969 },
      { title: 'Trainspotting', director: 'Danny Boyle', year: 1996 },
      { title: 'American History X', director: 'Tony Kaye', year: 1998 },
      { title: 'The Battle of Algiers', director: 'Gillo Pontecorvo', year: 1966 },
      { title: 'If....', director: 'Lindsay Anderson', year: 1968 },
      { title: 'Sorry to Bother You', director: 'Boots Riley', year: 2018 },
      { title: 'Judas and the Black Messiah', director: 'Shaka King', year: 2021 },
      { title: 'Till', director: 'Chinonye Chukwu', year: 2022 },
    ]
  },
  {
    id: 'frenetic',
    name: 'Frenetic',
    color: '#ff4400',
    zone: 'orange',
    position: { x: 500, y: -900 },
    size: 180,
    movies: [
      { title: 'Run Lola Run', director: 'Tom Tykwer', year: 1998 },
      { title: 'Snatch', director: 'Guy Ritchie', year: 2000 },
      { title: 'Baby Driver', director: 'Edgar Wright', year: 2017 },
      { title: 'The Bourne Supremacy', director: 'Paul Greengrass', year: 2004 },
      { title: 'Scott Pilgrim vs. the World', director: 'Edgar Wright', year: 2010 },
      { title: 'Crank', director: 'Mark Neveldine & Brian Taylor', year: 2006 },
      { title: 'Speed', director: 'Jan de Bont', year: 1994 },
      { title: 'The French Connection', director: 'William Friedkin', year: 1971 },
      { title: 'Shoot Em Up', director: 'Michael Davis', year: 2007 },
      { title: 'Upgrade', director: 'Leigh Whannell', year: 2018 },
      { title: 'Everything Everywhere All at Once', director: 'Daniel Kwan & Daniel Scheinert', year: 2022 },
      { title: 'The Fall Guy', director: 'David Leitch', year: 2024 },
      { title: 'Furiosa', director: 'George Miller', year: 2024 },
    ]
  },
  {
    id: 'electrifying',
    name: 'Electrifying',
    color: '#ff4400',
    zone: 'orange',
    position: { x: 700, y: -900 },
    size: 180,
    movies: [
      { title: 'Drive', director: 'Nicolas Winding Refn', year: 2011 },
      { title: 'The Matrix', director: 'Wachowskis', year: 1999 },
      { title: 'Scott Pilgrim vs. the World', director: 'Edgar Wright', year: 2010 },
      { title: 'Tron: Legacy', director: 'Joseph Kosinski', year: 2010 },
      { title: 'Blade Runner 2049', director: 'Denis Villeneuve', year: 2017 },
      { title: 'The Social Network', director: 'David Fincher', year: 2010 },
      { title: 'Dune', director: 'Denis Villeneuve', year: 2021 },
      { title: 'After Hours', director: 'Martin Scorsese', year: 1985 },
      { title: 'Strange Days', director: 'Kathryn Bigelow', year: 1995 },
      { title: 'Hardcore Henry', director: 'Ilya Naishuller', year: 2015 },
      { title: 'Dune: Part Two', director: 'Denis Villeneuve', year: 2024 },
      { title: 'The Matrix Resurrections', director: 'Lana Wachowski', year: 2021 },
      { title: 'Atlas', director: 'Brad Peyton', year: 2024 },
    ]
  },
  {
    id: 'nerve-wracking',
    name: 'Nerve-Wracking',
    color: '#ff4400',
    zone: 'orange',
    position: { x: 900, y: -900 },
    size: 180,
    movies: [
      { title: '127 Hours', director: 'Danny Boyle', year: 2010 },
      { title: 'Buried', director: 'Rodrigo Cortés', year: 2010 },
      { title: 'Locke', director: 'Steven Knight', year: 2013 },
      { title: 'Phone Booth', director: 'Joel Schumacher', year: 2002 },
      { title: 'Coherence', director: 'James Ward Byrkit', year: 2013 },
      { title: 'Exam', director: 'Stuart Hazeldine', year: 2009 },
      { title: 'The Invitation', director: 'Karyn Kusama', year: 2015 },
      { title: 'Green Room', director: 'Jeremy Saulnier', year: 2015 },
      { title: 'The Platform', director: 'Galder Gaztelu-Urrutia', year: 2019 },
      { title: 'Calibre', director: 'Matt Palmer', year: 2018 },
      { title: 'Dont Breathe', director: 'Fede Álvarez', year: 2016 },
      { title: 'Speak No Evil', director: 'Christian Tafdrup', year: 2022 },
      { title: 'No One Will Save You', director: 'Brian Duffield', year: 2023 },
    ]
  },

  // ==================== ROW 2 (y = -700) — RED-ORANGE zone ====================
  {
    id: 'vengeful',
    name: 'Vengeful',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -700 },
    size: 180,
    movies: [
      { title: 'Kill Bill', director: 'Quentin Tarantino', year: 2003 },
      { title: 'The Count of Monte Cristo', director: 'Kevin Reynolds', year: 2002 },
      { title: 'I Saw the Devil', director: 'Kim Jee-woon', year: 2010 },
      { title: 'Blue Ruin', director: 'Jeremy Saulnier', year: 2013 },
    ]
  },
  {
    id: 'gritty',
    name: 'Gritty',
    color: '#ff0000',
    zone: 'red',
    position: { x: -700, y: -700 },
    size: 180,
    movies: [
      { title: 'Taxi Driver', director: 'Martin Scorsese', year: 1976 },
      { title: 'City of God', director: 'Fernando Meirelles', year: 2002 },
      { title: 'The Wrestler', director: 'Darren Aronofsky', year: 2008 },
      { title: 'Trainspotting', director: 'Danny Boyle', year: 1996 },
    ]
  },
  {
    id: 'sinister',
    name: 'Sinister',
    color: '#ff0000',
    zone: 'red',
    position: { x: -500, y: -700 },
    size: 180,
    movies: [
      { title: 'The Witch', director: 'Robert Eggers', year: 2015 },
      { title: 'The Shining', director: 'Stanley Kubrick', year: 1980 },
      { title: 'Zodiac', director: 'David Fincher', year: 2007 },
      { title: 'Seven', director: 'David Fincher', year: 1995 },
    ]
  },
  {
    id: 'menacing',
    name: 'Menacing',
    color: '#ff2200',
    zone: 'red',
    position: { x: -300, y: -700 },
    size: 180,
    movies: [
      { title: 'No Country for Old Men', director: 'Coen Brothers', year: 2007 },
      { title: 'There Will Be Blood', director: 'Paul Thomas Anderson', year: 2007 },
      { title: 'Nightcrawler', director: 'Dan Gilroy', year: 2014 },
      { title: 'American Psycho', director: 'Mary Harron', year: 2000 },
    ]
  },
  {
    id: 'suspenseful',
    name: 'Suspenseful',
    color: '#ff3300',
    zone: 'red',
    position: { x: -100, y: -700 },
    size: 180,
    movies: [
      { title: 'Rear Window', director: 'Alfred Hitchcock', year: 1954 },
      { title: 'Jaws', director: 'Steven Spielberg', year: 1975 },
      { title: 'Sicario', director: 'Denis Villeneuve', year: 2015 },
      { title: 'Gravity', director: 'Alfonso Cuarón', year: 2013 },
    ]
  },
  {
    id: 'exhilarating',
    name: 'Exhilarating',
    color: '#ff5500',
    zone: 'orange',
    position: { x: 100, y: -700 },
    size: 180,
    movies: [
      { title: 'Top Gun: Maverick', director: 'Joseph Kosinski', year: 2022 },
      { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015 },
      { title: 'Mission: Impossible - Fallout', director: 'Christopher McQuarrie', year: 2018 },
      { title: 'Edge of Tomorrow', director: 'Doug Liman', year: 2014 },
    ]
  },
  {
    id: 'uplifting',
    name: 'Uplifting',
    color: '#ff6600',
    zone: 'orange',
    position: { x: 300, y: -700 },
    size: 180,
    movies: [
      { title: 'Little Miss Sunshine', director: 'Jonathan Dayton', year: 2006 },
      { title: 'The Intouchables', director: 'Olivier Nakache', year: 2011 },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001 },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016 },
    ]
  },
  {
    id: 'triumphant',
    name: 'Triumphant',
    color: '#ff7700',
    zone: 'orange',
    position: { x: 500, y: -700 },
    size: 180,
    movies: [
      { title: 'Rocky', director: 'John G. Avildsen', year: 1976 },
      { title: 'Rudy', director: 'David Anspaugh', year: 1993 },
      { title: 'Remember the Titans', director: 'Boaz Yakin', year: 2000 },
      { title: 'The Martian', director: 'Ridley Scott', year: 2015 },
    ]
  },
  {
    id: 'invigorating',
    name: 'Invigorating',
    color: '#ff8800',
    zone: 'orange',
    position: { x: 700, y: -700 },
    size: 180,
    movies: [
      { title: 'Whiplash', director: 'Damien Chazelle', year: 2014 },
      { title: 'Black Swan', director: 'Darren Aronofsky', year: 2010 },
      { title: 'The Social Network', director: 'David Fincher', year: 2010 },
      { title: 'Steve Jobs', director: 'Danny Boyle', year: 2015 },
    ]
  },
  {
    id: 'vivacious',
    name: 'Vivacious',
    color: '#ff9900',
    zone: 'orange',
    position: { x: 900, y: -700 },
    size: 180,
    movies: [
      { title: 'Moulin Rouge!', director: 'Baz Luhrmann', year: 2001 },
      { title: 'Chicago', director: 'Rob Marshall', year: 2002 },
      { title: 'Burlesque', director: 'Steve Antin', year: 2010 },
      { title: 'The Rocky Horror Picture Show', director: 'Jim Sharman', year: 1975 },
    ]
  },

  // ==================== ROW 3 (y = -500) — ORANGE-YELLOW zone ====================
  {
    id: 'provocative',
    name: 'Provocative',
    color: '#ff2200',
    zone: 'red',
    position: { x: -900, y: -500 },
    size: 180,
    movies: [
      { title: 'The Handmaiden', director: 'Park Chan-wook', year: 2016 },
      { title: 'Black Swan', director: 'Darren Aronofsky', year: 2010 },
      { title: 'Eyes Wide Shut', director: 'Stanley Kubrick', year: 1999 },
      { title: 'Nymphomaniac', director: 'Lars von Trier', year: 2013 },
    ]
  },
  {
    id: 'sensual',
    name: 'Sensual',
    color: '#ff3300',
    zone: 'red',
    position: { x: -700, y: -500 },
    size: 180,
    movies: [
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017 },
      { title: 'Y Tu Mamá También', director: 'Alfonso Cuarón', year: 2001 },
      { title: 'Blue is the Warmest Color', director: 'Abdellatif Kechiche', year: 2013 },
      { title: 'Portrait of a Lady on Fire', director: 'Céline Sciamma', year: 2019 },
    ]
  },
  {
    id: 'bittersweet',
    name: 'Bittersweet',
    color: '#ff6600',
    zone: 'orange',
    position: { x: -500, y: -500 },
    size: 180,
    movies: [
      { title: 'Coco', director: 'Lee Unkrich', year: 2017 },
      { title: 'About Time', director: 'Richard Curtis', year: 2013 },
      { title: 'Brooklyn', director: 'John Crowley', year: 2015 },
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016 },
    ]
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: '#ff8800',
    zone: 'orange',
    position: { x: -300, y: -500 },
    size: 180,
    movies: [
      { title: 'Stand by Me', director: 'Rob Reiner', year: 1986 },
      { title: 'Call Me by Your Name', director: 'Luca Guadagnino', year: 2017 },
      { title: 'Before Sunrise', director: 'Richard Linklater', year: 1995 },
      { title: 'The Sandlot', director: 'David Mickey Evans', year: 1993 },
    ]
  },
  {
    id: 'wistful',
    name: 'Wistful',
    color: '#ffaa00',
    zone: 'orange',
    position: { x: -100, y: -500 },
    size: 180,
    movies: [
      { title: 'The Before Trilogy', director: 'Richard Linklater', year: 1995 },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016 },
      { title: '500 Days of Summer', director: 'Marc Webb', year: 2009 },
      { title: 'Blue Valentine', director: 'Derek Cianfrance', year: 2010 },
    ]
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    color: '#ffbb00',
    zone: 'yellow',
    position: { x: 100, y: -500 },
    size: 180,
    movies: [
      { title: 'Moonrise Kingdom', director: 'Wes Anderson', year: 2012 },
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013 },
      { title: 'Big Fish', director: 'Tim Burton', year: 2003 },
      { title: 'Fantastic Mr. Fox', director: 'Wes Anderson', year: 2009 },
    ]
  },
  {
    id: 'jubilant',
    name: 'Jubilant',
    color: '#ffcc00',
    zone: 'yellow',
    position: { x: 300, y: -500 },
    size: 180,
    movies: [
      { title: 'Mamma Mia!', director: 'Phyllida Lloyd', year: 2008 },
      { title: 'The Greatest Showman', director: 'Michael Gracey', year: 2017 },
      { title: 'Sing Street', director: 'John Carney', year: 2016 },
      { title: 'School of Rock', director: 'Richard Linklater', year: 2003 },
    ]
  },
  {
    id: 'dazzling',
    name: 'Dazzling',
    color: '#ffdd00',
    zone: 'yellow',
    position: { x: 500, y: -500 },
    size: 180,
    movies: [
      { title: 'The Greatest Showman', director: 'Michael Gracey', year: 2017 },
      { title: 'La La Land', director: 'Damien Chazelle', year: 2016 },
      { title: 'The Wizard of Oz', director: 'Victor Fleming', year: 1939 },
      { title: 'Singin\' in the Rain', director: 'Stanley Donen', year: 1952 },
    ]
  },
  {
    id: 'radiant',
    name: 'Radiant',
    color: '#ffee00',
    zone: 'yellow',
    position: { x: 700, y: -500 },
    size: 180,
    movies: [
      { title: 'Sunshine', director: 'Danny Boyle', year: 2007 },
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014 },
      { title: 'Big Fish', director: 'Tim Burton', year: 2003 },
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013 },
    ]
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    color: '#ffff00',
    zone: 'yellow',
    position: { x: 900, y: -500 },
    size: 180,
    movies: [
      { title: 'Coco', director: 'Lee Unkrich', year: 2017 },
      { title: 'Encanto', director: 'Jared Bush', year: 2021 },
      { title: 'Kubo and the Two Strings', director: 'Travis Knight', year: 2016 },
      { title: 'The Book of Life', director: 'Jorge R. Gutiérrez', year: 2014 },
    ]
  },

  // ==================== ROW 4 (y = -300) — YELLOW-GREEN zone ====================
  {
    id: 'melancholic',
    name: 'Melancholic',
    color: '#ff0000',
    zone: 'red',
    position: { x: -900, y: -300 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003 },
      { title: 'Manchester by the Sea', director: 'Kenneth Lonergan', year: 2016 },
      { title: 'Eternal Sunshine', director: 'Michel Gondry', year: 2004 },
      { title: 'Her', director: 'Spike Jonze', year: 2013 },
    ]
  },
  {
    id: 'tender',
    name: 'Tender',
    color: '#ff4488',
    zone: 'pink',
    position: { x: -700, y: -300 },
    size: 180,
    movies: [
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016 },
      { title: 'The Florida Project', director: 'Sean Baker', year: 2017 },
      { title: 'Aftersun', director: 'Charlotte Wells', year: 2022 },
      { title: 'Past Lives', director: 'Celine Song', year: 2023 },
    ]
  },
  {
    id: 'romantic',
    name: 'Romantic',
    color: '#ff6699',
    zone: 'pink',
    position: { x: -500, y: -300 },
    size: 180,
    movies: [
      { title: 'Before Sunset', director: 'Richard Linklater', year: 2004 },
      { title: 'The Notebook', director: 'Nick Cassavetes', year: 2004 },
      { title: 'Pride and Prejudice', director: 'Joe Wright', year: 2005 },
      { title: 'Carol', director: 'Todd Haynes', year: 2015 },
    ]
  },
  {
    id: 'heartwarming',
    name: 'Heartwarming',
    color: '#ffaa44',
    zone: 'orange',
    position: { x: -300, y: -300 },
    size: 180,
    movies: [
      { title: 'About Time', director: 'Richard Curtis', year: 2013 },
      { title: 'The Farewell', director: 'Lulu Wang', year: 2019 },
      { title: 'Hunt for the Wilderpeople', director: 'Taika Waititi', year: 2016 },
      { title: 'A Beautiful Day in the Neighborhood', director: 'Marielle Heller', year: 2019 },
    ]
  },
  {
    id: 'cozy',
    name: 'Cozy',
    color: '#ffcc44',
    zone: 'yellow',
    position: { x: -100, y: -300 },
    size: 180,
    movies: [
      { title: 'The Holiday', director: 'Nancy Meyers', year: 2006 },
      { title: 'When Harry Met Sally', director: 'Rob Reiner', year: 1989 },
      { title: 'Julie & Julia', director: 'Nora Ephron', year: 2009 },
      { title: 'You\'ve Got Mail', director: 'Nora Ephron', year: 1998 },
    ]
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    color: '#aadd00',
    zone: 'green',
    position: { x: 100, y: -300 },
    size: 180,
    movies: [
      { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
      { title: 'Life is Beautiful', director: 'Roberto Benigni', year: 1997 },
      { title: 'The Pursuit of Happyness', director: 'Gabriele Muccino', year: 2006 },
      { title: 'Up', director: 'Pete Docter', year: 2009 },
    ]
  },
  {
    id: 'optimistic',
    name: 'Optimistic',
    color: '#88dd00',
    zone: 'green',
    position: { x: 300, y: -300 },
    size: 180,
    movies: [
      { title: 'The Secret Life of Walter Mitty', director: 'Ben Stiller', year: 2013 },
      { title: 'Chef', director: 'Jon Favreau', year: 2014 },
      { title: 'Yes Man', director: 'Peyton Reed', year: 2008 },
      { title: 'Begin Again', director: 'John Carney', year: 2013 },
    ]
  },
  {
    id: 'inspiring',
    name: 'Inspiring',
    color: '#66cc00',
    zone: 'green',
    position: { x: 500, y: -300 },
    size: 180,
    movies: [
      { title: 'Dead Poets Society', director: 'Peter Weir', year: 1989 },
      { title: 'Good Will Hunting', director: 'Gus Van Sant', year: 1997 },
      { title: 'October Sky', director: 'Joe Johnston', year: 1999 },
      { title: 'Searching for Bobby Fischer', director: 'Steven Zaillian', year: 1993 },
    ]
  },
  {
    id: 'motivating',
    name: 'Motivating',
    color: '#44bb00',
    zone: 'green',
    position: { x: 700, y: -300 },
    size: 180,
    movies: [
      { title: 'Coach Carter', director: 'Thomas Carter', year: 2005 },
      { title: 'We Are Marshall', director: 'McG', year: 2006 },
      { title: 'Miracle', director: 'Gavin O\'Connor', year: 2004 },
      { title: 'Invictus', director: 'Clint Eastwood', year: 2009 },
    ]
  },
  {
    id: 'wholesome',
    name: 'Wholesome',
    color: '#22aa00',
    zone: 'green',
    position: { x: 900, y: -300 },
    size: 180,
    movies: [
      { title: 'The Sound of Music', director: 'Robert Wise', year: 1965 },
      { title: 'Mary Poppins', director: 'Robert Stevenson', year: 1964 },
      { title: 'Cheaper by the Dozen', director: 'Shawn Levy', year: 2003 },
      { title: 'Akeelah and the Bee', director: 'Doug Atchison', year: 2006 },
    ]
  },

  // ==================== ROW 5 (y = -100) — CENTER-LEFT zone ====================
  {
    id: 'disturbing',
    name: 'Disturbing',
    color: '#cc0044',
    zone: 'red',
    position: { x: -900, y: -100 },
    size: 180,
    movies: [
      { title: 'Hereditary', director: 'Ari Aster', year: 2018 },
      { title: 'Audition', director: 'Takashi Miike', year: 1999 },
      { title: 'Funny Games', director: 'Michael Haneke', year: 1997 },
      { title: 'Midsommar', director: 'Ari Aster', year: 2019 },
    ]
  },
  {
    id: 'playful',
    name: 'Playful',
    color: '#ff66aa',
    zone: 'pink',
    position: { x: -700, y: -100 },
    size: 180,
    movies: [
      { title: 'Paddington 2', director: 'Paul King', year: 2017 },
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014 },
      { title: 'Scott Pilgrim', director: 'Edgar Wright', year: 2010 },
      { title: 'Everything Everywhere All at Once', director: 'Daniels', year: 2022 },
    ]
  },
  {
    id: 'delightful',
    name: 'Delightful',
    color: '#ff88bb',
    zone: 'pink',
    position: { x: -500, y: -100 },
    size: 180,
    movies: [
      { title: 'The Princess Bride', director: 'Rob Reiner', year: 1987 },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001 },
      { title: 'Ratatouille', director: 'Brad Bird', year: 2007 },
      { title: 'Sing', director: 'Garth Jennings', year: 2016 },
    ]
  },
  {
    id: 'charming',
    name: 'Charming',
    color: '#ffaa88',
    zone: 'orange',
    position: { x: -300, y: -100 },
    size: 180,
    movies: [
      { title: 'Notting Hill', director: 'Roger Michell', year: 1999 },
      { title: 'Roman Holiday', director: 'William Wyler', year: 1953 },
      { title: 'Midnight in Paris', director: 'Woody Allen', year: 2011 },
      { title: 'About a Boy', director: 'Chris Weitz', year: 2002 },
    ]
  },
  {
    id: 'whimsical-2',
    name: 'Dreamy',
    color: '#aaddaa',
    zone: 'green',
    position: { x: -100, y: -100 },
    size: 180,
    movies: [
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000 },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011 },
      { title: 'Only Lovers Left Alive', director: 'Jim Jarmusch', year: 2013 },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001 },
    ]
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    color: '#00cc88',
    zone: 'teal',
    position: { x: 0, y: 0 },
    size: 180,
    movies: [
      { title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014 },
      { title: 'Raiders of the Lost Ark', director: 'Steven Spielberg', year: 1981 },
      { title: 'Life of Pi', director: 'Ang Lee', year: 2012 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', year: 2001 },
    ]
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    color: '#00bb77',
    zone: 'teal',
    position: { x: 200, y: -100 },
    size: 180,
    movies: [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', year: 1988 },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016 },
      { title: 'A River Runs Through It', director: 'Robert Redford', year: 1992 },
      { title: 'Nomadland', director: 'Chloé Zhao', year: 2020 },
    ]
  },
  {
    id: 'empowering',
    name: 'Empowering',
    color: '#00aa66',
    zone: 'green',
    position: { x: 400, y: -100 },
    size: 180,
    movies: [
      { title: 'Hidden Figures', director: 'Theodore Melfi', year: 2016 },
      { title: 'Erin Brockovich', director: 'Steven Soderbergh', year: 2000 },
      { title: 'Joy', director: 'David O. Russell', year: 2015 },
      { title: 'The Help', director: 'Tate Taylor', year: 2011 },
    ]
  },
  {
    id: 'liberating',
    name: 'Liberating',
    color: '#009955',
    zone: 'green',
    position: { x: 600, y: -100 },
    size: 180,
    movies: [
      { title: 'Thelma & Louise', director: 'Ridley Scott', year: 1991 },
      { title: 'Into the Wild', director: 'Sean Penn', year: 2007 },
      { title: 'Lady Bird', director: 'Greta Gerwig', year: 2017 },
      { title: 'The Motorcycle Diaries', director: 'Walter Salles', year: 2004 },
    ]
  },
  {
    id: 'grounded',
    name: 'Grounded',
    color: '#008844',
    zone: 'green',
    position: { x: 800, y: -100 },
    size: 180,
    movies: [
      { title: 'Moonlight', director: 'Barry Jenkins', year: 2016 },
      { title: 'The Florida Project', director: 'Sean Baker', year: 2017 },
      { title: 'Minari', director: 'Lee Isaac Chung', year: 2020 },
      { title: 'Nomadland', director: 'Chloé Zhao', year: 2020 },
    ]
  },

  // ==================== ROW 6 (y = 100) — CENTER-RIGHT zone ====================
  {
    id: 'haunting',
    name: 'Haunting',
    color: '#aa0066',
    zone: 'purple',
    position: { x: -900, y: 100 },
    size: 180,
    movies: [
      { title: 'The Others', director: 'Alejandro Amenábar', year: 2001 },
      { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999 },
      { title: 'The Orphanage', director: 'J.A. Bayona', year: 2007 },
      { title: 'Lake Mungo', director: 'Joel Anderson', year: 2008 },
    ]
  },
  {
    id: 'enchanting',
    name: 'Enchanting',
    color: '#dd44aa',
    zone: 'pink',
    position: { x: -700, y: 100 },
    size: 180,
    movies: [
      { title: 'The Princess Bride', director: 'Rob Reiner', year: 1987 },
      { title: 'Stardust', director: 'Matthew Vaughn', year: 2007 },
      { title: 'Ella Enchanted', director: 'Tommy O\'Haver', year: 2004 },
      { title: 'Penelope', director: 'Mark Palansky', year: 2006 },
    ]
  },
  {
    id: 'magical',
    name: 'Magical',
    color: '#cc66cc',
    zone: 'purple',
    position: { x: -500, y: 100 },
    size: 180,
    movies: [
      { title: 'Pan\'s Labyrinth', director: 'Guillermo del Toro', year: 2006 },
      { title: 'The Shape of Water', director: 'Guillermo del Toro', year: 2017 },
      { title: 'Howl\'s Moving Castle', director: 'Hayao Miyazaki', year: 2004 },
      { title: 'Stardust', director: 'Matthew Vaughn', year: 2007 },
    ]
  },
  {
    id: 'fantastical',
    name: 'Fantastical',
    color: '#aa88dd',
    zone: 'purple',
    position: { x: -300, y: 100 },
    size: 180,
    movies: [
      { title: 'Pan\'s Labyrinth', director: 'Guillermo del Toro', year: 2006 },
      { title: 'The Wizard of Oz', director: 'Victor Fleming', year: 1939 },
      { title: 'Labyrinth', director: 'Jim Henson', year: 1986 },
      { title: 'The NeverEnding Story', director: 'Wolfgang Petersen', year: 1984 },
    ]
  },
  {
    id: 'serene',
    name: 'Serene',
    color: '#66ccbb',
    zone: 'teal',
    position: { x: -100, y: 100 },
    size: 180,
    movies: [
      { title: 'The Secret World of Arrietty', director: 'Hiromasa Yonebayashi', year: 2010 },
      { title: 'Ponyo', director: 'Hayao Miyazaki', year: 2008 },
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017 },
      { title: 'The Straight Story', director: 'David Lynch', year: 1999 },
    ]
  },
  {
    id: 'tranquil',
    name: 'Tranquil',
    color: '#44bbcc',
    zone: 'teal',
    position: { x: 100, y: 100 },
    size: 180,
    movies: [
      { title: 'Minari', director: 'Lee Isaac Chung', year: 2020 },
      { title: 'The Straight Story', director: 'David Lynch', year: 1999 },
      { title: 'Still Walking', director: 'Hirokazu Kore-eda', year: 2008 },
      { title: 'Certified Copy', director: 'Abbas Kiarostami', year: 2010 },
    ]
  },
  {
    id: 'soothing',
    name: 'Soothing',
    color: '#22aadd',
    zone: 'blue',
    position: { x: 300, y: 100 },
    size: 180,
    movies: [
      { title: 'A Quiet Place', director: 'John Krasinski', year: 2018 },
      { title: 'The Secret Garden', director: 'Agnieszka Holland', year: 1993 },
      { title: 'Whisper of the Heart', director: 'Yoshifumi Kondō', year: 1995 },
      { title: 'The Secret Life of Pets', director: 'Chris Renaud', year: 2016 },
    ]
  },
  {
    id: 'refreshing',
    name: 'Refreshing',
    color: '#00aacc',
    zone: 'teal',
    position: { x: 500, y: 100 },
    size: 180,
    movies: [
      { title: 'The Way Way Back', director: 'Nat Faxon', year: 2013 },
      { title: 'The Perks of Being a Wallflower', director: 'Stephen Chbosky', year: 2012 },
      { title: 'Sing Street', director: 'John Carney', year: 2016 },
      { title: 'Kings of Summer', director: 'Jordan Vogt-Roberts', year: 2013 },
    ]
  },
  {
    id: 'earnest',
    name: 'Earnest',
    color: '#0099bb',
    zone: 'blue',
    position: { x: 700, y: 100 },
    size: 180,
    movies: [
      { title: 'Spotlight', director: 'Tom McCarthy', year: 2015 },
      { title: 'The Post', director: 'Steven Spielberg', year: 2017 },
      { title: 'All the President\'s Men', director: 'Alan J. Pakula', year: 1976 },
      { title: 'The Insider', director: 'Michael Mann', year: 1999 },
    ]
  },
  {
    id: 'courageous',
    name: 'Courageous',
    color: '#0088aa',
    zone: 'blue',
    position: { x: 900, y: 100 },
    size: 180,
    movies: [
      { title: 'Braveheart', director: 'Mel Gibson', year: 1995 },
      { title: '12 Years a Slave', director: 'Steve McQueen', year: 2013 },
      { title: 'Schindler\'s List', director: 'Steven Spielberg', year: 1993 },
      { title: 'The Revenant', director: 'Alejandro Iñárritu', year: 2015 },
    ]
  },

  // ==================== ROW 7 (y = 300) — BLUE-TEAL zone ====================
  {
    id: 'eerie',
    name: 'Eerie',
    color: '#880088',
    zone: 'purple',
    position: { x: -900, y: 300 },
    size: 180,
    movies: [
      { title: 'Donnie Darko', director: 'Richard Kelly', year: 2001 },
      { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999 },
      { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010 },
      { title: 'The Prestige', director: 'Christopher Nolan', year: 2006 },
    ]
  },
  {
    id: 'surreal',
    name: 'Surreal',
    color: '#9966cc',
    zone: 'purple',
    position: { x: -700, y: 300 },
    size: 180,
    movies: [
      { title: 'Eraserhead', director: 'David Lynch', year: 1977 },
      { title: 'The Holy Mountain', director: 'Alejandro Jodorowsky', year: 1973 },
      { title: 'Donnie Darko', director: 'Richard Kelly', year: 2001 },
      { title: 'Being John Malkovich', director: 'Spike Jonze', year: 1999 },
    ]
  },
  {
    id: 'eccentric',
    name: 'Eccentric',
    color: '#bb88cc',
    zone: 'purple',
    position: { x: -500, y: 300 },
    size: 180,
    movies: [
      { title: 'The Lobster', director: 'Yorgos Lanthimos', year: 2015 },
      { title: 'Swiss Army Man', director: 'Daniels', year: 2016 },
      { title: 'I Heart Huckabees', director: 'David O. Russell', year: 2004 },
      { title: 'Synecdoche, New York', director: 'Charlie Kaufman', year: 2008 },
    ]
  },
  {
    id: 'quirky',
    name: 'Quirky',
    color: '#ddaacc',
    zone: 'pink',
    position: { x: -300, y: 300 },
    size: 180,
    movies: [
      { title: 'Napoleon Dynamite', director: 'Jared Hess', year: 2004 },
      { title: 'Juno', director: 'Jason Reitman', year: 2007 },
      { title: 'Little Miss Sunshine', director: 'Jonathan Dayton', year: 2006 },
      { title: 'Garden State', director: 'Zach Braff', year: 2004 },
    ]
  },
  {
    id: 'blissful',
    name: 'Blissful',
    color: '#88ccdd',
    zone: 'blue',
    position: { x: -100, y: 300 },
    size: 180,
    movies: [
      { title: 'Before Sunrise', director: 'Richard Linklater', year: 1995 },
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003 },
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000 },
      { title: 'Moonrise Kingdom', director: 'Wes Anderson', year: 2012 },
    ]
  },
  {
    id: 'mellow',
    name: 'Mellow',
    color: '#66bbdd',
    zone: 'blue',
    position: { x: 100, y: 300 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003 },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016 },
      { title: 'The Station Agent', director: 'Tom McCarthy', year: 2003 },
      { title: 'Away We Go', director: 'Sam Mendes', year: 2009 },
    ]
  },
  {
    id: 'meditative',
    name: 'Meditative',
    color: '#4499cc',
    zone: 'blue',
    position: { x: 300, y: 300 },
    size: 180,
    movies: [
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011 },
      { title: '2001: A Space Odyssey', director: 'Stanley Kubrick', year: 1968 },
      { title: 'Solaris', director: 'Andrei Tarkovsky', year: 1972 },
      { title: 'Silent Light', director: 'Carlos Reygadas', year: 2007 },
    ]
  },
  {
    id: 'contemplative',
    name: 'Contemplative',
    color: '#2277bb',
    zone: 'blue',
    position: { x: 500, y: 300 },
    size: 180,
    movies: [
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016 },
      { title: 'Columbus', director: 'Kogonada', year: 2017 },
      { title: 'Stalker', director: 'Andrei Tarkovsky', year: 1979 },
      { title: 'First Reformed', director: 'Paul Schrader', year: 2017 },
    ]
  },
  {
    id: 'introspective',
    name: 'Introspective',
    color: '#1166aa',
    zone: 'blue',
    position: { x: 700, y: 300 },
    size: 180,
    movies: [
      { title: 'Synecdoche, New York', director: 'Charlie Kaufman', year: 2008 },
      { title: 'The Master', director: 'Paul Thomas Anderson', year: 2012 },
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017 },
      { title: 'The Social Network', director: 'David Fincher', year: 2010 },
    ]
  },
  {
    id: 'sincere',
    name: 'Sincere',
    color: '#005599',
    zone: 'blue',
    position: { x: 900, y: 300 },
    size: 180,
    movies: [
      { title: 'Short Term 12', director: 'Destin Daniel Cretton', year: 2013 },
      { title: 'The Spectacular Now', director: 'James Ponsoldt', year: 2013 },
      { title: 'Me and Earl and the Dying Girl', director: 'Alfonso Gomez-Rejon', year: 2015 },
      { title: 'The Edge of Seventeen', director: 'Kelly Fremon Craig', year: 2016 },
    ]
  },

  // ==================== ROW 8 (y = 500) — BLUE-PURPLE zone ====================
  {
    id: 'ominous',
    name: 'Ominous',
    color: '#660077',
    zone: 'purple',
    position: { x: -900, y: 500 },
    size: 180,
    movies: [
      { title: 'The Lighthouse', director: 'Robert Eggers', year: 2019 },
      { title: 'The VVitch', director: 'Robert Eggers', year: 2015 },
      { title: 'It Follows', director: 'David Robert Mitchell', year: 2014 },
      { title: 'The Thing', director: 'John Carpenter', year: 1982 },
    ]
  },
  {
    id: 'hypnotic',
    name: 'Hypnotic',
    color: '#7755aa',
    zone: 'purple',
    position: { x: -700, y: 500 },
    size: 180,
    movies: [
      { title: 'Enter the Void', director: 'Gaspar Noé', year: 2009 },
      { title: 'Koyaanisqatsi', director: 'Godfrey Reggio', year: 1982 },
      { title: 'Mandy', director: 'Panos Cosmatos', year: 2018 },
      { title: 'Valhalla Rising', director: 'Nicolas Winding Refn', year: 2009 },
    ]
  },
  {
    id: 'ethereal',
    name: 'Ethereal',
    color: '#9977cc',
    zone: 'purple',
    position: { x: -500, y: 500 },
    size: 180,
    movies: [
      { title: 'The Fountain', director: 'Darren Aronofsky', year: 2006 },
      { title: 'Annihilation', director: 'Alex Garland', year: 2018 },
      { title: 'The Fall', director: 'Tarsem Singh', year: 2006 },
      { title: 'Wings of Desire', director: 'Wim Wenders', year: 1987 },
    ]
  },
  {
    id: 'dreamy',
    name: 'Dreamy',
    color: '#aabbdd',
    zone: 'blue',
    position: { x: -300, y: 500 },
    size: 180,
    movies: [
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000 },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011 },
      { title: 'Only Lovers Left Alive', director: 'Jim Jarmusch', year: 2013 },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: 2001 },
    ]
  },
  {
    id: 'still',
    name: 'Still',
    color: '#8899cc',
    zone: 'blue',
    position: { x: -100, y: 500 },
    size: 180,
    movies: [
      { title: 'The Remains of the Day', director: 'James Ivory', year: 1993},
      { title: 'Never Let Me Go', director: 'Mark Romanek', year: 2010 },
      { title: 'The Reader', director: 'Stephen Daldry', year: 2008 },
      { title: 'Brooklyn', director: 'John Crowley', year: 2015 },
    ]
  },
  {
    id: 'melancholic-2',
    name: 'Wistful',
    color: '#6688bb',
    zone: 'blue',
    position: { x: 100, y: 500 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003 },
      { title: 'Manchester by the Sea', director: 'Kenneth Lonergan', year: 2016 },
      { title: 'Eternal Sunshine', director: 'Michel Gondry', year: 2004 },
      { title: 'Her', director: 'Spike Jonze', year: 2013 },
    ]
  },
  {
    id: 'mysterious',
    name: 'Mysterious',
    color: '#4466aa',
    zone: 'blue',
    position: { x: 300, y: 500 },
    size: 180,
    movies: [
      { title: 'Mulholland Drive', director: 'David Lynch', year: 2001 },
      { title: 'The Lighthouse', director: 'Robert Eggers', year: 2019 },
      { title: 'Under the Skin', director: 'Jonathan Glazer', year: 2013 },
      { title: 'Blade Runner 2049', director: 'Denis Villeneuve', year: 2017 },
    ]
  },
  {
    id: 'empathetic',
    name: 'Empathetic',
    color: '#2255aa',
    zone: 'blue',
    position: { x: 500, y: 500 },
    size: 180,
    movies: [
      { title: 'Room', director: 'Lenny Abrahamson', year: 2015 },
      { title: 'Wonder', director: 'Stephen Chbosky', year: 2017 },
      { title: 'The Theory of Everything', director: 'James Marsh', year: 2014 },
      { title: 'Lion', director: 'Garth Davis', year: 2016 },
    ]
  },
  {
    id: 'resilient',
    name: 'Resilient',
    color: '#1144aa',
    zone: 'blue',
    position: { x: 700, y: 500 },
    size: 180,
    movies: [
      { title: '127 Hours', director: 'Danny Boyle', year: 2010 },
      { title: 'Unbroken', director: 'Angelina Jolie', year: 2014 },
      { title: 'Wild', director: 'Jean-Marc Vallée', year: 2014 },
      { title: 'Cast Away', director: 'Robert Zemeckis', year: 2000 },
    ]
  },
  {
    id: 'abstract',
    name: 'Abstract',
    color: '#003399',
    zone: 'blue',
    position: { x: 900, y: 500 },
    size: 180,
    movies: [
      { title: 'Upstream Color', director: 'Shane Carruth', year: 2013 },
      { title: 'The Tree of Life', director: 'Terrence Malick', year: 2011 },
      { title: 'The Fountain', director: 'Darren Aronofsky', year: 2006 },
      { title: 'Mr. Nobody', director: 'Jaco Van Dormael', year: 2009 },
    ]
  },

  // ==================== ROW 9 (y = 700) — PURPLE zone ====================
  {
    id: 'chilling',
    name: 'Chilling',
    color: '#550066',
    zone: 'purple',
    position: { x: -900, y: 700 },
    size: 180,
    movies: [
      { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991 },
      { title: 'Zodiac', director: 'David Fincher', year: 2007 },
      { title: 'Catch Me If You Can', director: 'Steven Spielberg', year: 2002 },
      { title: 'The Girl with the Dragon Tattoo', director: 'David Fincher', year: 2011 },
    ]
  },
  {
    id: 'uncanny',
    name: 'Uncanny',
    color: '#6644aa',
    zone: 'purple',
    position: { x: -700, y: 700 },
    size: 180,
    movies: [
      { title: 'Ex Machina', director: 'Alex Garland', year: 2014 },
      { title: 'The Lobster', director: 'Yorgos Lanthimos', year: 2015 },
      { title: 'Her', director: 'Spike Jonze', year: 2013 },
      { title: 'Arrival', director: 'Denis Villeneuve', year: 2016 },
    ]
  },
  {
    id: 'cryptic',
    name: 'Cryptic',
    color: '#7755bb',
    zone: 'purple',
    position: { x: -500, y: 700 },
    size: 180,
    movies: [
      { title: 'Primer', director: 'Shane Carruth', year: 2004 },
      { title: 'Memento', director: 'Christopher Nolan', year: 2000 },
      { title: 'Triangle', director: 'Christopher Smith', year: 2009 },
      { title: 'Coherence', director: 'James Ward Byrkit', year: 2013 },
    ]
  },
  {
    id: 'puzzling',
    name: 'Puzzling',
    color: '#8866cc',
    zone: 'purple',
    position: { x: -300, y: 700 },
    size: 180,
    movies: [
      { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
      { title: 'The Prestige', director: 'Christopher Nolan', year: 2006 },
      { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010 },
      { title: 'Gone Girl', director: 'David Fincher', year: 2014 },
    ]
  },
  {
    id: 'enigmatic',
    name: 'Enigmatic',
    color: '#9977cc',
    zone: 'purple',
    position: { x: -100, y: 700 },
    size: 180,
    movies: [
      { title: 'Mulholland Drive', director: 'David Lynch', year: 2001 },
      { title: 'Enemy', director: 'Denis Villeneuve', year: 2013 },
      { title: 'The Double', director: 'Richard Ayoade', year: 2013 },
      { title: 'Pi', director: 'Darren Aronofsky', year: 1998 },
    ]
  },
  {
    id: 'melancholic-3',
    name: 'Melancholic',
    color: '#7788bb',
    zone: 'blue',
    position: { x: 100, y: 700 },
    size: 180,
    movies: [
      { title: 'Lost in Translation', director: 'Sofia Coppola', year: 2003 },
      { title: 'Manchester by the Sea', director: 'Kenneth Lonergan', year: 2016 },
      { title: 'Eternal Sunshine', director: 'Michel Gondry', year: 2004 },
      { title: 'Her', director: 'Spike Jonze', year: 2013 },
    ]
  },
  {
    id: 'vintage',
    name: 'Vintage',
    color: '#5566aa',
    zone: 'blue',
    position: { x: 300, y: 700 },
    size: 180,
    movies: [
      { title: 'Cinema Paradiso', director: 'Giuseppe Tornatore', year: 1988 },
      { title: 'Roman Holiday', director: 'William Wyler', year: 1953 },
      { title: 'Casablanca', director: 'Michael Curtiz', year: 1942 },
      { title: 'Breakfast at Tiffany\'s', director: 'Blake Edwards', year: 1961 },
    ]
  },
  {
    id: 'retro',
    name: 'Retro',
    color: '#3355aa',
    zone: 'blue',
    position: { x: 500, y: 700 },
    size: 180,
    movies: [
      { title: 'Dazed and Confused', director: 'Richard Linklater', year: 1993 },
      { title: 'American Graffiti', director: 'George Lucas', year: 1973 },
      { title: 'Almost Famous', director: 'Cameron Crowe', year: 2000 },
      { title: 'Boogie Nights', director: 'Paul Thomas Anderson', year: 1997 },
    ]
  },
  {
    id: 'groovy',
    name: 'Groovy',
    color: '#2244aa',
    zone: 'blue',
    position: { x: 700, y: 700 },
    size: 180,
    movies: [
      { title: 'Austin Powers', director: 'Jay Roach', year: 1997 },
      { title: 'That Thing You Do!', director: 'Tom Hanks', year: 1996 },
      { title: 'Hairspray', director: 'Adam Shankman', year: 2007 },
      { title: 'Velvet Goldmine', director: 'Todd Haynes', year: 1998 },
    ]
  },
  {
    id: 'epic',
    name: 'Epic',
    color: '#113399',
    zone: 'blue',
    position: { x: 900, y: 700 },
    size: 180,
    movies: [
      { title: 'Lawrence of Arabia', director: 'David Lean', year: 1962 },
      { title: 'The Lord of the Rings', director: 'Peter Jackson', year: 2001 },
      { title: 'Dune', director: 'Denis Villeneuve', year: 2021 },
      { title: 'Apocalypse Now', director: 'Francis Ford Coppola', year: 1979 },
    ]
  },

  // ==================== ROW 10 (y = 900) — DEEP PURPLE zone ====================
  {
    id: 'disturbing-2',
    name: 'Disturbing',
    color: '#440055',
    zone: 'purple',
    position: { x: -900, y: 900 },
    size: 180,
    movies: [
      { title: 'Hereditary', director: 'Ari Aster', year: 2018 },
      { title: 'Audition', director: 'Takashi Miike', year: 1999 },
      { title: 'Funny Games', director: 'Michael Haneke', year: 1997 },
      { title: 'Midsommar', director: 'Ari Aster', year: 2019 },
    ]
  },
  {
    id: 'sinister-2',
    name: 'Sinister',
    color: '#553366',
    zone: 'purple',
    position: { x: -700, y: 900 },
    size: 180,
    movies: [
      { title: 'The Witch', director: 'Robert Eggers', year: 2015 },
      { title: 'The Shining', director: 'Stanley Kubrick', year: 1980 },
      { title: 'Zodiac', director: 'David Fincher', year: 2007 },
      { title: 'Seven', director: 'David Fincher', year: 1995 },
    ]
  },
  {
    id: 'dark',
    name: 'Dark',
    color: '#664477',
    zone: 'purple',
    position: { x: -500, y: 900 },
    size: 180,
    movies: [
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000 },
      { title: 'Irreversible', director: 'Gaspar Noé', year: 2002 },
      { title: 'Martyrs', director: 'Pascal Laugier', year: 2008 },
      { title: 'A Prophet', director: 'Jacques Audiard', year: 2009 },
    ]
  },
  {
    id: 'gloomy',
    name: 'Gloomy',
    color: '#775588',
    zone: 'purple',
    position: { x: -300, y: 900 },
    size: 180,
    movies: [
      { title: 'Dancer in the Dark', director: 'Lars von Trier', year: 2000 },
      { title: 'Melancholia', director: 'Lars von Trier', year: 2011 },
      { title: 'The Road', director: 'John Hillcoat', year: 2009 },
      { title: 'Grave of the Fireflies', director: 'Isao Takahata', year: 1988 },
    ]
  },
  {
    id: 'haunted',
    name: 'Haunted',
    color: '#886699',
    zone: 'purple',
    position: { x: -100, y: 900 },
    size: 180,
    movies: [
      { title: 'The Others', director: 'Alejandro Amenábar', year: 2001 },
      { title: 'The Orphanage', director: 'J.A. Bayona', year: 2007 },
      { title: 'A Tale of Two Sisters', director: 'Kim Jee-woon', year: 2003 },
      { title: 'The Devil\'s Backbone', director: 'Guillermo del Toro', year: 2001 },
    ]
  },
  {
    id: 'somber',
    name: 'Somber',
    color: '#7777aa',
    zone: 'blue',
    position: { x: 100, y: 900 },
    size: 180,
    movies: [
      { title: 'Requiem for a Dream', director: 'Darren Aronofsky', year: 2000 },
      { title: 'Schindler\'s List', director: 'Steven Spielberg', year: 1993 },
      { title: '12 Years a Slave', director: 'Steve McQueen', year: 2013 },
      { title: 'Precious', director: 'Lee Daniels', year: 2009 },
    ]
  },
  {
    id: 'pensive',
    name: 'Pensive',
    color: '#6688bb',
    zone: 'blue',
    position: { x: 300, y: 900 },
    size: 180,
    movies: [
      { title: 'A Ghost Story', director: 'David Lowery', year: 2017 },
      { title: 'Paterson', director: 'Jim Jarmusch', year: 2016 },
      { title: 'Columbus', director: 'Kogonada', year: 2017 },
      { title: 'Certified Copy', director: 'Abbas Kiarostami', year: 2010 },
    ]
  },
  {
    id: 'wistful-2',
    name: 'Longing',
    color: '#5577bb',
    zone: 'blue',
    position: { x: 500, y: 900 },
    size: 180,
    movies: [
      { title: 'In the Mood for Love', director: 'Wong Kar-wai', year: 2000 },
      { title: 'The Remains of the Day', director: 'James Ivory', year: 1993 },
      { title: 'Brief Encounter', director: 'David Lean', year: 1945 },
      { title: 'Never Let Me Go', director: 'Mark Romanek', year: 2010 },
    ]
  },
  {
    id: 'restful',
    name: 'Restful',
    color: '#4466aa',
    zone: 'blue',
    position: { x: 700, y: 900 },
    size: 180,
    movies: [
      { title: 'The Secret Garden', director: 'Agnieszka Holland', year: 1993 },
      { title: 'Kiki\'s Delivery Service', director: 'Hayao Miyazaki', year: 1989 },
      { title: 'The Wind Rises', director: 'Hayao Miyazaki', year: 2013 },
      { title: 'From Up on Poppy Hill', director: 'Gorō Miyazaki', year: 2011 },
    ]
  },
  {
    id: 'gentle',
    name: 'Gentle',
    color: '#335599',
    zone: 'blue',
    position: { x: 900, y: 900 },
    size: 180,
    movies: [
      { title: 'The Wind Rises', director: 'Hayao Miyazaki', year: 2013 },
      { title: 'When Marnie Was There', director: 'Hiromasa Yonebayashi', year: 2014 },
      { title: 'Only Yesterday', director: 'Isao Takahata', year: 1991 },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', year: 2013 },
    ]
  },
];