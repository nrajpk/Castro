export const event = {
  couple: 'Cera & Tony',
  bride: 'Cera',
  groom: 'Tony',
  title: 'Betrothal Invitation',
  dateLine: 'Saturday, October 10, 2026',
  timeLine: '11:00 AM',
  targetISO: '2026-10-10T11:00:00+05:30',
  mainVenue: "St. Mary's Forane Church, Kanjoor",
  receptionVenue: 'O.L.D. Church Parish Hall, Kaippattoor',
  invitationPdf: '/invitation.pdf',
  calendarFile: '/cera-tony-betrothal.ics',
  primaryMap: "https://maps.google.com/?q=St.+Mary's+Forane+Church,+Kanjoor",
  receptionMap: 'https://maps.google.com/?q=O.L.D.+Church+Parish+Hall,+Kaippattoor',
  showPhotoPanel: true,
  couplePhoto: '/couple.jpg',
  couplePhotoAlt: 'Cera and Tony together',
  phoneDisplay: '+91 98474 00241',
  phoneRaw: '+919847400241',
  scripture: 'The Lord has done great things for us, and we are filled with joy.',
  scriptureRef: 'Psalm 126:3'
};

export const ceremonies = [
  {
    idx: '01',
    kicker: 'Morning Service',
    title: 'Betrothal Ceremony',
    time: '11:00 AM',
    venue: "St. Mary's Forane Church",
    place: 'Kanjoor, Kerala',
    note: 'Two families gather in prayer as promises are first spoken in the presence of God and loved ones.',
    map: "https://maps.google.com/?q=St.+Mary's+Forane+Church,+Kanjoor"
  },
  {
    idx: '02',
    kicker: 'Afternoon Gathering',
    title: 'Reception',
    time: '12:30 PM onwards',
    venue: 'O.L.D. Church Parish Hall',
    place: 'Kaippattoor, Kerala',
    note: 'A warm family meal and celebration following the ceremony, shared in fellowship and joy.',
    map: 'https://maps.google.com/?q=O.L.D.+Church+Parish+Hall,+Kaippattoor'
  }
];

export const people = [
  {
    role: 'Our Beloved Daughter',
    name: 'Cera',
    parentLine: 'D/o Sheela & Saji Francis',
    copy: 'Carrying the grace of generations, faith and family into this joyful promise.',
    lineageTitle: 'Granddaughter of',
    lineage: [
      {
        names: 'the late Brijit Francis and the late P.K. Francis',
        house: 'Paracka House, Kanjoor'
      },
      {
        names: 'the late Ally Mathan and the late T.A. Mathan',
        house: 'Thekkekkara House, Irinjalakuda'
      }
    ]
  },
  {
    role: 'Our Beloved Son',
    name: 'Tony',
    parentLine: 'S/o Mini Anto & Anto Antony',
    copy: 'Raised among strong pillars of Christian heritage, family values and love.',
    lineageTitle: 'Grandson of',
    lineage: [
      {
        names: 'the late Chinnamma and C.M. Antony',
        house: 'Chakkankulam House, Pala'
      },
      {
        names: 'the late Chinnamma and T.J. Joseph',
        house: 'Thekkumthottam House, Ponkunnam'
      }
    ]
  }
];

export const sharing = ['Fr. Francis SJ', 'Mathews & Merin', 'Bastin & Riya', 'Austin'];

export const initialBlessings = [
  {
    name: 'Saji & Sheela',
    text: 'May God shower you both with boundless grace and love on this beautiful journey.',
    date: 'Family blessing'
  },
  {
    name: 'Anto & Mini',
    text: 'Welcoming our dear Cera into our family with all our love.',
    date: 'Family blessing'
  },
  {
    name: 'Fr. Francis SJ',
    text: 'Prayers and blessings for a holy and joyful union in Christ.',
    date: 'With prayers'
  }
];
