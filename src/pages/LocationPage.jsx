import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import SEO from '../seo/SEO';
import {
  medicalProcedureSchema,
  faqSchema,
  breadcrumbSchema,
} from '../seo/schemas';
import { locationBySlug } from '../data/locations';
import { SITE } from '../seo/siteConfig';

export default function LocationPage() {
  const { slug } = useParams();
  const data = locationBySlug(slug);
  if (!data) return <Navigate to="/" replace />;

  const canonical = `/locations/${data.slug}`;

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        canonical={canonical}
        image={data.image}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/treatments' },
            { name: data.title, path: canonical },
          ]),
          medicalProcedureSchema({
            name: `${data.treatment} in ${data.place}`,
            description: data.intro[0],
            path: canonical,
            image: data.image,
          }),
          faqSchema(data.faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: data.treatment,
            provider: { '@id': `${SITE.url}/#organization` },
            areaServed: {
              '@type': 'City',
              name: data.place,
            },
            name: `${data.treatment} for ${data.place} patients`,
            description: data.metaDescription,
            url: `${SITE.url}${canonical}`,
          },
        ]}
      />

      <PageHeader
        eyebrow={`Serving ${data.place}`}
        title={data.h1.split(' ').slice(0, -2).join(' ')}
        accent={data.h1.split(' ').slice(-2).join(' ')}
        subtitle={data.intro[0]}
        image={data.image}
      />

      {/* Intro continued */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-bone">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6 text-rosegold-700">
            <MapPin size={16} strokeWidth={1.5} />
            <span className="eyebrow">{data.place} · Newcastle upon Tyne</span>
          </div>
          {data.intro.slice(1).map((p, i) => (
            <p key={i} className="text-onyx/75 font-light text-[1.05rem] md:text-[1.1rem] leading-[1.95] mb-6">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 bg-bone">
        <div className="max-w-[800px] mx-auto space-y-16">
          {data.sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-3xl md:text-4xl text-onyx tracking-[-0.02em] leading-[1.15] mb-7"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                {s.title}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="text-onyx/75 font-light text-[1.02rem] leading-[1.95] mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-gradient-to-b from-bone via-blush-50/30 to-bone">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="rosegold-rule" />
            <span className="eyebrow">{data.place} FAQs</span>
          </div>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Questions from {data.place} patients
          </h2>
          <div className="space-y-3">
            {data.faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-blush-300/40 bg-bone/70 backdrop-blur p-6 md:p-8 cursor-pointer
                           hover:bg-blush-50/40 transition-colors duration-300"
              >
                <summary className="flex items-start justify-between gap-4 list-none">
                  <span className="font-display text-lg md:text-xl text-onyx font-normal leading-snug">
                    {f.q}
                  </span>
                  <span className="text-rosegold-600 text-2xl leading-none mt-1 shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-5 text-onyx/70 font-light leading-[1.9]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-bone">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow text-rosegold-700">Related Treatments</span>
            <ul className="mt-6 space-y-3">
              {data.relatedTreatments.map((t) => (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    className="group flex items-center gap-3 py-3 text-onyx/85 hover:text-rosegold-700 transition-colors min-h-[44px]"
                  >
                    <CheckCircle2 size={16} className="text-rosegold-500 shrink-0" strokeWidth={1.5} />
                    <span className="font-display text-lg flex-1">{t.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow text-rosegold-700">Further Reading</span>
            <ul className="mt-6 space-y-3">
              {data.relatedFaqs.map((t) => (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    className="group flex items-center gap-3 py-3 text-onyx/85 hover:text-rosegold-700 transition-colors min-h-[44px]"
                  >
                    <CheckCircle2 size={16} className="text-rosegold-500 shrink-0" strokeWidth={1.5} />
                    <span className="font-display text-lg flex-1">{t.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
