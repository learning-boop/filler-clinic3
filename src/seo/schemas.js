import { SITE, absUrl } from './siteConfig';

/* ------------------------------------------------------------------ */
/*  ORGANISATION + LOCAL BUSINESS + PHYSICIAN  (homepage / global)     */
/* ------------------------------------------------------------------ */
export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'LocalBusiness'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.brand,
  legalName: SITE.legalName,
  description: SITE.defaultDescription,
  url: SITE.url,
  logo: absUrl('/assets/logo.webp'),
  image: SITE.ogImage,
  telephone: SITE.phoneRaw,
  email: SITE.email,
  priceRange: '£££',
  medicalSpecialty: ['Dermatology', 'CosmeticDentistry', 'PlasticSurgery'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: SITE.serviceAreas.map((name) => ({
    '@type': 'City',
    name,
  })),
  openingHoursSpecification: SITE.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.trust.reviewRating,
    reviewCount: SITE.trust.reviewCount,
    bestRating: '5',
  },
});

export const physicianSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE.url}/#physician`,
  name: SITE.practitioner.fullName,
  alternateName: SITE.practitioner.name,
  jobTitle: SITE.practitioner.role,
  description:
    'GMC-registered aesthetic doctor specialising in natural-looking, expertly placed dermal filler treatments at Fillers Clinic Newcastle.',
  image: SITE.practitioner.image,
  worksFor: { '@id': `${SITE.url}/#organization` },
  medicalSpecialty: 'Dermatology',
  telephone: SITE.phoneRaw,
  url: `${SITE.url}/about`,
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.brand,
  description: SITE.defaultDescription,
  inLanguage: 'en-GB',
  publisher: { '@id': `${SITE.url}/#organization` },
});

/* ------------------------------------------------------------------ */
/*  BREADCRUMB                                                         */
/* ------------------------------------------------------------------ */
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absUrl(item.path),
  })),
});

/* ------------------------------------------------------------------ */
/*  MEDICAL PROCEDURE  (treatment pages)                              */
/* ------------------------------------------------------------------ */
export const medicalProcedureSchema = ({
  name,
  description,
  path,
  image,
  duration,
  followup,
  preparation,
  bodyLocation,
  howPerformed,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name,
  description,
  url: absUrl(path),
  image: image ? absUrl(image) : SITE.ogImage,
  procedureType: 'https://schema.org/PercutaneousProcedure',
  bodyLocation: bodyLocation || 'Face',
  howPerformed: howPerformed ||
    'Hyaluronic acid dermal filler is precisely injected by Dr Matla using fine-gauge needles or micro-cannula technique under topical anaesthetic.',
  preparation: preparation ||
    'Avoid blood-thinning supplements, alcohol and intensive exercise for 24 hours before treatment.',
  followup: followup ||
    'A complimentary review appointment is scheduled at 2 weeks to assess and refine results.',
  expectedPrognosis:
    'Results visible immediately, settling fully within 2–4 weeks. Effects typically last 6–18 months depending on treatment.',
  performer: { '@id': `${SITE.url}/#physician` },
  location: { '@id': `${SITE.url}/#organization` },
  ...(duration && { totalProcedureTime: duration }),
});

/* ------------------------------------------------------------------ */
/*  MEDICAL CONDITION  (concern pages)                                */
/* ------------------------------------------------------------------ */
export const medicalConditionSchema = ({ name, description, treatments = [] }) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  name,
  description,
  possibleTreatment: treatments.map((t) => ({
    '@type': 'MedicalProcedure',
    name: t.name,
    url: absUrl(t.path),
  })),
});

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: Array.isArray(f.a)
        ? f.a.join(' ')
        : Array.isArray(f.paragraphs)
        ? f.paragraphs.join(' ')
        : f.a || '',
    },
  })),
});

/* ------------------------------------------------------------------ */
/*  ARTICLE / BLOG                                                    */
/* ------------------------------------------------------------------ */
export const articleSchema = ({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  image: image ? absUrl(image) : SITE.ogImage,
  url: absUrl(path),
  author: { '@id': `${SITE.url}/#physician` },
  publisher: { '@id': `${SITE.url}/#organization` },
  datePublished: datePublished || '2026-01-01',
  dateModified: dateModified || '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(path) },
});
