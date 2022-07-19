const booksData = [
  {
    isbn: '0380816792',
    title: 'A Rose in Winter',
    author: 'Kathleen E. Woodiwiss',
    year: '2011',
    publisher: 'Harper Mass Market Paperbacks',
    imageLinkS: 'http://images.amazon.com/images/P/0380816792.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0380816792.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0380816792.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743474198',
    title: 'Heartbreaker',
    author: 'Julie Garwood',
    year: '2010',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0743474198.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743474198.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743474198.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743457226',
    title: 'Deep Waters',
    author: 'Jayne Ann Krentz',
    year: '2010',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0743457226.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743457226.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743457226.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '074349346X',
    title: 'Angels &amp; Demons : A Novel',
    author: 'Dan Brown',
    year: '2008',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/074349346X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/074349346X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/074349346X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1903436346',
    title: "The Winter's Tale - Arden Shakespeare : Third Series - Hardback (Arden Shakespeare Third Series)",
    author: 'John Pitcher',
    year: '2006',
    publisher: 'Arden',
    imageLinkS: 'http://images.amazon.com/images/P/1903436346.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1903436346.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1903436346.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743456874',
    title: "Nip 'n' Tuck : A Novel",
    author: 'Kathy Lette',
    year: '2006',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743456874.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743456874.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743456874.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743448987',
    title: 'Memoirs of an Unfit Mother',
    author: 'Anne Robinson',
    year: '2006',
    publisher: 'Pocket Books',
    imageLinkS: 'http://images.amazon.com/images/P/0743448987.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743448987.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743448987.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1881273156',
    title: 'The Five Love Languages: Five Love Languages',
    author: 'Gary Chapman',
    year: '2005',
    publisher: 'Moody publishers',
    imageLinkS: 'http://images.amazon.com/images/P/1881273156.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1881273156.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1881273156.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1593100175',
    title: 'Beauty Is Soul Deep',
    author: 'Michelle Lee',
    year: '2005',
    publisher: 'Barbour Publishing',
    imageLinkS: 'http://images.amazon.com/images/P/1593100175.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1593100175.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1593100175.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1582344574',
    title: 'Ninth Life of Louis Drax, The -POSTPONED',
    author: 'Liz Jensen',
    year: '2005',
    publisher: 'Bloomsbury USA',
    imageLinkS: 'http://images.amazon.com/images/P/1582344574.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1582344574.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1582344574.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '157322295X',
    title: 'The Great Indoors / Sabine Durrant',
    author: 'Sabine Durrant',
    year: '2005',
    publisher: 'Riverhead Books',
    imageLinkS: 'http://images.amazon.com/images/P/157322295X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/157322295X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/157322295X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '155278410X',
    title: 'The Hamlet Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/155278410X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/155278410X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/155278410X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1552782662',
    title: 'The Shanghai Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/1552782662.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1552782662.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1552782662.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1552782603',
    title: 'The Lake Ching Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/1552782603.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1552782603.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1552782603.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0881501719',
    title: 'The Asey Mayo Trio: Three Cape Cod Mysteries',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/0881501719.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0881501719.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0881501719.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '088150078X',
    title: 'The Annulet of Gilt: An Asey Mayo Cape Cod Mystery',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/088150078X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/088150078X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/088150078X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0881500461',
    title: 'The Cape Cod Mystery: An Asey Mayo Mystery',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/0881500461.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0881500461.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0881500461.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0802714277',
    title: 'Astro Turf: The Private Life Of Rocket Science',
    author: 'M. G. Lord',
    year: '2005',
    publisher: 'Walker &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/0802714277.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0802714277.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0802714277.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0786890754',
    title: 'PS, I Love You',
    author: 'Cecelia Ahern',
    year: '2005',
    publisher: 'Hyperion',
    imageLinkS: 'http://images.amazon.com/images/P/0786890754.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0786890754.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0786890754.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0778320820',
    title: 'Me &amp; Emma',
    author: 'Elizabeth Flock',
    year: '2005',
    publisher: 'Mira',
    imageLinkS: 'http://images.amazon.com/images/P/0778320820.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0778320820.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0778320820.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0763626392',
    title: 'The Gift (Croggon, Alison, Pellinor, 1st Bk.)',
    author: 'Alison Croggon',
    year: '2005',
    publisher: 'Candlewick Pr',
    imageLinkS: 'http://images.amazon.com/images/P/0763626392.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0763626392.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0763626392.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0753820099',
    title: 'Snobs',
    author: 'Julian Fellowes',
    year: '2005',
    publisher: 'Phoenix mass market p/bk',
    imageLinkS: 'http://images.amazon.com/images/P/0753820099.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0753820099.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0753820099.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0752848291',
    title: 'A Village Dilemma',
    author: 'Rebecca Shaw',
    year: '2005',
    publisher: 'Orion mass market paperback',
    imageLinkS: 'http://images.amazon.com/images/P/0752848291.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0752848291.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0752848291.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0749924659',
    title: "Celebrity Style Secrets: An Insider's Guide to Looking a - List",
    author: 'Jacqui Ripley',
    year: '2005',
    publisher: 'Piatkus Books',
    imageLinkS: 'http://images.amazon.com/images/P/0749924659.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0749924659.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0749924659.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492080',
    title: 'The Awful Secret : A Crowner John Mystery (Crowner John Mystery)',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492080.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492080.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492080.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492072',
    title: "Crowner'S Quest : A Crowner John Mystery (Crowner John Mystery)",
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492072.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492072.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492072.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492064',
    title: 'The Poisoned Chalice : A Crowner John Mystery (Crowner John Mystery)',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492064.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492064.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492064.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492056',
    title: 'The Sanctuary Seeker : A Crowner John Mystery',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492056.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492056.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492056.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743490258',
    title: 'Best of Friends',
    author: 'Cathy Kelly',
    year: '2005',
    publisher: 'Downtown Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743490258.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743490258.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743490258.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743484894',
    title: "The Winter's Tale (Folger Shakespeare Library)",
    author: 'William Shakespeare',
    year: '2005',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743484894.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743484894.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743484894.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743474783',
    title: 'One Fine Day the Rabbi Bought a Cross',
    author: 'Harry Kemelman',
    year: '2005',
    publisher: 'I Books',
    imageLinkS: 'http://images.amazon.com/images/P/0743474783.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743474783.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743474783.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '074324477X',
    title: 'Rockville Pike : A Novel',
    author: 'Susan Coll',
    year: '2005',
    publisher: 'Simon &amp; Schuster',
    imageLinkS: 'http://images.amazon.com/images/P/074324477X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/074324477X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/074324477X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671878654',
    title: 'An Oblique Approach',
    author: 'Eric Flint',
    year: '2005',
    publisher: 'Baen',
    imageLinkS: 'http://images.amazon.com/images/P/0671878654.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0671878654.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0671878654.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0618441433',
    title: 'Josie and Jack : A Novel',
    author: 'Kelly Braffet',
    year: '2005',
    publisher: 'Mariner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0618441433.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0618441433.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0618441433.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0439448948',
    title: 'Husky In A Hut (Animal Ark)',
    author: 'Ben Baglio',
    year: '2005',
    publisher: 'Scholastic Paperbacks',
    imageLinkS: 'http://images.amazon.com/images/P/0439448948.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0439448948.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0439448948.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385732376',
    title: 'The Illustrated Mum',
    author: 'JACQUELINE WILSON',
    year: '2005',
    publisher: 'Delacorte Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0385732376.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0385732376.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0385732376.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385338082',
    title: 'Can You Keep a Secret?',
    author: 'SOPHIE KINSELLA',
    year: '2005',
    publisher: 'Delta',
    imageLinkS: 'http://images.amazon.com/images/P/0385338082.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0385338082.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0385338082.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375829849',
    title: 'The Golden Goose',
    author: 'Dick King-Smith',
    year: '2005',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375829849.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0375829849.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0375829849.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0374103747',
    title: "In My Brother's Shadow",
    author: 'Uwe Timm',
    year: '2005',
    publisher: 'Farrar, Straus and Giroux',
    imageLinkS: 'http://images.amazon.com/images/P/0374103747.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0374103747.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0374103747.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316156108',
    title: 'The Ha-Ha : A Novel',
    author: 'Dave King',
    year: '2005',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316156108.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0316156108.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0316156108.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0141002999',
    title: 'Thunderball (James Bond 007)',
    author: 'Ian Fleming',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0141002999.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0141002999.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0141002999.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0141002980',
    title: 'Moonraker (James Bond 007)',
    author: 'Ian Fleming',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0141002980.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0141002980.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0141002980.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140860363',
    title: 'On the Road',
    author: 'Jack Kerouac',
    year: '2005',
    publisher: 'Penguin Highbridge',
    imageLinkS: 'http://images.amazon.com/images/P/0140860363.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140860363.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140860363.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140622454',
    title: 'A Woman of No Importance (Penguin Popular Classics)',
    author: 'Oscar Wilde',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140622454.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140622454.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140622454.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140144463',
    title: 'The Cornish Trilogy',
    author: 'Robertson Davies',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140144463.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140144463.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140144463.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140124373',
    title: 'Red Dwarf',
    author: 'Grant Naylor',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140124373.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140124373.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140124373.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0062731327',
    title: 'HOMEWORK WITHOUT TEARS',
    author: 'Lee Canter',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/0062731327.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0062731327.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0062731327.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006272049X',
    title: 'Thereby Hangs a Tale',
    author: 'Charles E. Funk',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/006272049X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006272049X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006272049X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006272004X',
    title: "The Astrologer's Handbook",
    author: 'Frances Sakoian',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/006272004X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006272004X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006272004X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060738189',
    title: 'Serpico',
    author: 'Peter Maas',
    year: '2005',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060738189.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060738189.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060738189.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060567341',
    title: 'Chinese Cinderella and the Secret Dragon Society',
    author: 'Adeline Yen Mah',
    year: '2005',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/0060567341.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060567341.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060567341.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006055701X',
    title: 'Dancing in Red Shoes Will Kill You',
    author: 'Dorian Cirrone',
    year: '2005',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/006055701X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006055701X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006055701X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060541490',
    title: 'Sexy',
    author: 'Joyce Carol Oates',
    year: '2005',
    publisher: 'HarperTempest',
    imageLinkS: 'http://images.amazon.com/images/P/0060541490.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060541490.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060541490.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153054',
    title: 'Rats, Bats, Frogs and Bogs of London (Of London Series)',
    author: 'Chris McLaren',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153054.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153054.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153054.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153046',
    title: 'Crypts, Caves and Tunnels of London (Of London Series)',
    author: 'Ian Marchant',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153046.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153046.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153046.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153038',
    title: 'Dungeons, Gallows and Severed Heads of London (Of London Series)',
    author: 'Travis Elborough',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153038.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153038.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153038.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '190415302X',
    title: 'Ghosts, Ghouls and Phantoms of London (Of London Series)',
    author: 'Travis Elborough',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/190415302X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/190415302X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/190415302X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153011',
    title: 'The Black Death and Other Putrid Plagues of London (Of London Series)',
    author: 'Natasha Narayan',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153011.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153011.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153011.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153003',
    title: 'Grave-Robbers, Cut-Throats and Poisoners of London (Of London Series)',
    author: 'Helen Smith',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153003.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153003.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153003.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1902636481',
    title: 'Birth And Breastfeeding: Rediscovering The Needs Of Women During Pregnancy And Childbirth',
    author: 'Michel Odent',
    year: '2004',
    publisher: 'Clairview Books',
    imageLinkS: 'http://images.amazon.com/images/P/1902636481.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1902636481.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1902636481.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1894663616',
    title: 'Meet Me in the Parking Lot',
    author: 'Alexandra Leggat',
    year: '2004',
    publisher: 'Insomniac Press',
    imageLinkS: 'http://images.amazon.com/images/P/1894663616.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1894663616.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1894663616.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1894222776',
    title: "You Can't Fall for Your Stepsister (Step-Chain)",
    author: 'Ann Bryant',
    year: '2004',
    publisher: 'Lobster Press',
    imageLinkS: 'http://images.amazon.com/images/P/1894222776.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1894222776.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1894222776.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1893224872',
    title: 'PUPPETMASTER: THE SECRET LIFE OF J. EDGAR HOOVER',
    author: 'Richard Hack',
    year: '2004',
    publisher: 'New Millennium',
    imageLinkS: 'http://images.amazon.com/images/P/1893224872.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1893224872.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1893224872.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1889186511',
    title: 'Letters from Hades',
    author: 'Jeffrey Thomas',
    year: '2004',
    publisher: 'Necro Pubns',
    imageLinkS: 'http://images.amazon.com/images/P/1889186511.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1889186511.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1889186511.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1858818257',
    title: "Horrid Henry's Revenge",
    author: 'Francesca Simon',
    year: '2004',
    publisher: "Orion Children's",
    imageLinkS: 'http://images.amazon.com/images/P/1858818257.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1858818257.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1858818257.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1857989619',
    title: 'Only an Alligator: Book One of the Accomplice Series (Accomplice)',
    author: 'Steve Aylett',
    year: '2004',
    publisher: 'Gollancz',
    imageLinkS: 'http://images.amazon.com/images/P/1857989619.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1857989619.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1857989619.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1853437182',
    title: 'The Caesarean',
    author: 'Michel Odent',
    year: '2004',
    publisher: 'Intl Specialized Book Service Inc',
    imageLinkS: 'http://images.amazon.com/images/P/1853437182.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1853437182.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1853437182.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1852428619',
    title: 'The Pornographer Diaries',
    author: 'Danny King',
    year: '2004',
    publisher: 'Consortium',
    imageLinkS: 'http://images.amazon.com/images/P/1852428619.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1852428619.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1852428619.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1845170423',
    title: 'Cocktail Classics',
    author: 'David Biggs',
    year: '2004',
    publisher: 'Connaught',
    imageLinkS: 'http://images.amazon.com/images/P/1845170423.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1845170423.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1845170423.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1842820575',
    title: 'The Golden Menagerie',
    author: 'Allan Cameron',
    year: '2004',
    publisher: 'Luath Press',
    imageLinkS: 'http://images.amazon.com/images/P/1842820575.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1842820575.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1842820575.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1842552678',
    title: 'The Book of Dead Days (Book of Dead Days S.)',
    author: 'Marcus Sedgwick',
    year: '2004',
    publisher: "Orion Children's",
    imageLinkS: 'http://images.amazon.com/images/P/1842552678.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1842552678.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1842552678.01.LZZZZZZZ.jpg'
  },
  {
    isbn: "0195153448",
    title: "Classical Mythology",
    author: "Mark P. O. Morford",
    year: 2002,
    publisher: "Oxford University Press",
    imageLinkS: "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0002005018",
    title: "Clara Callan",
    author: "Richard Bruce Wright",
    year: 2001,
    publisher: "HarperFlamingo Canada",
    imageLinkS: "http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060973129",
    title: "Decision in Normandy",
    author: "Carlo D'Este",
    year: 1991,
    publisher: "HarperPerennial",
    imageLinkS: "http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0374157065",
    title: "Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
    author: "Gina Bari Kolata",
    year: 1999,
    publisher: "Farrar Straus Giroux",
    imageLinkS: "http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0393045218",
    title: "The Mummies of Urumchi",
    author: "E. J. W. Barber",
    year: 1999,
    publisher: "W. W. Norton &amp; Company",
    imageLinkS: "http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0399135782",
    title: "The Kitchen God's Wife",
    author: "Amy Tan",
    year: 1991,
    publisher: "Putnam Pub Group",
    imageLinkS: "http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0425176428",
    title: "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
    author: "Robert Cowley",
    year: 2000,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671870432",
    title: "PLEADING GUILTY",
    author: "Scott Turow",
    year: 1993,
    publisher: "Audioworks",
    imageLinkS: "http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679425608",
    title: "Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
    author: "David Cordingly",
    year: 1996,
    publisher: "Random House",
    imageLinkS: "http://images.amazon.com/images/P/0679425608.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679425608.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "074322678X",
    title: "Where You'll Find Me: And Other Stories",
    author: "Ann Beattie",
    year: 2002,
    publisher: "Scribner",
    imageLinkS: "http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0771074670",
    title: "Nights Below Station Street",
    author: "David Adams Richards",
    year: 1988,
    publisher: "Emblem Editions",
    imageLinkS: "http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "080652121X",
    title: "Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
    author: "Adam Lebor",
    year: 2000,
    publisher: "Citadel Press",
    imageLinkS: "http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0887841740",
    title: "The Middle Stories",
    author: "Sheila Heti",
    year: 2004,
    publisher: "House of Anansi Press",
    imageLinkS: "http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1552041778,
    title: "Jane Doe",
    author: "R. J. Kaiser",
    year: 1999,
    publisher: "Mira Books",
    imageLinkS: "http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1558746218,
    title: "A Second Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series)",
    author: "Jack Canfield",
    year: 1998,
    publisher: "Health Communications",
    imageLinkS: "http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1558746218.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1567407781,
    title: "The Witchfinder (Amos Walker Mystery Series)",
    author: "Loren D. Estleman",
    year: 1998,
    publisher: "Brilliance Audio - Trade",
    imageLinkS: "http://images.amazon.com/images/P/1567407781.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1567407781.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1567407781.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1575663937,
    title: "More Cunning Than Man: A Social History of Rats and Man",
    author: "Robert Hendrickson",
    year: 1999,
    publisher: "Kensington Publishing Corp.",
    imageLinkS: "http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1575663937.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1881320189,
    title: "Goodbye to the Buttermilk Sky",
    author: "Julia Oliver",
    year: 1994,
    publisher: "River City Pub",
    imageLinkS: "http://images.amazon.com/images/P/1881320189.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1881320189.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1881320189.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440234743",
    title: "The Testament",
    author: "John Grisham",
    year: 1999,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440234743.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0452264464",
    title: "Beloved (Plume Contemporary Fiction)",
    author: "Toni Morrison",
    year: 1994,
    publisher: "Plume",
    imageLinkS: "http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0452264464.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0609804618",
    title: "Our Dumb Century: The Onion Presents 100 Years of Headlines from America's Finest News Source",
    author: "The Onion",
    year: 1999,
    publisher: "Three Rivers Press",
    imageLinkS: "http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0609804618.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1841721522,
    title: "New Vegetarian: Bold and Beautiful Recipes for Every Occasion",
    author: "Celia Brooks Brown",
    year: 2001,
    publisher: "Ryland Peters &amp; Small Ltd",
    imageLinkS: "http://images.amazon.com/images/P/1841721522.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1841721522.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1841721522.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1879384493,
    title: "If I'd Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can't Afford to Make Them All Yourself",
    author: "J. R. Parrish",
    year: 2003,
    publisher: "Cypress House",
    imageLinkS: "http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1879384493.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061076031",
    title: "Mary-Kate &amp; Ashley Switching Goals (Mary-Kate and Ashley Starring in)",
    author: "Mary-Kate &amp; Ashley Olsen",
    year: 2000,
    publisher: "HarperEntertainment",
    imageLinkS: "http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061076031.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0439095026",
    title: "Tell Me This Isn't Happening",
    author: "Robynn Clairday",
    year: 1999,
    publisher: "Scholastic",
    imageLinkS: "http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0689821166",
    title: "Flood : Mississippi 1927",
    author: "Kathleen Duey",
    year: 1998,
    publisher: "Aladdin",
    imageLinkS: "http://images.amazon.com/images/P/0689821166.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0689821166.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0689821166.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0971880107",
    title: "Wild Animus",
    author: "Rich Shapero",
    year: 2004,
    publisher: "Too Far",
    imageLinkS: "http://images.amazon.com/images/P/0971880107.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0971880107.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345402871",
    title: "Airframe",
    author: "Michael Crichton",
    year: 1997,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345402871.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345402871.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345402871.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345417623",
    title: "Timeline",
    author: "MICHAEL CRICHTON",
    year: 2000,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345417623.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345417623.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345417623.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0684823802",
    title: "OUT OF THE SILENT PLANET",
    author: "C.S. Lewis",
    year: 1996,
    publisher: "Scribner",
    imageLinkS: "http://images.amazon.com/images/P/0684823802.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0684823802.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0684823802.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375759778",
    title: "Prague : A Novel",
    author: "ARTHUR PHILLIPS",
    year: 2003,
    publisher: "Random House Trade Paperbacks",
    imageLinkS: "http://images.amazon.com/images/P/0375759778.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375759778.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375759778.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0425163091",
    title: "Chocolate Jesus",
    author: "Stephan Jaramillo",
    year: 1998,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/0425163091.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0425163091.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0425163091.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3404921038,
    title: "Wie Barney es sieht.",
    author: "Mordecai Richler",
    year: 2002,
    publisher: "L?¼bbe",
    imageLinkS: "http://images.amazon.com/images/P/3404921038.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3404921038.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3442353866,
    title: "Der Fluch der Kaiserin. Ein Richter- Di- Roman.",
    author: "Eleanor Cooney",
    year: 2001,
    publisher: "Goldmann",
    imageLinkS: "http://images.amazon.com/images/P/3442353866.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3442353866.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3442353866.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3442410665,
    title: "Sturmzeit. Roman.",
    author: "Charlotte Link",
    year: 1991,
    publisher: "Goldmann",
    imageLinkS: "http://images.amazon.com/images/P/3442410665.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3442410665.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3442410665.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3442446937,
    title: "Tage der Unschuld.",
    author: "Richard North Patterson",
    year: 2000,
    publisher: "Goldmann",
    imageLinkS: "http://images.amazon.com/images/P/3442446937.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3442446937.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3442446937.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375406328",
    title: "Lying Awake",
    author: "Mark Salzman",
    year: 2000,
    publisher: "Alfred A. Knopf",
    imageLinkS: "http://images.amazon.com/images/P/0375406328.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375406328.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375406328.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446310786",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1988,
    publisher: "Little Brown &amp; Company",
    imageLinkS: "http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446310786.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0449005615",
    title: "Seabiscuit: An American Legend",
    author: "LAURA HILLENBRAND",
    year: 2002,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0449005615.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0449005615.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060168013",
    title: "Pigs in Heaven",
    author: "Barbara Kingsolver",
    year: 1993,
    publisher: "Harpercollins",
    imageLinkS: "http://images.amazon.com/images/P/0060168013.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060168013.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060168013.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "038078243X",
    title: "Miss Zukas and the Raven's Dance",
    author: "Jo Dereske",
    year: 1996,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/038078243X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/038078243X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/038078243X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "055321215X",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1983,
    publisher: "Bantam",
    imageLinkS: "http://images.amazon.com/images/P/055321215X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/055321215X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/055321215X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "067176537X",
    title: "The Therapeutic Touch: How to Use Your Hands to Help or to Heal",
    author: "Dolores Krieger",
    year: 1979,
    publisher: "Fireside",
    imageLinkS: "http://images.amazon.com/images/P/067176537X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/067176537X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/067176537X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061099686",
    title: "Downtown",
    author: "Anne Rivers Siddons",
    year: 1995,
    publisher: "HarperTorch",
    imageLinkS: "http://images.amazon.com/images/P/0061099686.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061099686.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061099686.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553582909",
    title: "Icebound",
    author: "Dean R. Koontz",
    year: 2000,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553582909.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553582909.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553582909.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671888587",
    title: "I'll Be Seeing You",
    author: "Mary Higgins Clark",
    year: 1994,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671888587.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671888587.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671888587.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553582747",
    title: "From the Corner of His Eye",
    author: "Dean Koontz",
    year: 2001,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553582747.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0425182908",
    title: "Isle of Dogs",
    author: "Patricia Cornwell",
    year: 2002,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/0425182908.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0425182908.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "042518630X",
    title: "Purity in Death",
    author: "J.D. Robb",
    year: 2002,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/042518630X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/042518630X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/042518630X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440223571",
    title: "This Year It Will Be Different: And Other Stories",
    author: "Maeve Binchy",
    year: 1997,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440223571.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440223571.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0812523873",
    title: "Proxies",
    author: "Laura J. Mixon",
    year: 1999,
    publisher: "Tor Books",
    imageLinkS: "http://images.amazon.com/images/P/0812523873.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0812523873.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0812523873.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0842342702",
    title: "Left Behind: A Novel of the Earth's Last Days (Left Behind #1)",
    author: "Tim Lahaye",
    year: 2000,
    publisher: "Tyndale House Publishers",
    imageLinkS: "http://images.amazon.com/images/P/0842342702.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0842342702.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0842342702.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440225701",
    title: "The Street Lawyer",
    author: "JOHN GRISHAM",
    year: 1999,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440225701.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440225701.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440225701.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060914068",
    title: "Love, Medicine and Miracles",
    author: "M.D. Bernie S. Siegel",
    year: 1988,
    publisher: "HarperCollins Publishers",
    imageLinkS: "http://images.amazon.com/images/P/0060914068.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060914068.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060914068.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0156047624",
    title: "All the King's Men",
    author: "Robert Penn Warren",
    year: 1982,
    publisher: "Harvest Books",
    imageLinkS: "http://images.amazon.com/images/P/0156047624.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0156047624.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0156047624.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0245542957",
    title: "Pacific Northwest",
    author: "Hans Johannes Hoefer",
    year: 1985,
    publisher: "Chambers Harrap Publishers Ltd",
    imageLinkS: "http://images.amazon.com/images/P/0245542957.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0245542957.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0245542957.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380715899",
    title: "A Soldier of the Great War",
    author: "Mark Helprin",
    year: 1992,
    publisher: "Avon Books",
    imageLinkS: "http://images.amazon.com/images/P/0380715899.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380715899.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380715899.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553280333",
    title: "Getting Well Again",
    author: "O. Carol Simonton Md",
    year: 1992,
    publisher: "Bantam",
    imageLinkS: "http://images.amazon.com/images/P/0553280333.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553280333.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553280333.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0961769947",
    title: "Northwest Wines and Wineries",
    author: "Chuck Hill",
    year: 1993,
    publisher: "Speed Graphics",
    imageLinkS: "http://images.amazon.com/images/P/0961769947.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0961769947.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0961769947.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0964778319",
    title: "An Atmosphere of Eternity: Stories of India",
    author: "David Iglehart",
    year: 2002,
    publisher: "Sunflower Press",
    imageLinkS: "http://images.amazon.com/images/P/0964778319.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0964778319.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0964778319.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671623249",
    title: "LONESOME DOVE",
    author: "Larry McMurtry",
    year: 1986,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671623249.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671623249.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671623249.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679810307",
    title: "Shabanu: Daughter of the Wind (Border Trilogy)",
    author: "SUZANNE FISHER STAPLES",
    year: 1991,
    publisher: "Laurel Leaf",
    imageLinkS: "http://images.amazon.com/images/P/0679810307.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679810307.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679810307.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679865691",
    title: "Haveli (Laurel Leaf Books)",
    author: "SUZANNE FISHER STAPLES",
    year: 1995,
    publisher: "Laurel Leaf",
    imageLinkS: "http://images.amazon.com/images/P/0679865691.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679865691.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679865691.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 2070423204,
    title: "Lieux dits",
    author: "Michel Tournier",
    year: 2002,
    publisher: "Gallimard",
    imageLinkS: "http://images.amazon.com/images/P/2070423204.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/2070423204.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/2070423204.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345260317",
    title: "The Dragons of Eden: Speculations on the Evolution of Human Intelligence",
    author: "Carl Sagan",
    year: 1978,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345260317.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345260317.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345260317.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0394743741",
    title: "The yawning heights",
    author: "Aleksandr Zinoviev",
    year: 1980,
    publisher: "Random House",
    imageLinkS: "http://images.amazon.com/images/P/0394743741.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0394743741.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0394743741.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "042511774X",
    title: "Breathing Lessons",
    author: "Anne Tyler",
    year: 1994,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/042511774X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/042511774X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/042511774X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0804106304",
    title: "The Joy Luck Club",
    author: "Amy Tan",
    year: 1994,
    publisher: "Prentice Hall (K-12)",
    imageLinkS: "http://images.amazon.com/images/P/0804106304.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0804106304.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0804106304.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1853262404,
    title: "Heart of Darkness (Wordsworth Collection)",
    author: "Joseph Conrad",
    year: 1998,
    publisher: "NTC/Contemporary Publishing Company",
    imageLinkS: "http://images.amazon.com/images/P/1853262404.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1853262404.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1853262404.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312970242",
    title: "The Angel Is Near",
    author: "Deepak Chopra",
    year: 2000,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312970242.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312970242.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312970242.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1853260053,
    title: "Tess of the D'Urbervilles (Wordsworth Classics)",
    author: "Thomas Hardy",
    year: 1997,
    publisher: "NTC/Contemporary Publishing Company",
    imageLinkS: "http://images.amazon.com/images/P/1853260053.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1853260053.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1853260053.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1414035004,
    title: "The Adventures of Drew and Ellie: The Magical Dress",
    author: "Charles Noland",
    year: 2003,
    publisher: "1stBooks Library",
    imageLinkS: "http://images.amazon.com/images/P/1414035004.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1414035004.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1414035004.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060938412",
    title: "The Accidental Virgin",
    author: "Valerie Frankel",
    year: 2003,
    publisher: "Avon Trade",
    imageLinkS: "http://images.amazon.com/images/P/0060938412.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060938412.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060938412.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0140067477",
    title: "The Tao of Pooh",
    author: "Benjamin Hoff",
    year: 1983,
    publisher: "Penguin Books",
    imageLinkS: "http://images.amazon.com/images/P/0140067477.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0140067477.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0140067477.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345465083",
    title: "Seabiscuit",
    author: "LAURA HILLENBRAND",
    year: 2003,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345465083.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345465083.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345465083.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451625889",
    title: "The Prince",
    author: "Niccolo Machiavelli",
    year: 1952,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451625889.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451625889.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451625889.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1558531025,
    title: "Life's Little Instruction Book (Life's Little Instruction Books (Paperback))",
    author: "H. Jackson Brown",
    year: 1991,
    publisher: "Thomas Nelson",
    imageLinkS: "http://images.amazon.com/images/P/1558531025.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1558531025.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1558531025.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0441783589",
    title: "Starship Troopers",
    author: "Robert A. Heinlein",
    year: 1987,
    publisher: "Ace Books",
    imageLinkS: "http://images.amazon.com/images/P/0441783589.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0441783589.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0441783589.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0394895894",
    title: "The Ruby in the Smoke (Sally Lockhart Trilogy, Book 1)",
    author: "PHILIP PULLMAN",
    year: 1988,
    publisher: "Laurel Leaf",
    imageLinkS: "http://images.amazon.com/images/P/0394895894.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0394895894.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0394895894.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1569871213,
    title: "Black Beauty (Illustrated Classics)",
    author: "Anna Sewell",
    year: 1995,
    publisher: "Landoll",
    imageLinkS: "http://images.amazon.com/images/P/1569871213.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1569871213.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1569871213.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375410538",
    title: "Anil's Ghost",
    author: "MICHAEL ONDAATJE",
    year: 2000,
    publisher: "Knopf",
    imageLinkS: "http://images.amazon.com/images/P/0375410538.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375410538.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375410538.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553802488",
    title: "The Face",
    author: "DEAN KOONTZ",
    year: 2003,
    publisher: "Bantam",
    imageLinkS: "http://images.amazon.com/images/P/0553802488.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553802488.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553802488.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0966986105",
    title: "Prescription for Terror",
    author: "Sandra Levy Ceren",
    year: 1999,
    publisher: "Andrew Scott Publishers",
    imageLinkS: "http://images.amazon.com/images/P/0966986105.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0966986105.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0966986105.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "087113375X",
    title: "Modern Manners: An Etiquette Book for Rude People",
    author: "P.J. O'Rourke",
    year: 1990,
    publisher: "Atlantic Monthly Press",
    imageLinkS: "http://images.amazon.com/images/P/087113375X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/087113375X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/087113375X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0340767936",
    title: "Turning Thirty",
    author: "Mike Gayle",
    year: 2000,
    publisher: "Hodder &amp; Stoughton General Division",
    imageLinkS: "http://images.amazon.com/images/P/0340767936.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0340767936.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0340767936.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0743403843",
    title: "Decipher",
    author: "Stel Pavlou",
    year: 2002,
    publisher: "Simon &amp; Schuster (Trade Division)",
    imageLinkS: "http://images.amazon.com/images/P/0743403843.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0743403843.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0743403843.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060930365",
    title: "My First Cousin Once Removed: Money, Madness, and the Family of Robert Lowell",
    author: "Sarah Payne Stuart",
    year: 1999,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060930365.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060930365.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060930365.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060177586",
    title: "Standing Firm: A Vice-Presidential Memoir",
    author: "Dan Quayle",
    year: 1994,
    publisher: "Harpercollins",
    imageLinkS: "http://images.amazon.com/images/P/0060177586.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060177586.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060177586.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0071416331",
    title: "Team Bush : Leadership Lessons from the Bush White House",
    author: "Donald F. Kettl",
    year: 2003,
    publisher: "McGraw-Hill",
    imageLinkS: "http://images.amazon.com/images/P/0071416331.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0071416331.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0071416331.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375509038",
    title: "The Right Man : The Surprise Presidency of George W. Bush",
    author: "DAVID FRUM",
    year: 2003,
    publisher: "Random House",
    imageLinkS: "http://images.amazon.com/images/P/0375509038.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375509038.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375509038.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553062042",
    title: "Daybreakers Louis Lamour Collection",
    author: "Louis Lamour",
    year: 1981,
    publisher: "Bantam Doubleday Dell",
    imageLinkS: "http://images.amazon.com/images/P/0553062042.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553062042.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553062042.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316769487",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1991,
    publisher: "Little, Brown",
    imageLinkS: "http://images.amazon.com/images/P/0316769487.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316769487.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316769487.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8445071408,
    title: "El Senor De Los Anillos: LA Comunidad Del Anillo (Lord of the Rings (Spanish))",
    author: "J. R. R. Tolkien",
    year: 2001,
    publisher: "Minotauro",
    imageLinkS: "http://images.amazon.com/images/P/8445071408.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8445071408.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8445071408.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8445071769,
    title: "El Senor De Los Anillos: Las DOS Torres (Lord of the Rings (Paperback))",
    author: "J. R. R. Tolkien",
    year: 2001,
    publisher: "Minotauro",
    imageLinkS: "http://images.amazon.com/images/P/8445071769.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8445071769.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8445071769.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8445071777,
    title: "El Senor De Los Anillos: El Retorno Del Rey (Tolkien, J. R. R. Lord of the Rings. 3.)",
    author: "J. R. R. Tolkien",
    year: 2001,
    publisher: "Distribooks",
    imageLinkS: "http://images.amazon.com/images/P/8445071777.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8445071777.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8445071777.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679429220",
    title: "Midnight in the Garden of Good and Evil: A Savannah Story",
    author: "John Berendt",
    year: 1994,
    publisher: "Random House",
    imageLinkS: "http://images.amazon.com/images/P/0679429220.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679429220.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679429220.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671867156",
    title: "Pretend You Don't See Her",
    author: "Mary Higgins Clark",
    year: 1998,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671867156.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671867156.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671867156.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312252617",
    title: "Fast Women",
    author: "Jennifer Crusie",
    year: 2001,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312252617.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312252617.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312252617.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312261594",
    title: "Female Intelligence",
    author: "Jane Heller",
    year: 2001,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312261594.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312261594.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312261594.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316748641",
    title: "Pasquale's Nose: Idle Days in an Italian Town",
    author: "Michael Rips",
    year: 2002,
    publisher: "Back Bay Books",
    imageLinkS: "http://images.amazon.com/images/P/0316748641.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316748641.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316748641.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316973742",
    title: "The Gospel of Judas: A Novel",
    author: "Simon Mawer",
    year: 2002,
    publisher: "Back Bay Books",
    imageLinkS: "http://images.amazon.com/images/P/0316973742.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316973742.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316973742.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385235941",
    title: "Prize Stories, 1987: The O'Henry Awards",
    author: "William Abrahams",
    year: 1987,
    publisher: "Doubleday Books",
    imageLinkS: "http://images.amazon.com/images/P/0385235941.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385235941.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385235941.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446677450",
    title: "Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!",
    author: "Robert T. Kiyosaki",
    year: 2000,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446677450.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446677450.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446677450.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451166892",
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    year: 1996,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451166892.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451166892.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451166892.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553347594",
    title: "McDonald's: Behind the Arches",
    author: "John F. Love",
    year: 1995,
    publisher: "Bantam",
    imageLinkS: "http://images.amazon.com/images/P/0553347594.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553347594.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553347594.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671621009",
    title: "Creating Wealth : Retire in Ten Years Using Allen's Seven Principles of Wealth!",
    author: "Robert G. Allen",
    year: 1986,
    publisher: "Fireside",
    imageLinkS: "http://images.amazon.com/images/P/0671621009.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671621009.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671621009.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "067976397X",
    title: "Corelli's Mandolin : A Novel",
    author: "LOUIS DE BERNIERES",
    year: 1995,
    publisher: "Vintage",
    imageLinkS: "http://images.amazon.com/images/P/067976397X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/067976397X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/067976397X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0684822733",
    title: "Love, Miracles, and Animal Healing : A heartwarming look at the spiritual bond between animals and humans",
    author: "Pam Proctor",
    year: 1996,
    publisher: "Fireside",
    imageLinkS: "http://images.amazon.com/images/P/0684822733.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0684822733.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0684822733.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0786868716",
    title: "The Five People You Meet in Heaven",
    author: "Mitch Albom",
    year: 2003,
    publisher: "Hyperion",
    imageLinkS: "http://images.amazon.com/images/P/0786868716.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0786868716.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0786868716.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8472238822,
    title: "Tu Nombre Escrito En El Agua (La Sonrisa Vertical)",
    author: "Irene Gonzalez Frei",
    year: 2002,
    publisher: "Tusquets",
    imageLinkS: "http://images.amazon.com/images/P/8472238822.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8472238822.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8472238822.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671864769",
    title: "Relics (Star Trek: The Next Generation)",
    author: "Michael Jan Friedman",
    year: 1992,
    publisher: "Star Trek",
    imageLinkS: "http://images.amazon.com/images/P/0671864769.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671864769.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671864769.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671521519",
    title: "Bless The Beasts And Children : Bless The Beasts And Children",
    author: "Glendon Swarthout",
    year: 1995,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671521519.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671521519.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671521519.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440222303",
    title: "The Touch of Your Shadow, the Whisper of Your Name (Babylon 5, Book 5)",
    author: "Neal Barrett Jr.",
    year: 1996,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440222303.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440222303.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440222303.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312953453",
    title: "Blood Oath",
    author: "David Morrell",
    year: 1994,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312953453.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312953453.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312953453.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446608653",
    title: "The Alibi",
    author: "Sandra Brown",
    year: 2000,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446608653.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446608653.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446608653.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446612545",
    title: "The Beach House",
    author: "James Patterson",
    year: 2003,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446612545.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446612545.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446612545.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446612618",
    title: "A Kiss Remembered",
    author: "Sandra Brown",
    year: 2003,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446612618.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446612618.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446612618.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451208080",
    title: "The Short Forever",
    author: "Stuart Woods",
    year: 2003,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451208080.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451208080.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451208080.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553584383",
    title: "Dead Aim",
    author: "IRIS JOHANSEN",
    year: 2004,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553584383.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553584383.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553584383.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671027360",
    title: "Angels &amp; Demons",
    author: "Dan Brown",
    year: 2001,
    publisher: "Pocket Star",
    imageLinkS: "http://images.amazon.com/images/P/0671027360.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671027360.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671027360.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0812575954",
    title: "The Deal",
    author: "Joe Hutsko",
    year: 2000,
    publisher: "Tor Books (Mm)",
    imageLinkS: "http://images.amazon.com/images/P/0812575954.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0812575954.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0812575954.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316735736",
    title: "All He Ever Wanted: A Novel",
    author: "Anita Shreve",
    year: 2004,
    publisher: "Back Bay Books",
    imageLinkS: "http://images.amazon.com/images/P/0316735736.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316735736.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316735736.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0743439740",
    title: "Every Breath You Take : A True Story of Obsession, Revenge, and Murder",
    author: "Ann Rule",
    year: 2002,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0743439740.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0743439740.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0743439740.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345372700",
    title: "If I Ever Get Back to Georgia, I'm Gonna Nail My Feet to the Ground",
    author: "LEWIS GRIZZARD",
    year: 1991,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345372700.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345372700.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345372700.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380619458",
    title: "The Mosquito Coast",
    author: "Paul Theroux",
    year: 1990,
    publisher: "Harper Mass Market Paperbacks (Mm)",
    imageLinkS: "http://images.amazon.com/images/P/0380619458.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380619458.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380619458.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446325805",
    title: "If Love Were Oil, I'd Be About a Quart Low",
    author: "Lewis Grizzard",
    year: 1994,
    publisher: "Warner Books (Mm)",
    imageLinkS: "http://images.amazon.com/images/P/0446325805.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446325805.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446325805.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451406923",
    title: "Goodbye, My Little Ones: The True Story of a Murderous Mother and Five Innocent Victims",
    author: "Charles Hickey",
    year: 1996,
    publisher: "Onyx Books",
    imageLinkS: "http://images.amazon.com/images/P/0451406923.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451406923.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451406923.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671042858",
    title: "The Girl Who Loved Tom Gordon",
    author: "Stephen King",
    year: 2000,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671042858.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671042858.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671042858.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0743249992",
    title: "Bringing Down the House: The Inside Story of Six M.I.T. Students Who Took Vegas for Millions",
    author: "Ben Mezrich",
    year: 2003,
    publisher: "Free Press",
    imageLinkS: "http://images.amazon.com/images/P/0743249992.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0743249992.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0743249992.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0840734530",
    title: "The Oneprince (The Redaemian Chronicles, Book 1)",
    author: "Bill Hand",
    year: 1992,
    publisher: "Thomas Nelson Inc",
    imageLinkS: "http://images.amazon.com/images/P/0840734530.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0840734530.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0840734530.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0425184226",
    title: "The Sum of All Fears",
    author: "Tom Clancy",
    year: 2002,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/0425184226.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0425184226.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0425184226.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375500766",
    title: "Care Packages : Letters to Christopher Reeve from Strangers and Other Friends",
    author: "DANA REEVE",
    year: 1999,
    publisher: "Random House",
    imageLinkS: "http://images.amazon.com/images/P/0375500766.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375500766.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375500766.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 9724119378,
    title: "O Deus Das Pequenas Coisas",
    author: "Roy",
    year: 1998,
    publisher: "Edicoes Asa",
    imageLinkS: "http://images.amazon.com/images/P/9724119378.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/9724119378.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/9724119378.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451205197",
    title: "Lady in Green/Minor Indiscretions (Signet Regency Romance)",
    author: "Barbara Metzger",
    year: 2002,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451205197.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451205197.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451205197.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060929790",
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1998,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060929790.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060929790.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060929790.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060976845",
    title: "Little Altars Everywhere: A Novel",
    author: "Rebecca Wells",
    year: 1996,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060976845.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060976845.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060976845.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061099325",
    title: "Coyote Waits (Joe Leaphorn/Jim Chee Novels)",
    author: "Tony Hillerman",
    year: 1992,
    publisher: "HarperTorch",
    imageLinkS: "http://images.amazon.com/images/P/0061099325.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061099325.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061099325.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671004573",
    title: "Before I Say Good-Bye",
    author: "Mary Higgins Clark",
    year: 2001,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671004573.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671004573.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671004573.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446601640",
    title: "Slow Waltz in Cedar Bend",
    author: "Robert James Waller",
    year: 1994,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446601640.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446601640.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446601640.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0330484516",
    title: "Twenty Minute Retreats: Revive Your Spirits in Just Minutes a Day (A Pan Self-discovery Title)",
    author: "Rachel Harris",
    year: 2001,
    publisher: "Pan Macmillan",
    imageLinkS: "http://images.amazon.com/images/P/0330484516.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0330484516.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0330484516.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "038572179X",
    title: "Atonement : A Novel",
    author: "IAN MCEWAN",
    year: 2003,
    publisher: "Anchor",
    imageLinkS: "http://images.amazon.com/images/P/038572179X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/038572179X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/038572179X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0393020371",
    title: "Next: The Future Just Happened",
    author: "Michael Lewis",
    year: 2001,
    publisher: "W.W. Norton &amp; Company",
    imageLinkS: "http://images.amazon.com/images/P/0393020371.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0393020371.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0393020371.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1900850303,
    title: "The Angelic Darkness",
    author: "Richard Zimler",
    year: 1999,
    publisher: "Arcadia Books",
    imageLinkS: "http://images.amazon.com/images/P/1900850303.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1900850303.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1900850303.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1903019699,
    title: "The Soulbane Stratagem",
    author: "Norman Jetmundsen",
    year: 2000,
    publisher: "John Hunt Publishing, Ltd.",
    imageLinkS: "http://images.amazon.com/images/P/1903019699.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1903019699.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1903019699.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345425294",
    title: "Gangster",
    author: "Lorenzo Carcaterra",
    year: 2002,
    publisher: "Fawcett Books",
    imageLinkS: "http://images.amazon.com/images/P/0345425294.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345425294.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345425294.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451410319",
    title: "Hush",
    author: "Anne Frasier",
    year: 2002,
    publisher: "Onyx Books",
    imageLinkS: "http://images.amazon.com/images/P/0451410319.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451410319.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451410319.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553583468",
    title: "Whisper of Evil (Hooper, Kay. Evil Trilogy.)",
    author: "Kay Hooper",
    year: 2002,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553583468.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553583468.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553583468.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8420639133,
    title: "Temor y Temblor",
    author: "Soren Kierkegaard",
    year: 2001,
    publisher: "Alianza",
    imageLinkS: "http://images.amazon.com/images/P/8420639133.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8420639133.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8420639133.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 8476409419,
    title: "Estudios sobre el amor",
    author: "Jose Ortega Y Gaset",
    year: 2001,
    publisher: "Downtown Book Center",
    imageLinkS: "http://images.amazon.com/images/P/8476409419.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/8476409419.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/8476409419.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380778556",
    title: "Rebecca",
    author: "Daphne Du Maurier",
    year: 1994,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/0380778556.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380778556.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380778556.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451525221",
    title: "Scarlet Letter",
    author: "Nathaniel Hawthorne",
    year: 1993,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451525221.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451525221.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451525221.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0002740230",
    title: "Keep It Simple: And Get More Out of Life",
    author: "Nick Page",
    year: 1999,
    publisher: "Trafalgar Square",
    imageLinkS: "http://images.amazon.com/images/P/0002740230.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0002740230.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0002740230.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385336772",
    title: "Diary of a Mad Mom-To-Be",
    author: "Laura Wolf",
    year: 2003,
    publisher: "Delta",
    imageLinkS: "http://images.amazon.com/images/P/0385336772.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385336772.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385336772.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440949424",
    title: "Locked in Time (Laurel Leaf Books)",
    author: "LOIS DUNCAN",
    year: 1986,
    publisher: "Laure Leaf",
    imageLinkS: "http://images.amazon.com/images/P/0440949424.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440949424.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440949424.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0505524996",
    title: "Contact",
    author: "Susan Grant",
    year: 2002,
    publisher: "Love Spell",
    imageLinkS: "http://images.amazon.com/images/P/0505524996.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0505524996.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0505524996.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0140252800",
    title: "The Brimstone Wedding",
    author: "Barbara Vine",
    year: 1997,
    publisher: "Penguin Books Ltd",
    imageLinkS: "http://images.amazon.com/images/P/0140252800.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0140252800.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0140252800.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451452755",
    title: "The Catswold Portal",
    author: "Shirley Rousseau Murphy",
    year: 1993,
    publisher: "Roc",
    imageLinkS: "http://images.amazon.com/images/P/0451452755.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451452755.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451452755.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0812575482",
    title: "Through Wolf's Eyes (Wolf)",
    author: "Jane Lindskold",
    year: 2002,
    publisher: "Tor Fantasy",
    imageLinkS: "http://images.amazon.com/images/P/0812575482.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0812575482.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0812575482.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "044651747X",
    title: "Puerto Vallarta Squeeze",
    author: "Robert James Waller",
    year: 1995,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/044651747X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/044651747X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/044651747X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060801263",
    title: "Tree Grows In Brooklyn",
    author: "Betty Smith",
    year: 1988,
    publisher: "Harpercollins Publisher",
    imageLinkS: "http://images.amazon.com/images/P/0060801263.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060801263.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060801263.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061030147",
    title: "Cybill Disobedience: How I Survived Beauty Pageants, Elvis, Sex, Bruce Willis, Lies, Marriage, Motherhood, Hollywood, and the Irrepressible Urge to Say What I Think",
    author: "Cybill Shepherd",
    year: 2001,
    publisher: "Avon Books",
    imageLinkS: "http://images.amazon.com/images/P/0061030147.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061030147.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061030147.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0140250964",
    title: "Snow Angels",
    author: "Stewart O'Nan",
    year: 1995,
    publisher: "Penguin Books",
    imageLinkS: "http://images.amazon.com/images/P/0140250964.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0140250964.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0140250964.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446527165",
    title: "Wish You Well",
    author: "David Baldacci",
    year: 2000,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446527165.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446527165.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446527165.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671461494",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1982,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671461494.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671461494.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671461494.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385337639",
    title: "Crow Lake (Today Show Book Club #7)",
    author: "Mary Lawson",
    year: 2003,
    publisher: "Delta",
    imageLinkS: "http://images.amazon.com/images/P/0385337639.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385337639.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385337639.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "039575514X",
    title: "My Antonia",
    author: "Willa Cather",
    year: 1995,
    publisher: "Mariner Books",
    imageLinkS: "http://images.amazon.com/images/P/039575514X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/039575514X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/039575514X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451206673",
    title: "Pen Pals",
    author: "Olivia Goldsmith",
    year: 2002,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451206673.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451206673.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451206673.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0330332775",
    title: "Bridget Jones's Diary",
    author: "Helen Fielding",
    year: 1997,
    publisher: "Picador (UK)",
    imageLinkS: "http://images.amazon.com/images/P/0330332775.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0330332775.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0330332775.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0486284735",
    title: "Pride and Prejudice (Dover Thrift Editions)",
    author: "Jane Austen",
    year: 1995,
    publisher: "Dover Publications",
    imageLinkS: "http://images.amazon.com/images/P/0486284735.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0486284735.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0486284735.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671021745",
    title: "EYE ON CRIME: HARDY BOYS #153",
    author: "Franklin W. Dixon",
    year: 1998,
    publisher: "Aladdin",
    imageLinkS: "http://images.amazon.com/images/P/0671021745.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671021745.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671021745.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671047612",
    title: "Skin And Bones",
    author: "Franklin W. Dixon",
    year: 2000,
    publisher: "Aladdin",
    imageLinkS: "http://images.amazon.com/images/P/0671047612.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671047612.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671047612.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671504282",
    title: "LAW OF THE JUNGLE (HARDY BOYS CASE FILE 105) : LAW OF THE JUNGLE (Hardy Boys, The)",
    author: "Franklin W. Dixon",
    year: 1995,
    publisher: "Simon Pulse",
    imageLinkS: "http://images.amazon.com/images/P/0671504282.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671504282.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671504282.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0399138684",
    title: "The Cat Who Came to Breakfast (Cat Who... (Hardcover))",
    author: "Lilian Jackson Braun",
    year: 1994,
    publisher: "Putnam Pub Group",
    imageLinkS: "http://images.amazon.com/images/P/0399138684.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0399138684.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0399138684.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0785263292",
    title: "If Singleness Is a Gift, What's the Return Policy?",
    author: "Holly Virden",
    year: 2003,
    publisher: "Nelson Books",
    imageLinkS: "http://images.amazon.com/images/P/0785263292.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0785263292.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0785263292.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0830714014",
    title: "Always Daddy's Girl: Understanding Your Father's Impact on Who You Are",
    author: "H. Norman Wright",
    year: 1989,
    publisher: "Regal Books",
    imageLinkS: "http://images.amazon.com/images/P/0830714014.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0830714014.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0830714014.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345354931",
    title: "Night Mare (Xanth Novels (Paperback))",
    author: "Piers Anthony",
    year: 1990,
    publisher: "Del Rey Books",
    imageLinkS: "http://images.amazon.com/images/P/0345354931.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345354931.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345354931.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553278223",
    title: "The Martian Chronicles",
    author: "RAY BRADBURY",
    year: 1984,
    publisher: "Spectra",
    imageLinkS: "http://images.amazon.com/images/P/0553278223.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553278223.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553278223.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3150000335,
    title: "Kabale Und Liebe",
    author: "Schiller",
    year: 0,
    publisher: "Philipp Reclam, Jun Verlag GmbH",
    imageLinkS: "http://images.amazon.com/images/P/3150000335.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3150000335.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3150000335.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257203659,
    title: "Der illustrierte Mann. Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 2002,
    publisher: "Diogenes",
    imageLinkS: "http://images.amazon.com/images/P/3257203659.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257203659.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257203659.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257207522,
    title: "Der K?¶nig in Gelb.",
    author: "Raymond Chandler",
    year: 1980,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257207522.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257207522.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257207522.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257208626,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: 1994,
    publisher: "Distribooks Inc",
    imageLinkS: "http://images.amazon.com/images/P/3257208626.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257208626.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257208626.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257208634,
    title: "Die Mars- Chroniken. Roman in Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 1981,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257208634.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257208634.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257208634.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257208669,
    title: "Das B?¶se kommt auf leisen Sohlen.",
    author: "Ray Bradbury",
    year: 2003,
    publisher: "Diogenes",
    imageLinkS: "http://images.amazon.com/images/P/3257208669.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257208669.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257208669.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257210450,
    title: "L?¶wenzahnwein. Roman.",
    author: "Ray Bradbury",
    year: 1999,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257210450.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257210450.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257210450.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257212054,
    title: "Das Kind von morgen. Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 2000,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257212054.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257212054.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257212054.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257212429,
    title: "Die Mechanismen der Freude. Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 2000,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257212429.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257212429.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257212429.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257214154,
    title: "Familientreffen. Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 2000,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257214154.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257214154.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257214154.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257216416,
    title: "Der Tod kommt schnell in Mexico. Erz?¤hlungen.",
    author: "Ray Bradbury",
    year: 1988,
    publisher: "Diogenes Verlag",
    imageLinkS: "http://images.amazon.com/images/P/3257216416.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257216416.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257216416.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3257233051,
    title: "Veronika Deschliesst Zu Sterben / Vernika Decides to Die",
    author: "Paolo Coelho",
    year: 2002,
    publisher: "Distribooks",
    imageLinkS: "http://images.amazon.com/images/P/3257233051.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3257233051.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3257233051.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "342311360X",
    title: "Die Liebe in Den Zelten",
    author: "Gabriel Garcia Marquez",
    year: 0,
    publisher: "Deutscher Taschenbuch Verlag (DTV)",
    imageLinkS: "http://images.amazon.com/images/P/342311360X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/342311360X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/342311360X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3423116714,
    title: "Die Klone der Joanna May. Roman.",
    author: "Fay Weldon",
    year: 1993,
    publisher: "Dtv",
    imageLinkS: "http://images.amazon.com/images/P/3423116714.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3423116714.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3423116714.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3423241489,
    title: "Ist mein Hintern wirklich so dick? Tagebuch einer empfindsamen Frau.",
    author: "Arabella Weir",
    year: 1998,
    publisher: "Dtv",
    imageLinkS: "http://images.amazon.com/images/P/3423241489.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3423241489.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3423241489.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3426605686,
    title: "Haifischfrauen.",
    author: "Kiana Davenport",
    year: 1996,
    publisher: "Droemersche Verlagsanstalt Th. Knaur Nachf., GmbH &amp; Co.",
    imageLinkS: "http://images.amazon.com/images/P/3426605686.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3426605686.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3426605686.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3453212150,
    title: "Die Cappuccino- Jahre. Aus dem Tagebuch des Adrian Mole.",
    author: "Sue Townsend",
    year: 2002,
    publisher: "Heyne",
    imageLinkS: "http://images.amazon.com/images/P/3453212150.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3453212150.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3453212150.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3462021095,
    title: "Schwarzer Tee mit drei Stück Zucker",
    author: "Renan Demirkan",
    year: 1991,
    publisher: "Kiepenheuer &amp; Witsch",
    imageLinkS: "http://images.amazon.com/images/P/3462021095.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3462021095.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3462021095.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3492045642,
    title: "Quersch?¼sse - Downsize This!",
    author: "Michael Moore",
    year: 2003,
    publisher: "Piper",
    imageLinkS: "http://images.amazon.com/images/P/3492045642.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3492045642.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3492045642.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3498020862,
    title: "Die Korrekturen.",
    author: "Jonathan Franzen",
    year: 2002,
    publisher: "Rowohlt, Reinbek",
    imageLinkS: "http://images.amazon.com/images/P/3498020862.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3498020862.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3498020862.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3499110695,
    title: "Neun Erz?¤hlungen.",
    author: "Jerome D. Salinger",
    year: 1968,
    publisher: "Rowohlt Tb.",
    imageLinkS: "http://images.amazon.com/images/P/3499110695.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3499110695.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3499110695.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3499151502,
    title: "Hebt den Dachbalken hoch, Zimmerleute / Seymour wird vorgestellt.",
    author: "Jerome D. Salinger",
    year: 1998,
    publisher: "Rowohlt Tb.",
    imageLinkS: "http://images.amazon.com/images/P/3499151502.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3499151502.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3499151502.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3518111000,
    title: "Ulysses (??bersetzg. Wollschl?¤ger). ( Neue Folge, 100).",
    author: "James Joyce",
    year: 1981,
    publisher: "Suhrkamp",
    imageLinkS: "http://images.amazon.com/images/P/3518111000.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3518111000.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3518111000.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3548254268,
    title: "Eine ganz normale Aff?¤re.",
    author: "Joanna Trollope",
    year: 2002,
    publisher: "Ullstein Tb",
    imageLinkS: "http://images.amazon.com/images/P/3548254268.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3548254268.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3548254268.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3570300099,
    title: "Das Intimleben des Adrian Mole, 13 3/4 Jahre. cbt. ( Ab 14 J.).",
    author: "Sue Townsend",
    year: 2002,
    publisher: "Bertelsmann, M?¼nchen",
    imageLinkS: "http://images.amazon.com/images/P/3570300099.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3570300099.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3570300099.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 3596292646,
    title: "Das Buch der l?¤cherlichen Liebe.",
    author: "Milan Kundera",
    year: 2000,
    publisher: "Fischer (Tb.), Frankfurt",
    imageLinkS: "http://images.amazon.com/images/P/3596292646.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/3596292646.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/3596292646.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060977493",
    title: "The God of Small Things",
    author: "Arundhati Roy",
    year: 1998,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060977493.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060977493.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060977493.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312872682",
    title: "The James Dean Affair: A Neil Gulliver &amp; Stevie Marriner Novel",
    author: "Robert S. Levinson",
    year: 2000,
    publisher: "St Martins Pr",
    imageLinkS: "http://images.amazon.com/images/P/0312872682.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312872682.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312872682.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316602906",
    title: "The Big Bad Wolf: A Novel",
    author: "James Patterson",
    year: 2003,
    publisher: "Little, Brown",
    imageLinkS: "http://images.amazon.com/images/P/0316602906.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316602906.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316602906.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316693006",
    title: "Four Blind Mice",
    author: "James Patterson",
    year: 2002,
    publisher: "Little, Brown",
    imageLinkS: "http://images.amazon.com/images/P/0316693006.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316693006.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316693006.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345311396",
    title: "Private Screening",
    author: "Richard North Patterson",
    year: 1994,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345311396.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345311396.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345311396.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345378490",
    title: "Congo",
    author: "Michael Crichton",
    year: 1995,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345378490.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345378490.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345378490.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345404793",
    title: "Protect and Defend",
    author: "Richard North Patterson",
    year: 2001,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345404793.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345404793.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345404793.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345433173",
    title: "The Tall Pine Polka",
    author: "Lorna Landvik",
    year: 1999,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345433173.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345433173.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345433173.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375400117",
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    year: 1997,
    publisher: "Alfred A. Knopf",
    imageLinkS: "http://images.amazon.com/images/P/0375400117.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375400117.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375400117.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375705856",
    title: "Plainsong (Vintage Contemporaries)",
    author: "KENT HARUF",
    year: 2000,
    publisher: "Vintage",
    imageLinkS: "http://images.amazon.com/images/P/0375705856.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375705856.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375705856.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380717018",
    title: "Body of Evidence (Kay Scarpetta Mysteries (Paperback))",
    author: "Patricia D. Cornwell",
    year: 1992,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/0380717018.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380717018.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380717018.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380718332",
    title: "All That Remains (Kay Scarpetta Mysteries (Paperback))",
    author: "Patricia D. Cornwell",
    year: 1993,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/0380718332.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380718332.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380718332.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380754509",
    title: "The Case of the Lost Look-Alike (An Avon Camelot Book)",
    author: "Carol J. Farley",
    year: 1988,
    publisher: "Avon Books",
    imageLinkS: "http://images.amazon.com/images/P/0380754509.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380754509.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380754509.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "038076654X",
    title: "Petals on the River",
    author: "Kathleen E. Woodiwiss",
    year: 1997,
    publisher: "Avon Trade",
    imageLinkS: "http://images.amazon.com/images/P/038076654X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/038076654X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/038076654X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380807866",
    title: "The Elusive Flame",
    author: "Kathleen E. Woodiwiss",
    year: 1999,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/0380807866.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380807866.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380807866.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385316895",
    title: "Legacy of Silence",
    author: "Belva Plain",
    year: 1998,
    publisher: "Bantam Dell Pub Group",
    imageLinkS: "http://images.amazon.com/images/P/0385316895.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385316895.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385316895.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385497466",
    title: "The Brethren",
    author: "JOHN GRISHAM",
    year: 2000,
    publisher: "Doubleday",
    imageLinkS: "http://images.amazon.com/images/P/0385497466.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385497466.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385497466.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385508042",
    title: "The King of Torts",
    author: "John Grisham",
    year: 2003,
    publisher: "Doubleday Books",
    imageLinkS: "http://images.amazon.com/images/P/0385508042.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385508042.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385508042.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385509456",
    title: "The Curious Incident of the Dog in the Night-Time : A Novel",
    author: "MARK HADDON",
    year: 2003,
    publisher: "Doubleday",
    imageLinkS: "http://images.amazon.com/images/P/0385509456.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385509456.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385509456.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385511612",
    title: "Bleachers",
    author: "John Grisham",
    year: 2003,
    publisher: "Doubleday",
    imageLinkS: "http://images.amazon.com/images/P/0385511612.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385511612.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385511612.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385730586",
    title: "Sisterhood of the Traveling Pants",
    author: "ANN BRASHARES",
    year: 2003,
    publisher: "Delacorte Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/0385730586.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385730586.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385730586.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0425164403",
    title: "Only Love (Magical Love)",
    author: "Erich Segal",
    year: 1998,
    publisher: "Berkley Publishing Group",
    imageLinkS: "http://images.amazon.com/images/P/0425164403.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0425164403.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0425164403.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440234964",
    title: "All or Nothing (Wheeler Large Print Books)",
    author: "Elizabeth Adler",
    year: 2000,
    publisher: "Island",
    imageLinkS: "http://images.amazon.com/images/P/0440234964.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440234964.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440234964.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446605484",
    title: "Roses Are Red (Alex Cross Novels)",
    author: "James Patterson",
    year: 2001,
    publisher: "Warner Vision",
    imageLinkS: "http://images.amazon.com/images/P/0446605484.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446605484.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446605484.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0446610399",
    title: "The Rescue",
    author: "Nicholas Sparks",
    year: 2001,
    publisher: "Warner Books",
    imageLinkS: "http://images.amazon.com/images/P/0446610399.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0446610399.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0446610399.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0449006522",
    title: "Manhattan Hunt Club",
    author: "JOHN SAUL",
    year: 2002,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0449006522.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0449006522.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0449006522.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0449911004",
    title: "Patty Jane's House of Curl (Ballantine Reader's Circle)",
    author: "LORNA LANDVIK",
    year: 1996,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0449911004.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0449911004.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0449911004.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451162072",
    title: "Pet Sematary",
    author: "Stephen King",
    year: 1994,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451162072.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451162072.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451162072.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451186648",
    title: "Silent Snow",
    author: "Steve Thayer",
    year: 2000,
    publisher: "Signet Book",
    imageLinkS: "http://images.amazon.com/images/P/0451186648.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451186648.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451186648.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0452282152",
    title: "Girl with a Pearl Earring",
    author: "Tracy Chevalier",
    year: 2001,
    publisher: "Plume Books",
    imageLinkS: "http://images.amazon.com/images/P/0452282152.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0452282152.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0452282152.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "051513290X",
    title: "Summer of Storms",
    author: "Judith Kelman",
    year: 2002,
    publisher: "Jove Books",
    imageLinkS: "http://images.amazon.com/images/P/051513290X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/051513290X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/051513290X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553580388",
    title: "The Patient",
    author: "Michael Palmer",
    year: 2001,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553580388.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553580388.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553580388.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0590598848",
    title: "Demona's Revenge (Gargoyles, No. 2)",
    author: "Francine Hughes",
    year: 1995,
    publisher: "Scholastic",
    imageLinkS: "http://images.amazon.com/images/P/0590598848.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0590598848.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0590598848.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0590629719",
    title: "Clifford's Sports Day",
    author: "Norman Bridwell",
    year: 1996,
    publisher: "Scholastic",
    imageLinkS: "http://images.amazon.com/images/P/0590629719.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0590629719.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0590629719.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671023616",
    title: "Postmortem (Kay Scarpetta Mysteries (Paperback))",
    author: "Patricia Cornwell",
    year: 1998,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671023616.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671023616.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671023616.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671027387",
    title: "Deception Point",
    author: "Dan Brown",
    year: 2002,
    publisher: "Pocket",
    imageLinkS: "http://images.amazon.com/images/P/0671027387.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671027387.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671027387.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0684848783",
    title: "Tis : A Memoir",
    author: "Frank McCourt",
    year: 1999,
    publisher: "Scribner",
    imageLinkS: "http://images.amazon.com/images/P/0684848783.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0684848783.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0684848783.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0743486226",
    title: "Angels &amp; Demons",
    author: "Dan Brown",
    year: 2003,
    publisher: "Atria",
    imageLinkS: "http://images.amazon.com/images/P/0743486226.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0743486226.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0743486226.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0786863986",
    title: "A Monk Swimming",
    author: "Malachy McCourt",
    year: 1998,
    publisher: "Hyperion",
    imageLinkS: "http://images.amazon.com/images/P/0786863986.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0786863986.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0786863986.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0803251718",
    title: "Crazy Horse",
    author: "Mari Sandoz",
    year: 1961,
    publisher: "University of Nebraska Press",
    imageLinkS: "http://images.amazon.com/images/P/0803251718.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0803251718.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0803251718.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0804117934",
    title: "The Silent Cry (William Monk Novels (Paperback))",
    author: "Anne Perry",
    year: 1998,
    publisher: "Ivy Books",
    imageLinkS: "http://images.amazon.com/images/P/0804117934.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0804117934.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0804117934.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "140003180X",
    title: "The Kalahari Typing School for Men (No. 1 Ladies' Detective Agency)",
    author: "ALEXANDER MCCALL SMITH",
    year: 2004,
    publisher: "Anchor",
    imageLinkS: "http://images.amazon.com/images/P/140003180X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/140003180X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/140003180X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "155874262X",
    title: "Chicken Soup for the Soul (Chicken Soup for the Soul)",
    author: "Jack Canfield",
    year: 1993,
    publisher: "Health Communications",
    imageLinkS: "http://images.amazon.com/images/P/155874262X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/155874262X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/155874262X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060987103",
    title: "Wicked: The Life and Times of the Wicked Witch of the West",
    author: "Gregory Maguire",
    year: 1996,
    publisher: "Regan Books",
    imageLinkS: "http://images.amazon.com/images/P/0060987103.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060987103.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060987103.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0151008116",
    title: "Life of Pi",
    author: "Yann Martel",
    year: 2002,
    publisher: "Harcourt",
    imageLinkS: "http://images.amazon.com/images/P/0151008116.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0151008116.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0151008116.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375704965",
    title: "A Judgement in Stone",
    author: "Ruth Rendell",
    year: 2000,
    publisher: "Vintage Books USA",
    imageLinkS: "http://images.amazon.com/images/P/0375704965.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375704965.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375704965.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0525947647",
    title: "Lies and the Lying Liars Who Tell Them: A Fair and Balanced Look at the Right",
    author: "Al Franken",
    year: 2003,
    publisher: "Dutton Books",
    imageLinkS: "http://images.amazon.com/images/P/0525947647.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0525947647.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0525947647.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0804111359",
    title: "Secret History",
    author: "DONNA TARTT",
    year: 1993,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0804111359.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0804111359.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0804111359.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1558744150,
    title: "Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series (Paper))",
    author: "Jack Canfield",
    year: 1996,
    publisher: "Health Communications",
    imageLinkS: "http://images.amazon.com/images/P/1558744150.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1558744150.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1558744150.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0435272683",
    title: "Great Expectations (Heinemann Guided Readers)",
    author: "John Milne",
    year: 1995,
    publisher: "Delta Systems",
    imageLinkS: "http://images.amazon.com/images/P/0435272683.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0435272683.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0435272683.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0316782505",
    title: "The Weight of Water",
    author: "Anita Shreve",
    year: 2001,
    publisher: "Little, Brown",
    imageLinkS: "http://images.amazon.com/images/P/0316782505.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0316782505.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0316782505.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "006102063X",
    title: "Moving Pictures (Discworld Novels (Paperback))",
    author: "Terry Pratchett",
    year: 2002,
    publisher: "HarperTorch",
    imageLinkS: "http://images.amazon.com/images/P/006102063X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/006102063X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/006102063X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060013117",
    title: "Night Watch",
    author: "Terry Pratchett",
    year: 2002,
    publisher: "HarperCollins",
    imageLinkS: "http://images.amazon.com/images/P/0060013117.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060013117.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060013117.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060199563",
    title: "Thief of Time",
    author: "Terry Pratchett",
    year: 2001,
    publisher: "HarperCollins Publishers",
    imageLinkS: "http://images.amazon.com/images/P/0060199563.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060199563.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060199563.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "006052779X",
    title: "Charlotte's Web Book and Charm (Charming Classics)",
    author: "E. B. White",
    year: 2003,
    publisher: "HarperFestival",
    imageLinkS: "http://images.amazon.com/images/P/006052779X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/006052779X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/006052779X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060563079",
    title: "Peter Pan: The Original Story (Peter Pan)",
    author: "J. M. Barrie",
    year: 2003,
    publisher: "HarperFestival",
    imageLinkS: "http://images.amazon.com/images/P/0060563079.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060563079.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060563079.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060809027",
    title: "My Friend Flicka",
    author: "Mary O'Hara",
    year: 1988,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060809027.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060809027.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060809027.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061040967",
    title: "The Last Hero : A Discworld Fable (Discworld Novels (Hardcover))",
    author: "Terry Pratchett",
    year: 2001,
    publisher: "HarperCollins",
    imageLinkS: "http://images.amazon.com/images/P/0061040967.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061040967.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061040967.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061050474",
    title: "Jingo: A Discworld Novel (Discworld Series/Terry Pratchett)",
    author: "Terry Pratchett",
    year: 1998,
    publisher: "HarperPrism",
    imageLinkS: "http://images.amazon.com/images/P/0061050474.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061050474.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061050474.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061052515",
    title: "Maskerade: A Novel of Discworld (Pratchett, Terry. Discworld Series (New York, N.Y.).)",
    author: "Terry Pratchett",
    year: 1997,
    publisher: "HarperPrism",
    imageLinkS: "http://images.amazon.com/images/P/0061052515.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061052515.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061052515.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0061052523",
    title: "Interesting Times: A Novel of Discworld",
    author: "Terry Pratchett",
    year: 1997,
    publisher: "Harpercollins",
    imageLinkS: "http://images.amazon.com/images/P/0061052523.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0061052523.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0061052523.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0064472264",
    title: "On the Bright Side, I'm Now the Girlfriend of a Sex God: Further Confessions of Georgia Nicolson",
    author: "Louise Rennison",
    year: 2002,
    publisher: "HarperTempest",
    imageLinkS: "http://images.amazon.com/images/P/0064472264.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0064472264.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0064472264.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0140620664",
    title: "Mansfield Park (Penguin Popular Classics)",
    author: "Jane Austen",
    year: 1994,
    publisher: "Penguin Books Ltd",
    imageLinkS: "http://images.amazon.com/images/P/0140620664.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0140620664.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0140620664.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312148267",
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    year: 1996,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312148267.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312148267.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312148267.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312156960",
    title: "The Winter King: A Novel of Arthur (The Warlord Chronicles: I)",
    author: "Bernard Cornwell",
    year: 1997,
    publisher: "St. Martin's Griffin",
    imageLinkS: "http://images.amazon.com/images/P/0312156960.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312156960.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312156960.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312890044",
    title: "Moonheart (Newford)",
    author: "Charles de Lint",
    year: 1994,
    publisher: "Orb Books",
    imageLinkS: "http://images.amazon.com/images/P/0312890044.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312890044.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312890044.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "034543191X",
    title: "The King of Elfland's Daughter (Del Rey Impact)",
    author: "Edward John Moreton Drax Plunkett Dunsany",
    year: 1999,
    publisher: "Del Rey Books",
    imageLinkS: "http://images.amazon.com/images/P/034543191X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/034543191X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/034543191X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0373836023",
    title: "Powder and Patch",
    author: "Georgette Heyer",
    year: 2004,
    publisher: "Harlequin",
    imageLinkS: "http://images.amazon.com/images/P/0373836023.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0373836023.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0373836023.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385721420",
    title: "Three Junes",
    author: "JULIA GLASS",
    year: 2003,
    publisher: "Anchor",
    imageLinkS: "http://images.amazon.com/images/P/0385721420.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385721420.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385721420.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375751513",
    title: "The Picture of Dorian Gray (Modern Library (Paperback))",
    author: "OSCAR WILDE",
    year: 1998,
    publisher: "Modern Library",
    imageLinkS: "http://images.amazon.com/images/P/0375751513.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375751513.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375751513.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375801677",
    title: "The Iron Giant",
    author: "Ted Hughes",
    year: 1999,
    publisher: "Knopf Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/0375801677.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375801677.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375801677.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375814248",
    title: "James and the Giant Peach",
    author: "ROALD DAHL",
    year: 2002,
    publisher: "Knopf Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/0375814248.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375814248.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375814248.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375823352",
    title: "The Amber Spyglass (His Dark Materials, Book 3)",
    author: "PHILIP PULLMAN",
    year: 2002,
    publisher: "Knopf Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/0375823352.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375823352.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375823352.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "037582345X",
    title: "The Golden Compass (His Dark Materials, Book 1)",
    author: "PHILIP PULLMAN",
    year: 2002,
    publisher: "Knopf Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/037582345X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/037582345X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/037582345X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375823468",
    title: "The Subtle Knife (His Dark Materials, Book 2)",
    author: "PHILIP PULLMAN",
    year: 2002,
    publisher: "Knopf Books for Young Readers",
    imageLinkS: "http://images.amazon.com/images/P/0375823468.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375823468.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375823468.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380730448",
    title: "The Adrian Mole Diaries : The Secret Diary of Adrian Mole, Aged 13 3/4 : The Growing Pains of Adrian Mole",
    author: "Sue Townsend",
    year: 1997,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0380730448.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380730448.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380730448.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380973839",
    title: "Martian Chronicles",
    author: "Ray Bradbury",
    year: 1997,
    publisher: "William Morrow",
    imageLinkS: "http://images.amazon.com/images/P/0380973839.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380973839.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380973839.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0385327773",
    title: "The Great God Pan",
    author: "Donna Jo Napoli",
    year: 2003,
    publisher: "Wendy Lamb Books",
    imageLinkS: "http://images.amazon.com/images/P/0385327773.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0385327773.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0385327773.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0394586239",
    title: "Possession: A Romance",
    author: "A. S. Byatt",
    year: 1990,
    publisher: "Random House Inc",
    imageLinkS: "http://images.amazon.com/images/P/0394586239.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0394586239.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0394586239.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0439510112",
    title: "Born Confused",
    author: "Tanuja Desai Hidier",
    year: 2003,
    publisher: "Push",
    imageLinkS: "http://images.amazon.com/images/P/0439510112.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0439510112.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0439510112.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440241413",
    title: "Confessions of a Shopaholic",
    author: "SOPHIE KINSELLA",
    year: 2003,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440241413.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440241413.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440241413.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451409256",
    title: "Making Minty Malone",
    author: "Isabel Wolff",
    year: 2000,
    publisher: "Onyx Books",
    imageLinkS: "http://images.amazon.com/images/P/0451409256.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451409256.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451409256.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451523415",
    title: "Little Women (Signet Classic)",
    author: "Louisa May Alcott",
    year: 1988,
    publisher: "Signet Classics",
    imageLinkS: "http://images.amazon.com/images/P/0451523415.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451523415.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451523415.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451526279",
    title: "Emma (Signet Classics (Paperback))",
    author: "Jane Austen",
    year: 1996,
    publisher: "Signet Classics",
    imageLinkS: "http://images.amazon.com/images/P/0451526279.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451526279.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451526279.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0451526341",
    title: "Animal Farm",
    author: "George Orwell",
    year: 2004,
    publisher: "Signet",
    imageLinkS: "http://images.amazon.com/images/P/0451526341.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0451526341.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0451526341.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0486415864",
    title: "Great Expectations (Dover Thrift Editions)",
    author: "Charles Dickens",
    year: 2001,
    publisher: "Dover Publications",
    imageLinkS: "http://images.amazon.com/images/P/0486415864.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0486415864.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0486415864.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553280589",
    title: "Eva Luna",
    author: "Isabel Allende",
    year: 1989,
    publisher: "Bantam Books",
    imageLinkS: "http://images.amazon.com/images/P/0553280589.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553280589.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553280589.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0571197639",
    title: "Poisonwood Bible Edition Uk",
    author: "Barbara Kingsolver",
    year: 0,
    publisher: "Faber Faber Inc",
    imageLinkS: "http://images.amazon.com/images/P/0571197639.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0571197639.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0571197639.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0670035262",
    title: "The Green Man : Tales from the Mythic Forest",
    author: "Ellen Datlow",
    year: 2002,
    publisher: "Viking Juvenile",
    imageLinkS: "http://images.amazon.com/images/P/0670035262.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0670035262.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0670035262.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679423079",
    title: "Nicholas Nickleby (Everyman's Library)",
    author: "Charles Dickens",
    year: 1993,
    publisher: "Alfred A. Knopf",
    imageLinkS: "http://images.amazon.com/images/P/0679423079.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679423079.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679423079.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0679751343",
    title: "Angels &amp; Insects : Two Novellas",
    author: "A.S. BYATT",
    year: 1994,
    publisher: "Vintage",
    imageLinkS: "http://images.amazon.com/images/P/0679751343.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0679751343.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0679751343.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0684833395",
    title: "Catch 22",
    author: "Joseph Heller",
    year: 1996,
    publisher: "Simon &amp; Schuster",
    imageLinkS: "http://images.amazon.com/images/P/0684833395.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0684833395.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0684833395.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0743245024",
    title: "The Forsyte Saga : The Man of Property and In Chancery",
    author: "John Galsworthy",
    year: 2002,
    publisher: "Touchstone",
    imageLinkS: "http://images.amazon.com/images/P/0743245024.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0743245024.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0743245024.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0749748001",
    title: "The Enchanted Wood",
    author: "Enid Blyton",
    year: 2002,
    publisher: "Egmont Childrens Books",
    imageLinkS: "http://images.amazon.com/images/P/0749748001.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0749748001.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0749748001.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0749748028",
    title: "The Folk of the Faraway Tree",
    author: "Enid Blyton",
    year: 2002,
    publisher: "Egmont Childrens Books",
    imageLinkS: "http://images.amazon.com/images/P/0749748028.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0749748028.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0749748028.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0963094424",
    title: "Angels and Visitations: A Miscellany",
    author: "Neil Gaiman",
    year: 1993,
    publisher: "Dreamhaven Books",
    imageLinkS: "http://images.amazon.com/images/P/0963094424.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0963094424.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0963094424.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1401201172,
    title: "League of Extraordinary Gentlemen, Vol. 2 (Comic)",
    author: "Alan Moore",
    year: 2003,
    publisher: "DC Comics",
    imageLinkS: "http://images.amazon.com/images/P/1401201172.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1401201172.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1401201172.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1563892278,
    title: "Preludes and Nocturnes (Sandman, Book 1)",
    author: "Neil Gaiman",
    year: 1998,
    publisher: "DC Comics",
    imageLinkS: "http://images.amazon.com/images/P/1563892278.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1563892278.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1563892278.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1563898586,
    title: "The League of Extraordinary Gentlemen, Vol. 1",
    author: "Alan Moore",
    year: 2002,
    publisher: "DC Comics",
    imageLinkS: "http://images.amazon.com/images/P/1563898586.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1563898586.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1563898586.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "156971620X",
    title: "Harlequin Valentine",
    author: "Neil Gaiman",
    year: 2002,
    publisher: "Dark Horse Comics",
    imageLinkS: "http://images.amazon.com/images/P/156971620X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/156971620X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/156971620X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1592571301,
    title: "Alpha Teach Yourself American Sign Language in 24 Hours (Alpha Teach Yourself in 24 Hours)",
    author: "Trudy Suggs",
    year: 2003,
    publisher: "Alpha Books",
    imageLinkS: "http://images.amazon.com/images/P/1592571301.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1592571301.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1592571301.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0374270325",
    title: "A Man in Full",
    author: "Tom Wolfe",
    year: 1998,
    publisher: "Farrar Straus &amp; Giroux",
    imageLinkS: "http://images.amazon.com/images/P/0374270325.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0374270325.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0374270325.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0375719180",
    title: "The Miracle Life of Edgar Mint: A Novel",
    author: "Brady Udall",
    year: 2002,
    publisher: "Vintage Books USA",
    imageLinkS: "http://images.amazon.com/images/P/0375719180.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0375719180.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0375719180.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0440235502",
    title: "October Sky: A Memoir",
    author: "Homer Hickam",
    year: 1999,
    publisher: "Dell",
    imageLinkS: "http://images.amazon.com/images/P/0440235502.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0440235502.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0440235502.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "044023722X",
    title: "A Painted House",
    author: "John Grisham",
    year: 2001,
    publisher: "Dell Publishing Company",
    imageLinkS: "http://images.amazon.com/images/P/044023722X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/044023722X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/044023722X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1573225487,
    title: "The Romance Reader",
    author: "Pearl Abraham",
    year: 1996,
    publisher: "Riverhead Books",
    imageLinkS: "http://images.amazon.com/images/P/1573225487.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1573225487.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1573225487.01.LZZZZZZZ.jpg"
  },
  {
    isbn: 1853260673,
    title: "Far from the Madding Crowd (Wordsworth Classics)",
    author: "Thomas Hardy",
    year: 1997,
    publisher: "NTC/Contemporary Publishing Company",
    imageLinkS: "http://images.amazon.com/images/P/1853260673.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/1853260673.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/1853260673.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0060977477",
    title: "The Perfect Storm : A True Story of Men Against the Sea",
    author: "Sebastian Junger",
    year: 1999,
    publisher: "Perennial",
    imageLinkS: "http://images.amazon.com/images/P/0060977477.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0060977477.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0060977477.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345391691",
    title: "The Battle for God",
    author: "Karen Armstrong",
    year: 2001,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345391691.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345391691.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345391691.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0520011171",
    title: "Sappho: A New Translation",
    author: "Mary Barnard",
    year: 1958,
    publisher: "University of California Press",
    imageLinkS: "http://images.amazon.com/images/P/0520011171.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0520011171.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0520011171.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553278746",
    title: "The Postman (Bantam Classics)",
    author: "David Brin",
    year: 1990,
    publisher: "Spectra Books",
    imageLinkS: "http://images.amazon.com/images/P/0553278746.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553278746.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553278746.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0670856045",
    title: "The Tortilla Curtain",
    author: "T. Coraghessan Boyle",
    year: 1995,
    publisher: "Viking Books",
    imageLinkS: "http://images.amazon.com/images/P/0670856045.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0670856045.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0670856045.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0872200760",
    title: "Symposium",
    author: "Paul Woodruff",
    year: 1989,
    publisher: "Hackett Pub Co Inc",
    imageLinkS: "http://images.amazon.com/images/P/0872200760.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0872200760.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0872200760.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0937858994",
    title: "The What's Happening to My Body? Book for Boys: A Growing Up Guide for Parents and Sons",
    author: "Lynda Madaras",
    year: 1987,
    publisher: "W W Norton &amp; Co",
    imageLinkS: "http://images.amazon.com/images/P/0937858994.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0937858994.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0937858994.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0671649949",
    title: "OBJECT AFFECTION",
    author: "Stephen McCauley",
    year: 1988,
    publisher: "Washington Square Press",
    imageLinkS: "http://images.amazon.com/images/P/0671649949.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0671649949.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0671649949.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0590431110",
    title: "The Journey Home",
    author: "Isabelle Holland",
    year: 1993,
    publisher: "Scholastic Paperbacks (Mm)",
    imageLinkS: "http://images.amazon.com/images/P/0590431110.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0590431110.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0590431110.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0064470113",
    title: "Taking the Ferry Home",
    author: "Pam Conrad",
    year: 1990,
    publisher: "Harpercollins Juvenile Books",
    imageLinkS: "http://images.amazon.com/images/P/0064470113.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0064470113.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0064470113.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0553571486",
    title: "Angel of Hope (Mercy Trilogy)",
    author: "Lurlene McDaniel",
    year: 2000,
    publisher: "Starfire",
    imageLinkS: "http://images.amazon.com/images/P/0553571486.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0553571486.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0553571486.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0972044205",
    title: "The Breach",
    author: "Brian Kaufman",
    year: 2002,
    publisher: "Last Knight Pub Co",
    imageLinkS: "http://images.amazon.com/images/P/0972044205.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0972044205.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0972044205.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0312963009",
    title: "Neanderthal: A Novel",
    author: "John Darnton",
    year: 1997,
    publisher: "St. Martin's Press",
    imageLinkS: "http://images.amazon.com/images/P/0312963009.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0312963009.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0312963009.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345430476",
    title: "A Small Dark Place",
    author: "Martin Schenk",
    year: 1999,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0345430476.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345430476.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345430476.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0345435869",
    title: "The Rivan Codex : Ancient Texts of THE BELGARIAD and THE MALLOREON",
    author: "DAVID EDDINGS",
    year: 1999,
    publisher: "Del Rey",
    imageLinkS: "http://images.amazon.com/images/P/0345435869.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0345435869.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0345435869.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0380728729",
    title: "Babyhood",
    author: "Paul Reiser",
    year: 1998,
    publisher: "Avon",
    imageLinkS: "http://images.amazon.com/images/P/0380728729.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0380728729.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0380728729.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "038081840X",
    title: "Year's Best Fantasy (Year's Best Fantasy)",
    author: "David G. Hartwell",
    year: 2001,
    publisher: "Eos",
    imageLinkS: "http://images.amazon.com/images/P/038081840X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/038081840X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/038081840X.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "0449912302",
    title: "Dave Barry in Cyberspace",
    author: "Dave Barry",
    year: 1997,
    publisher: "Ballantine Books",
    imageLinkS: "http://images.amazon.com/images/P/0449912302.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/0449912302.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/0449912302.01.LZZZZZZZ.jpg"
  },
  {
    isbn: "055329198X",
    title: "Wolf Moon",
    author: "John R. Holt",
    year: 1997,
    publisher: "Bantam",
    imageLinkS: "http://images.amazon.com/images/P/055329198X.01.THUMBZZZ.jpg",
    imageLinkM: "http://images.amazon.com/images/P/055329198X.01.MZZZZZZZ.jpg",
    imageLinkL: "http://images.amazon.com/images/P/055329198X.01.LZZZZZZZ.jpg"
  }


];

module.exports = { booksData };
