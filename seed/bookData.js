const booksData = [
  {
    isbn: '0307124533',
    title: "Owl's Amazing but True No. 2",
    author: 'Owl Magazine',
    year: '2012',
    publisher: 'Golden Books',
    imageLinkS: 'http://images.amazon.com/images/P/0307124533.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0307124533.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0307124533.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0394172116',
    title: 'Monkey (An Evergreen Book, E-112)',
    author: 'Cheng-En Wu',
    year: '2011',
    publisher: 'Grove Press',
    imageLinkS: 'http://images.amazon.com/images/P/0394172116.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0394172116.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0394172116.01.LZZZZZZZ.jpg'
  },
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
    isbn: '9875451495',
    title: 'Los Mitos de La Historia Argentina',
    author: 'Felipe Pigna',
    year: '2004',
    publisher: 'Norma',
    imageLinkS: 'http://images.amazon.com/images/P/9875451495.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9875451495.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9875451495.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9685368503',
    title: 'Veinte Poemas de Amor y una Canción Desesperada',
    author: 'Pablo Neruda',
    year: '2004',
    publisher: 'Editorial y Distribuidora Leo',
    imageLinkS: 'http://images.amazon.com/images/P/9685368503.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9685368503.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9685368503.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9505157592',
    title: 'Mafalda &amp; Friends 1',
    author: 'Quino',
    year: '2004',
    publisher: 'de la Flor',
    imageLinkS: 'http://images.amazon.com/images/P/9505157592.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9505157592.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9505157592.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9504912265',
    title: 'El Enigma de Hess',
    author: 'Martin Allen',
    year: '2004',
    publisher: 'Planeta',
    imageLinkS: 'http://images.amazon.com/images/P/9504912265.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9504912265.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9504912265.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8497594304',
    title: 'Donde Estan Los Ninos?',
    author: 'Mary Higgins Clark',
    year: '2004',
    publisher: 'Debols!llo',
    imageLinkS: 'http://images.amazon.com/images/P/8497594304.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8497594304.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8497594304.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8495376466',
    title: 'Directorio de Caligrafia',
    author: 'David Harrison',
    year: '2004',
    publisher: 'Acanto',
    imageLinkS: 'http://images.amazon.com/images/P/8495376466.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8495376466.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8495376466.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8484508935',
    title: 'Yo Puta',
    author: 'Isabel Pisano',
    year: '2004',
    publisher: 'Debols!llo',
    imageLinkS: 'http://images.amazon.com/images/P/8484508935.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8484508935.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8484508935.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8484037134',
    title: 'Rubén Darío (Obras selectas series)',
    author: 'Ruben Dario',
    year: '2004',
    publisher: 'Edimat Libros',
    imageLinkS: 'http://images.amazon.com/images/P/8484037134.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8484037134.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8484037134.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8478888179',
    title: 'El Legado del Rey Tsongor',
    author: 'Laurent Gaude',
    year: '2004',
    publisher: 'Salamandra',
    imageLinkS: 'http://images.amazon.com/images/P/8478888179.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8478888179.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8478888179.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8434442418',
    title: 'Movimientos Juveniles En America Latina: Pachucos, Malandros, Punketas (Ariel Social)',
    author: 'Carles Feixa',
    year: '2004',
    publisher: 'Ariel Editorial',
    imageLinkS: 'http://images.amazon.com/images/P/8434442418.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8434442418.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8434442418.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432296384',
    title: 'El Club Dante',
    author: 'Matthew Pearl',
    year: '2004',
    publisher: 'Editorial Seix Barral',
    imageLinkS: 'http://images.amazon.com/images/P/8432296384.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432296384.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432296384.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432227706',
    title: 'Fuera',
    author: 'Susana Tamaro',
    year: '2004',
    publisher: 'Planeta Pub Corp',
    imageLinkS: 'http://images.amazon.com/images/P/8432227706.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432227706.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432227706.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432216534',
    title: 'El Reino de Este Mundo',
    author: 'Alejo Carpentier',
    year: '2004',
    publisher: 'Booket',
    imageLinkS: 'http://images.amazon.com/images/P/8432216534.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432216534.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432216534.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8423335399',
    title: 'Mrs. Caldwell Habla Con Su Hijo',
    author: 'Camilo Jose Cela',
    year: '2004',
    publisher: 'Destino Ediciones',
    imageLinkS: 'http://images.amazon.com/images/P/8423335399.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8423335399.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8423335399.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8420458546',
    title: 'Manolito Gafatas',
    author: 'Elvira Lindo',
    year: '2004',
    publisher: 'Santillana USA Pub Co Inc',
    imageLinkS: 'http://images.amazon.com/images/P/8420458546.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8420458546.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8420458546.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '4889961151',
    title: 'Japanese in Mangaland: Learning the Basics',
    author: 'Marc Bernabe',
    year: '2004',
    publisher: 'Japan Publications Trading Company',
    imageLinkS: 'http://images.amazon.com/images/P/4889961151.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/4889961151.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/4889961151.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '4770029578',
    title: 'In the Miso Soup',
    author: 'Ryu Murakami',
    year: '2004',
    publisher: 'Kodansha International (JPN)',
    imageLinkS: 'http://images.amazon.com/images/P/4770029578.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/4770029578.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/4770029578.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3861878003',
    title: 'Built',
    author: 'Ron Lloyd',
    year: '2004',
    publisher: 'Bruno Gmunder Verlag Gmbh',
    imageLinkS: 'http://images.amazon.com/images/P/3861878003.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3861878003.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3861878003.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3861873850',
    title: "Chi Chi LaRue's LIVE And RAW",
    author: 'Chi Chi Larue',
    year: '2004',
    publisher: 'Bookazine Company',
    imageLinkS: 'http://images.amazon.com/images/P/3861873850.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3861873850.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3861873850.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3473580163',
    title: "Dich krieg' ich auch noch rum.",
    author: 'Pete Johnson',
    year: '2004',
    publisher: 'Ravensburger Buchverlag',
    imageLinkS: 'http://images.amazon.com/images/P/3473580163.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3473580163.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3473580163.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '226612157X',
    title: 'Lestat le Vampire / Lestat the Vampire',
    author: 'Anne Rice',
    year: '2004',
    publisher: 'Pocket (FR)',
    imageLinkS: 'http://images.amazon.com/images/P/226612157X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/226612157X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/226612157X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1932270264',
    title: "The Lisa Marie Presley Story: Sex, Drugs and Rock 'n' Roll",
    author: 'Katharine Cumming',
    year: '2004',
    publisher: 'AMI Books',
    imageLinkS: 'http://images.amazon.com/images/P/1932270264.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1932270264.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1932270264.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1931561834',
    title: 'Attraction',
    author: 'James Manlow',
    year: '2004',
    publisher: 'MacAdam/Cage Publishing',
    imageLinkS: 'http://images.amazon.com/images/P/1931561834.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1931561834.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1931561834.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1930285159',
    title: 'Jesus 101: Straightforward Answers to Basic Questions About Christianity',
    author: 'Leigh Scheele',
    year: '2004',
    publisher: 'Master Design',
    imageLinkS: 'http://images.amazon.com/images/P/1930285159.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1930285159.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1930285159.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1929998996',
    title: 'Hopeless Savages',
    author: 'Jen Van Meter',
    year: '2004',
    publisher: 'Oni Press',
    imageLinkS: 'http://images.amazon.com/images/P/1929998996.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1929998996.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1929998996.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1929998880',
    title: 'Scooter Girl',
    author: 'Chynna Clugston-Major',
    year: '2004',
    publisher: 'Oni Press',
    imageLinkS: 'http://images.amazon.com/images/P/1929998880.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1929998880.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1929998880.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '192076920X',
    title: 'Shantaram',
    author: 'Gregory David Roberts',
    year: '2004',
    publisher: 'Scribe',
    imageLinkS: 'http://images.amazon.com/images/P/192076920X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/192076920X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/192076920X.01.LZZZZZZZ.jpg'
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
  }

];

module.exports = { booksData };
