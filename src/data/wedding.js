export const wedding = {
  names: 'Rhys & Teniola',
  dateLabel: 'Saturday, 27 February 2027',
  dateTime: '2027-02-27T13:30:00',
  ceremony: {
    name: "St Mark's Church",
    address: '82 Lincoln Road, Peterborough, PE1 2SN',
  },
  reception: {
    name: 'New Theatre',
    address: '46 Broadway, Peterborough, PE1 1RT',
  },
};

export const navigation = [
  ['Home', '/#home'],
  ['Our Story', '/#story'],
  ['Schedule', '/#schedule'],
  ['Groomsmen', '/#groomsmen'],
  ['Bridesmaids', '/#bridesmaids'],
  ['Locations', '/#location'],
];

export const storyChapters = [
  {
    number: '01',
    title: 'How We Met',
    label: 'The opening scene',
    text: 'Add the story of where it all began—the first hello, the first laugh, and the moment you knew this meeting was special.',
  },
  {
    number: '02',
    title: 'Our Favourite Chapter',
    label: 'The adventure so far',
    text: 'Share a memorable adventure, a meaningful milestone, or one of the little everyday moments that brought you closer together.',
  },
  {
    number: '03',
    title: 'The Proposal',
    label: 'The page-turner',
    text: 'Tell your guests how the question was asked, where it happened, and what made that unforgettable day uniquely yours.',
  },
];

export const schedule = [
  {
    time: '1:00 PM',
    dateTime: '2027-02-27T13:00:00',
    title: 'Guest Arrival',
    text: 'Please arrive with plenty of time to find your seat and settle in before the ceremony begins.',
  },
  {
    time: '1:30 PM',
    dateTime: '2027-02-27T13:30:00',
    title: 'Wedding Ceremony',
    text: "Join us as we exchange our vows at St Mark's Church.",
  },
  {
    time: '3:00 PM',
    dateTime: '2027-02-27T15:00:00',
    title: 'Drinks & Photographs',
    text: 'Enjoy refreshments, mingle with other guests, and join us for photographs.',
  },
  {
    time: '5:00 PM',
    dateTime: '2027-02-27T17:00:00',
    title: 'Wedding Breakfast',
    text: 'Take your seat for dinner, speeches, and a celebration of good food and great company.',
  },
  {
    time: '8:00 PM',
    dateTime: '2027-02-27T20:00:00',
    title: 'Evening Celebration',
    text: 'The dance floor opens for music, celebrations, and the final chapter of the day.',
  },
];

export const groomsmen = [
  { initials: 'BM', name: 'Best Man Name', role: 'Best Man', text: 'Add a short introduction, a favourite memory, or how the groom and best man first met.' },
  { initials: 'G1', name: 'Groomsman Name', role: 'Groomsman', text: 'Add a few warm words about this groomsman and the role he has played in your story.' },
  { initials: 'G2', name: 'Groomsman Name', role: 'Groomsman', text: 'Add a fun fact, shared memory, or a short message celebrating your friendship.' },
];

export const bridesmaids = [
  { initials: 'MOH', name: 'Maid of Honour Name', role: 'Maid of Honour', text: 'Add a short introduction, a favourite memory, or how the bride and maid of honour first met.' },
  { initials: 'B1', name: 'Bridesmaid Name', role: 'Bridesmaid', text: 'Add a few warm words about this bridesmaid and the role she has played in your story.' },
  { initials: 'B2', name: 'Bridesmaid Name', role: 'Bridesmaid', text: 'Add a fun fact, shared memory, or a short message celebrating your friendship.' },
];

export const venues = [
  {
    type: 'Ceremony venue',
    name: wedding.ceremony.name,
    address: wedding.ceremony.address,
    directions: "https://www.google.com/maps/search/?api=1&query=St+Mark%27s+Church+82+Lincoln+Road+Peterborough+PE1+2SN",
    map: 'https://www.google.com/maps?q=St%20Mark%27s%20Church%2C%2082%20Lincoln%20Road%2C%20Peterborough%20PE1%202SN&output=embed',
  },
  {
    type: 'Reception venue',
    name: wedding.reception.name,
    address: wedding.reception.address,
    directions: 'https://www.google.com/maps/search/?api=1&query=New+Theatre+46+Broadway+Peterborough+PE1+1RT',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.5910762704357!2d-0.24330222288270084!3d52.57700593200693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f0fefe09dde7%3A0x1ff1b27549735dbf!2sNew%20Theatre!5e0!3m2!1sen!2suk!4v1733180237913!5m2!1sen!2suk',
  },
];
