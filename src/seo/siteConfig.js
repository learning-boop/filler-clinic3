/* ------------------------------------------------------------------
 *  CENTRAL SITE / SEO CONFIGURATION
 *  Single source of truth for brand, contact, location and schema.
 * ------------------------------------------------------------------ */

export const SITE = {
  /* Brand ---------------------------------------------------------- */
  brand: 'Fillers Clinic',
  legalName: 'Fillers Clinic',
  tagline: 'Refined Aesthetic Medicine in Newcastle',
  defaultTitle:
    'Fillers Clinic Newcastle | Premium Lip, Cheek & Jawline Fillers',
  defaultDescription:
    'Premium aesthetic clinic in Newcastle upon Tyne offering lip, cheek, jawline, tear trough and chin fillers. Led by Dr Matla — GMC-registered, CQC-regulated, by appointment only.',
  defaultKeywords:
    'fillers Newcastle, lip fillers Newcastle, cheek fillers Newcastle, jawline fillers Newcastle, tear trough fillers Newcastle, aesthetic clinic Newcastle, non-surgical rhinoplasty Newcastle, Dr Matla, Profhilo Newcastle',

  /* Domain & URLs -------------------------------------------------- */
  url: 'https://fillers.skin',
  ogImage: 'https://fillers.skin/assets/og-image.webp',
  twitterHandle: '@drmatlaclinic',

  /* Contact -------------------------------------------------------- */
  email: 'hello@fillers.skin',
  phone: '0333 444 1399',
  phoneRaw: '+443334441399',
  bookingUrl: 'https://portal.aestheticnursesoftware.com/book-online/1150',

  /* Location ------------------------------------------------------- */
  address: {
    addressLocality: 'Newcastle upon Tyne',
    addressRegion: 'Tyne and Wear',
    addressCountry: 'GB',
  },
  geo: {
    latitude: '54.9783',
    longitude: '-1.6178',
    region: 'GB-NET',
    placename: 'Newcastle upon Tyne',
  },
  serviceAreas: [
    'Newcastle upon Tyne',
    'Gateshead',
    'Sunderland',
    'Durham',
    'Gosforth',
    'Jesmond',
    'Tynemouth',
    'North Shields',
    'South Shields',
    'Whitley Bay',
    'Hexham',
    'Morpeth',
  ],

  /* Practitioner --------------------------------------------------- */
  practitioner: {
    name: 'Dr Matla',
    fullName: 'Dr Matla',
    role: 'Aesthetic Doctor & Clinical Director',
    credentials: 'GMC-registered, MBBS, MRCGP, DFSRH',
    image: 'https://drmatla.com/wp-content/uploads/2023/10/Dr-Matla.jpg',
  },

  /* Opening Hours -------------------------------------------------- */
  hours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], open: '09:00', close: '19:00' },
    { days: ['Saturday'], open: '10:00', close: '16:00' },
  ],

  /* Social --------------------------------------------------------- */
  social: {
    instagram: 'https://www.instagram.com/drmatlaclinic',
    facebook:  'https://www.facebook.com/aestheticuk',
    youtube:   'https://www.youtube.com/channel/UCMceyI4YQ7kBJIYGrgscHIA',
    tiktok:    'https://www.tiktok.com/@drmatla',
  },

  /* Trust signals (only use REAL, verifiable numbers) --------------- */
  trust: {
    yearsExperience: '20+',
    treatmentsDelivered: '5,000+',
    satisfactionRate: '98%',
    reviewRating: '5.0',
    reviewCount: '7',
  },
};

/* ------------------------------------------------------------------ */
export const absUrl = (path = '') => {
  if (!path) return SITE.url;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const buildTitle = (title) => {
  if (!title) return SITE.defaultTitle;
  if (title.toLowerCase().includes('fillers clinic')) return title;
  return `${title} | Fillers Clinic Newcastle`;
};
