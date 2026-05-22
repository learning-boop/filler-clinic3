import Hero from '../components/Hero';
import Treatments from '../components/Treatments';
import About from '../components/About';
import Results from '../components/Results';
import Reviews from '../components/Reviews';
import CTABanner from '../components/CTABanner';

import SEO from '../seo/SEO';
import {
  organizationSchema,
  physicianSchema,
  websiteSchema,
  breadcrumbSchema,
  reviewSchema,
} from '../seo/schemas';
import { reviews } from '../data/reviews';

export default function Home() {
  return (
    <>
      <SEO
        title="Fillers Clinic Newcastle | Premium Lip, Cheek & Jawline Fillers"
        description="Premium aesthetic clinic in Newcastle upon Tyne. Lip, cheek, jawline, tear trough and chin fillers — naturally enhanced by Dr Matla. GMC-registered, CQC-regulated, by appointment only."
        keywords="fillers Newcastle, lip fillers Newcastle, cheek fillers Newcastle, jawline fillers Newcastle, tear trough fillers Newcastle, aesthetic clinic Newcastle, Profhilo Newcastle, Dr Matla, non-surgical rhinoplasty Newcastle"
        canonical="/"
        jsonLd={[
          organizationSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          ...reviewSchema(reviews),
        ]}
      />
      <Hero />
      
      <Treatments />
      <About />
      <Results />
      {/* <Reviews /> */}
      <CTABanner />
      
      
    </>
  );
}
