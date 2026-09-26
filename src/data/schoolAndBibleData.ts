import {
  SchoolStaffOrStudent,
  BibleQuestionCategory,
  BiblePassage,
  BibleCharacter,
  QuizQuestion,
  SchoolNotification,
  SchoolAnnouncement,
} from '../types';

export const SCHOOL_ROLES: SchoolStaffOrStudent[] = [
  {
    roleTitle: 'Principal',
    name: 'Elijah Victor',
    emoji: '👑',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Leading our school community with wisdom, visionary care, and festive joy for every student and family.',
    quote: '"Christmas reminds us that the greatest gifts we can share are love, kindness, and learning together."',
    avatarSeed: 'elijah-victor',
  },
  {
    roleTitle: 'Admin',
    name: 'Anum',
    emoji: '🛠️',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    description: 'Directing school operations, communications, winter schedules, and festive hub coordination.',
    quote: '"Keeping our school community connected, safe, and organized through every celebration."',
    avatarSeed: 'anum-admin',
  },
  {
    roleTitle: 'Teacher',
    name: 'Aroush',
    emoji: '👩‍🏫',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description: 'Guiding classroom discoveries, directing the Christmas Nativity play, and inspiring young minds.',
    quote: '"Learning the historical and biblical story of Christmas brings wonderful curiosity to our classrooms."',
    avatarSeed: 'aroush-teacher',
  },
  {
    roleTitle: 'Student',
    name: 'Arnan',
    emoji: '🎓',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    description: '4th Grade Honor Student — Leading the School Choir and Christmas Carol ensemble.',
    quote: '"My favorite carol to sing is Silent Night!"',
    avatarSeed: 'arnan-student',
  },
  {
    roleTitle: 'Student',
    name: 'Balaj',
    emoji: '🎓',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    description: '5th Grade Science & Quiz Champion — Playing one of the Wise Men in the school pageant.',
    quote: '"I love studying the Star of Bethlehem and where the Wise Men traveled from!"',
    avatarSeed: 'balaj-student',
  },
  {
    roleTitle: 'Student',
    name: 'Eliab',
    emoji: '🎓',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    description: '3rd Grade Creative Artist — Designed the Nativity backdrop and stage star.',
    quote: '"Painting the manger and the angel wings was the most fun project of the term!"',
    avatarSeed: 'eliab-student',
  },
];

export const BIBLE_TOPIC_CATEGORIES: BibleQuestionCategory[] = [
  {
    id: 'the-nativity',
    title: 'The Nativity',
    emoji: '⭐',
    description: 'The holy night in Bethlehem, the manger, and how Jesus was welcomed into the world.',
    sampleQuestions: [
      'What is the Nativity?',
      'What happened when Jesus was born?',
      'Why was Jesus born in a manger?',
      'What town was Jesus born in and why?',
    ],
  },
  {
    id: 'jesus',
    title: 'Jesus',
    emoji: '👼',
    description: 'Who Jesus is in the Bible, His divine titles, life, ministry, and teachings.',
    sampleQuestions: [
      'Who is Jesus?',
      'Why is Jesus called Emmanuel?',
      'What does the name Jesus mean?',
      'Why did God send Jesus to earth?',
    ],
  },
  {
    id: 'the-christmas-story',
    title: 'The Christmas Story',
    emoji: '🎄',
    description: 'The complete scriptural narrative connecting Old Testament prophecies to the Gospels.',
    sampleQuestions: [
      'Where is the Christmas story in the Bible?',
      'What Old Testament prophets spoke about Jesus’ birth?',
      'How does the Gospel of Luke tell the Christmas story?',
      'How does Matthew’s Gospel differ from Luke’s?',
    ],
  },
  {
    id: 'bible-characters',
    title: 'Bible Characters',
    emoji: '🕊️',
    description: 'The real historical and biblical people who took part in the Christmas narrative.',
    sampleQuestions: [
      'Who were the shepherds?',
      'Who were the Wise Men?',
      'Who was Mary, the mother of Jesus?',
      'Who was Joseph and what was his lineage?',
      'Who was Angel Gabriel?',
    ],
  },
  {
    id: 'jesus-birth',
    title: "Jesus' Birth",
    emoji: '🌟',
    description: 'The miraculous events, the heavenly choir, the star, and the census in Bethlehem.',
    sampleQuestions: [
      'What did the angels sing to the shepherds?',
      'What was the Star of Bethlehem?',
      'Why did Mary and Joseph travel from Nazareth to Bethlehem?',
    ],
  },
  {
    id: 'bible-stories',
    title: 'Bible Stories',
    emoji: '📖',
    description: 'Inspiring stories from Genesis through Revelation, parables, and miracles.',
    sampleQuestions: [
      'What are some famous parables Jesus taught?',
      'Tell the story of the Annunciation to Mary.',
      'What happened to Zechariah and Elizabeth before Jesus was born?',
    ],
  },
  {
    id: 'christian-teachings',
    title: 'Christian Teachings',
    emoji: '✝️',
    description: 'Virtues of love, peace, forgiveness, joy, humility, and generosity at Christmastime.',
    sampleQuestions: [
      'What does the Bible teach about peace on earth?',
      'How does Christmas teach us about giving to others?',
      'What does the Bible say about loving our neighbors?',
    ],
  },
  {
    id: 'bible-books',
    title: 'Bible Books',
    emoji: '📚',
    description: 'Understanding the structure of the Old and New Testaments and Gospel accounts.',
    sampleQuestions: [
      'Which books of the Bible have the Christmas story?',
      'What is the difference between the Old and New Testaments?',
      'Who wrote the four Gospels?',
    ],
  },
  {
    id: 'bible-references',
    title: 'Bible References',
    emoji: '🔎',
    description: 'Find precise chapter and verse citations for prophecies, carols, and readings.',
    sampleQuestions: [
      'What chapter and verses record the angel visiting Mary?',
      'Where is the prophecy "For unto us a child is born" located?',
      'Where does the Bible mention Bethlehem as the birthplace?',
    ],
  },
];

export const BIBLE_PASSAGES: BiblePassage[] = [
  {
    id: 'luke-2-1-20',
    title: 'The Birth of Jesus and the Shepherds',
    reference: 'Luke 2:1-20',
    testament: 'New Testament Gospel',
    theme: 'Humility, Good Tidings, Heavenly Joy',
    keyVerse: '"For unto you is born this day in the city of David a Savior, who is Christ the Lord." (Luke 2:11)',
    summary:
      'Caesar Augustus issues a decree for a census. Joseph and Mary travel from Nazareth to Bethlehem. While there, Mary gives birth to Jesus and places Him in a manger because there is no room at the inn. An angel of the Lord appears to shepherds in the fields with glory, followed by a multitude of the heavenly host praising God. The shepherds hurry to Bethlehem, find the baby, and spread the word glorifying God.',
    biblicalTextExcerpt:
      '"And there were in the same country shepherds abiding in the field, keeping watch over their flock by night. And, lo, the angel of the Lord came upon them, and the glory of the Lord shone round about them: and they were sore afraid. And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people." (Luke 2:8-10)',
    historicalContext:
      'Roman censuses were conducted for taxation and order under provincial governors like Quirinius in Syria. Bethlehem was a modest village, the ancestral town of King David.',
    reflectionForKids:
      'God chose ordinary, hardworking shepherds on the night shift to hear the greatest announcement first. No matter how small you feel, you are precious to God.',
  },
  {
    id: 'matthew-1-18-25',
    title: 'Joseph’s Obedience and the Promised Child',
    reference: 'Matthew 1:18-25',
    testament: 'New Testament Gospel',
    theme: 'Trust, Faith, Divine Guidance',
    keyVerse: '"She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins." (Matthew 1:21)',
    summary:
      'Mary is betrothed to Joseph, but before they live together she is found to be with child through the Holy Spirit. Joseph, being a just and considerate man, plans to divorce her quietly. But an angel of the Lord appears to him in a dream, telling him not to fear taking Mary as his wife, because the child is conceived of the Holy Spirit. Joseph obeys completely.',
    biblicalTextExcerpt:
      '"All this took place to fulfill what the Lord had said through the prophet: \'The virgin will conceive and give birth to a son, and they will call him Immanuel\' (which means \'God with us\')." (Matthew 1:22-23)',
    historicalContext:
      'In first-century Jewish culture, betrothal was a legally binding contract lasting about a year before the wedding feast. Joseph showed exceptional honor and gentleness.',
    reflectionForKids:
      'Joseph listened to God even when things seemed uncertain and confusing. Doing what is right often takes bravery and quiet trust.',
  },
  {
    id: 'matthew-2-1-12',
    title: 'The Visit of the Magi (Wise Men)',
    reference: 'Matthew 2:1-12',
    testament: 'New Testament Gospel',
    theme: 'Worship, Guidance, Generosity',
    keyVerse: '"And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him." (Matthew 2:11)',
    summary:
      'Magi from the East arrive in Jerusalem asking where the newborn King of the Jews is, having seen His star. King Herod is troubled and consults chief priests, who point to Bethlehem based on Micah\'s prophecy. Herod asks the Magi to search and report back. The star leads them to the house where the young child is. They bow in worship and present gifts of gold, frankincense, and myrrh.',
    biblicalTextExcerpt:
      '"Then opening their treasures, they offered him gifts, gold and frankincense and myrrh. And being warned in a dream not to return to Herod, they departed to their own country by another way." (Matthew 2:11-12)',
    historicalContext:
      'The Magi were scholars, astronomers, and advisors from lands east of Judea (ancient Persia or Babylon). The gifts were royal: gold for a King, frankincense for worship, and myrrh denoting fragrant oil and sacrifice.',
    reflectionForKids:
      'The Wise Men gave their very best gifts to Jesus. The best gifts we can give today aren\'t bought in stores, but are acts of kindness, forgiveness, and love.',
  },
  {
    id: 'isaiah-9-6-7',
    title: 'The Prophecy of the Prince of Peace',
    reference: 'Isaiah 9:6-7',
    testament: 'Old Testament Prophecy',
    theme: 'Prophecy, Hope, Everlasting Peace',
    keyVerse: '"For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder." (Isaiah 9:6)',
    summary:
      'Written approximately 700 years before the birth of Jesus, the prophet Isaiah speaks words of great hope to people walking in darkness. God promises a child born who will bear divine names and bring an everlasting kingdom of justice and peace.',
    biblicalTextExcerpt:
      '"And his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace. Of the increase of his government and peace there shall be no end." (Isaiah 9:6-7)',
    historicalContext:
      'Prophet Isaiah ministered in Jerusalem during a time of geopolitical turmoil under the Assyrian Empire. His prophetic words pointed centuries forward to the coming Messiah.',
    reflectionForKids:
      'Whenever the world feels noisy or worrisome, Jesus is called the "Prince of Peace," bringing calmness to our hearts.',
  },
  {
    id: 'micah-5-2',
    title: 'The Prophecy of Bethlehem',
    reference: 'Micah 5:2',
    testament: 'Old Testament Prophecy',
    theme: 'Prophecy, Humble Beginnings',
    keyVerse: '"But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel." (Micah 5:2)',
    summary:
      'The prophet Micah foretells that the tiny, humble village of Bethlehem—often overlooked among the great cities of Judah—would be the birthplace of the eternal King whose origins are from ancient times.',
    biblicalTextExcerpt:
      '"Out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times." (Micah 5:2)',
    historicalContext:
      'Bethlehem Ephrathah distinguished this village near Jerusalem from another town named Bethlehem in the territory of Zebulun. It was famous as the birthplace of King David.',
    reflectionForKids:
      'Great things can come from humble places! God often chooses simple, small things to do wonderful work.',
  },
  {
    id: 'john-1-1-14',
    title: 'The Word Became Flesh',
    reference: 'John 1:1-14',
    testament: 'New Testament Gospel',
    theme: 'Light in Darkness, Divine Love',
    keyVerse: '"And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." (John 1:14)',
    summary:
      'The Gospel of John begins not with the manger, but with cosmic eternity: in the beginning was the Word, and the Word was with God, and the Word was God. In Him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it.',
    biblicalTextExcerpt:
      '"The light shines in the darkness, and the darkness has not overcome it... And the Word became flesh and dwelt among us." (John 1:5, 14)',
    historicalContext:
      'John wrote using the Greek concept of the "Logos" (the divine Word/Reason that holds creation together), revealing that in Jesus, God personally stepped into human history.',
    reflectionForKids:
      'A small candle can dispel a whole room of darkness. Jesus brings light and hope that no dark moment can ever put out.',
  },
];

export const BIBLE_CHARACTERS: BibleCharacter[] = [
  {
    name: 'Mary',
    title: 'Mother of Jesus',
    emoji: '🤱',
    roleInChristmas: 'The young woman from Nazareth chosen by God to bear the Savior.',
    scriptureReferences: ['Luke 1:26-56', 'Luke 2:1-19', 'Matthew 1:18'],
    virtue: 'Faith, Purity & Humility',
    storySummary:
      'When the Angel Gabriel told Mary she would give birth to Jesus through the Holy Spirit, she responded with humble trust: "I am the Lord’s servant; may your word to me be fulfilled." She treasured and pondered all the miraculous events in her heart.',
  },
  {
    name: 'Joseph',
    title: 'Earthly Father & Protector',
    emoji: '🪵',
    roleInChristmas: 'A carpenter from the lineage of King David who protected Mary and baby Jesus.',
    scriptureReferences: ['Matthew 1:18-25', 'Matthew 2:13-23', 'Luke 2:1-7'],
    virtue: 'Integrity, Courage & Obedience',
    storySummary:
      'Joseph demonstrated upright character by choosing not to expose Mary to public disgrace. When God spoke to him in dreams, Joseph obeyed immediately, leading the family safely to Bethlehem, then Egypt, and back to Nazareth.',
  },
  {
    name: 'Baby Jesus',
    title: 'The Prince of Peace',
    emoji: '👶',
    roleInChristmas: 'The Son of God born in a manger in Bethlehem.',
    scriptureReferences: ['Luke 2:7', 'Matthew 1:21-23', 'Isaiah 9:6'],
    virtue: 'Divine Love & Savior of Humankind',
    storySummary:
      'Born in a humble manger in the small town of Bethlehem, Jesus is the center of the Christmas celebration. His name means "The Lord saves," and He brought the promise of peace and reconciliation to the world.',
  },
  {
    name: 'Angel Gabriel',
    title: 'Messenger of God',
    emoji: '👼',
    roleInChristmas: 'Announced the coming birth of John the Baptist and Jesus.',
    scriptureReferences: ['Luke 1:19', 'Luke 1:26-38'],
    virtue: 'Truth & Heavenly Radiance',
    storySummary:
      'Gabriel was sent directly by God to Nazareth to greet Mary with the words: "Rejoice, highly favored one! The Lord is with you." Gabriel assured Mary that nothing is impossible with God.',
  },
  {
    name: 'The Shepherds',
    title: 'First Witnesses of the Nativity',
    emoji: '🐑',
    roleInChristmas: 'Ordinary workers tending sheep outside Bethlehem who heard the angel choir.',
    scriptureReferences: ['Luke 2:8-20'],
    virtue: 'Readiness & Joyful Praise',
    storySummary:
      'Tending their flocks under the night sky, shepherds were startled by an angel proclaiming good tidings of great joy. After seeing the heavenly host, they hurried to Bethlehem, found the baby, and became the very first to spread the good news.',
  },
  {
    name: 'The Wise Men (Magi)',
    title: 'Scholars from the East',
    emoji: '👑',
    roleInChristmas: 'Astronomers who followed the star to worship the newborn King.',
    scriptureReferences: ['Matthew 2:1-12'],
    virtue: 'Diligence, Reverence & Generosity',
    storySummary:
      'Studying the night skies, the Magi recognized a celestial sign and embarked on an arduous journey to Jerusalem and Bethlehem. They bowed down in worship and presented treasures of gold, frankincense, and myrrh.',
  },
  {
    name: 'Simeon & Anna',
    title: 'Faithful Elders in the Temple',
    emoji: '🕯️',
    roleInChristmas: 'Elderly servants of God who met 40-day-old Jesus in the Temple of Jerusalem.',
    scriptureReferences: ['Luke 2:25-38'],
    virtue: 'Patience & Prophetic Devotion',
    storySummary:
      'Simeon had been promised by the Holy Spirit that he would not die before seeing the Lord\'s Messiah. Taking baby Jesus in his arms, he praised God saying his eyes had seen salvation. The prophetess Anna also gave thanks and spoke of the child.',
  },
  {
    name: 'Elizabeth & Zechariah',
    title: 'Parents of John the Baptist',
    emoji: '🕊️',
    roleInChristmas: 'Relatives of Mary who prepared the way for the Lord.',
    scriptureReferences: ['Luke 1:5-25', 'Luke 1:39-45'],
    virtue: 'Faithfulness & Blessed Encouragement',
    storySummary:
      'Priest Zechariah and his wife Elizabeth were blessed in their old age with a son, John the Baptist. When pregnant Mary visited Elizabeth, Elizabeth was filled with the Holy Spirit and proclaimed Mary blessed among women.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'In which town was Jesus born, according to the Gospels of Luke and Matthew?',
    options: ['Jerusalem', 'Nazareth', 'Bethlehem', 'Capernaum'],
    correctIndex: 2,
    explanation: 'Jesus was born in Bethlehem in Judea, the city of King David, fulfilling the prophecy of Micah 5:2.',
    scriptureReference: 'Luke 2:4; Matthew 2:1',
    category: 'Nativity',
  },
  {
    id: 2,
    question: 'Who were the very first people to hear the good news of Jesus\' birth from the angels?',
    options: ['Roman Soldiers', 'The Shepherds in the fields', 'The Wise Men', 'King Herod'],
    correctIndex: 1,
    explanation: 'An angel of the Lord appeared to humble shepherds abiding in the field by night outside Bethlehem.',
    scriptureReference: 'Luke 2:8-10',
    category: 'Bible',
  },
  {
    id: 3,
    question: 'What three gifts did the Wise Men (Magi) present to the young child Jesus?',
    options: [
      'Silver, Pearls, and Bread',
      'Gold, Frankincense, and Myrrh',
      'Copper, Silk, and Olives',
      'Emeralds, Wine, and Grain',
    ],
    correctIndex: 1,
    explanation: 'The Magi opened their treasures and presented gold (for a king), frankincense (for worship), and myrrh (for anointing).',
    scriptureReference: 'Matthew 2:11',
    category: 'Bible',
  },
  {
    id: 4,
    question: 'What did the angel choir sing when announcing the birth to the shepherds?',
    options: [
      '"Peace on earth to those with silver and gold"',
      '"Glory to God in the highest, and on earth peace, good will toward men"',
      '"Rejoice, for the winter is over"',
      '"Praise the king in Jerusalem"',
    ],
    correctIndex: 1,
    explanation: 'The multitude of the heavenly host praised God saying: "Glory to God in the highest, and on earth peace, good will toward men."',
    scriptureReference: 'Luke 2:14',
    category: 'Bible',
  },
  {
    id: 5,
    question: 'Which Old Testament prophet wrote: "For unto us a child is born, unto us a son is given"?',
    options: ['Prophet Daniel', 'Prophet Isaiah', 'Prophet Jonah', 'Prophet Elijah'],
    correctIndex: 1,
    explanation: 'Isaiah 9:6 contains this famous Christmas prophecy foretelling the Prince of Peace.',
    scriptureReference: 'Isaiah 9:6',
    category: 'Bible',
  },
  {
    id: 6,
    question: 'What does the biblical name "Immanuel" (or Emmanuel) mean?',
    options: ['God with us', 'The Great Teacher', 'King of Heaven', 'Light in the Dark'],
    correctIndex: 0,
    explanation: 'Immanuel is a Hebrew name meaning "God with us", fulfilling the prophecy cited in Matthew 1:23.',
    scriptureReference: 'Matthew 1:23; Isaiah 7:14',
    category: 'Bible',
  },
  {
    id: 7,
    question: 'Why did Mary lay baby Jesus in a manger (feeding trough)?',
    options: [
      'Because they were in their own bedroom',
      'Because there was no room for them in the inn',
      'Because the emperor ordered it',
      'Because the shepherds requested it',
    ],
    correctIndex: 1,
    explanation: 'Luke 2:7 records: "because there was no place for them in the inn."',
    scriptureReference: 'Luke 2:7',
    category: 'Nativity',
  },
  {
    id: 8,
    question: 'Which angel appeared to Mary to announce that she would give birth to Jesus?',
    options: ['Michael', 'Gabriel', 'Raphael', 'Uriel'],
    correctIndex: 1,
    explanation: 'The Angel Gabriel was sent by God to Nazareth to bring the good news to Mary.',
    scriptureReference: 'Luke 1:26-28',
    category: 'Bible',
  },
];

export const SCHOOL_NOTIFICATIONS: SchoolNotification[] = [
  {
    id: 'notif-1',
    title: 'Christmas Nativity Play Rehearsal Schedule',
    sender: 'Teacher Aroush',
    senderRole: 'Teacher',
    senderEmoji: '👩‍🏫',
    timestamp: 'Today at 9:00 AM',
    content:
      'All students participating in the Christmas Nativity Play (including Balaj as the Wise Man and Arnan in the choir) will rehearse in the main auditorium at 2:00 PM today. Eliab, the stage backdrop looks magnificent!',
    tag: 'Festive',
    isRead: false,
  },
  {
    id: 'notif-2',
    title: 'Principal\'s Holiday Assembly & Welcome',
    sender: 'Elijah Victor',
    senderRole: 'Principal',
    senderEmoji: '👑',
    timestamp: 'Yesterday at 3:30 PM',
    content:
      'Welcome everyone to our Christmas Answers school platform! Please explore the dedicated Bible section to learn about the Nativity, the prophecies of Jesus, and how our faith inspires community generosity.',
    tag: 'Academic',
    isRead: false,
  },
  {
    id: 'notif-3',
    title: 'Winter Break & School Admin Notice',
    sender: 'Anum',
    senderRole: 'Admin',
    senderEmoji: '🛠️',
    timestamp: '2 days ago',
    content:
      'Admin reminder: Term examinations conclude this Thursday. School offices will remain reachable online for all family inquiries during the holiday break.',
    tag: 'Urgent',
    isRead: true,
  },
  {
    id: 'notif-4',
    title: 'Daily Scripture Verse for Families',
    sender: 'Christmas Answers & Bible Hub',
    senderRole: 'System',
    senderEmoji: '📖',
    timestamp: '3 days ago',
    content:
      '"And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people." — Luke 2:10. May your homes be filled with great joy this holiday season!',
    tag: 'Scripture',
    isRead: true,
  },
];

export const SCHOOL_ANNOUNCEMENTS: SchoolAnnouncement[] = [
  {
    id: 'ann-1',
    title: 'Annual Christmas Nativity Pageant & Carol Service',
    date: 'December 20, 2026',
    author: 'Teacher Aroush & Principal Elijah Victor',
    authorRole: 'Pageant Directors',
    badge: 'School Gala',
    preview: 'Join us for an unforgettable evening celebrating the birth of Jesus with live drama, carols, and orchestra.',
    content:
      'Our school is excited to present the Annual Christmas Nativity Pageant! Students from all grades have prepared special performances. Student Balaj will lead the Magi procession, Arnan will perform a solo during "O Holy Night", and Eliab has painted a stunning starry night sky over Bethlehem. Parents, alumni, and friends are warmly invited.',
    location: 'School Main Auditorium & Live Stream',
    importantDate: 'Friday, Dec 20 at 6:30 PM',
  },
  {
    id: 'ann-2',
    title: 'Holiday Charity Toy Drive & Warm Clothing Collection',
    date: 'December 15, 2026',
    author: 'Admin Anum',
    authorRole: 'Admin Coordinator',
    badge: 'Community Service',
    preview: 'Sharing Christmas blessings with local families in need through student-led donation drives.',
    content:
      'Reflecting the biblical teaching of loving our neighbors, Admin Anum and student volunteers are organizing the Annual Christmas Warmth Drive. We welcome new unwrapped toys, warm winter coats, gloves, and non-perishable holiday hampers. Drop-off bins are located at the front administrative lobby.',
    location: 'School Administrative Center (Front Hall)',
    importantDate: 'Collections open through Dec 22',
  },
  {
    id: 'ann-3',
    title: 'Bible Study & Christmas Scripture Workshop for Families',
    date: 'December 12, 2026',
    author: 'Teacher Aroush',
    authorRole: 'Faith & Literature Lead',
    badge: 'Educational Workshop',
    preview: 'An interactive exploration of Luke 2, Matthew 1-2, and Old Testament prophecies.',
    content:
      'Teacher Aroush invites parents and students to a special weekend workshop exploring the historical background of Bethlehem, Roman censuses, and how ancient prophecies from Isaiah and Micah came to fruition in the Nativity. Free illustrated family scripture booklets will be provided!',
    location: 'School Library & Online Hub',
    importantDate: 'Saturday, Dec 14 at 10:00 AM',
  },
];
