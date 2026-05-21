import PageHeader from '../components/PageHeader';
import Results from '../components/Results';
import CTABanner from '../components/CTABanner';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import { SITE, absUrl } from '../seo/siteConfig';
import { results as resultsData } from '../data/treatments';

export default function ResultsPage() {
  // ImageGallery + MedicalWebPage hybrid
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Before & After Results — Fillers Clinic Newcastle',
    description:
      'Subtle, considered transformations from our Newcastle clinic. Before and after images of lip, cheek, jawline, tear trough, chin filler and Profhilo treatments by Dr Matla. All images shared with explicit patient consent.',
    url: absUrl('/results'),
    publisher: { '@id': `${SITE.url}/#organization` },
    image: resultsData.flatMap((r) => [
      {
        '@type': 'ImageObject',
        contentUrl: absUrl(r.after),
        caption: `${r.treatment} — after (${r.note})`,
      },
      {
        '@type': 'ImageObject',
        contentUrl: absUrl(r.before),
        caption: `${r.treatment} — before`,
      },
    ]),
  };

  return (
    <>
      <SEO
        title="Before & After Results — Newcastle Aesthetic Clinic"
        description="Real patient results from Fillers Clinic Newcastle — before and after images of lip, cheek, jawline, tear trough and chin filler treatments by Dr Matla. All images shared with explicit consent."
        keywords="filler results Newcastle, before and after lip fillers, before and after cheek fillers, jawline filler results Newcastle, Dr Matla results"
        canonical="/results"
        jsonLd={[
          imageGallerySchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Results', path: '/results' },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Real Patients"
        title="The art,"
        accent="visible."
        subtitle="Subtle, considered transformations from our Newcastle clinic. All images shared with explicit patient consent."
      />
      <Results />
      <CTABanner />
    </>
  );
}
