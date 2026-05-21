import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GitCompare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import SEO from '../seo/SEO';
import { faqSchema, breadcrumbSchema } from '../seo/schemas';
import { comparisonBySlug } from '../data/comparisons';
import { absUrl } from '../seo/siteConfig';

export default function ComparePage() {
  const { slug } = useParams();
  const data = comparisonBySlug(slug);
  if (!data) return <Navigate to="/" replace />;

  const canonical = `/compare/${data.slug}`;

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
            { name: 'Treatments', path: '/treatments' },
            { name: data.title, path: canonical },
          ]),
          faqSchema(data.faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: data.h1,
            description: data.metaDescription,
            image: absUrl(data.image),
            url: absUrl(canonical),
            datePublished: '2026-01-01',
            dateModified: '2026-05-01',
            author: { '@id': 'https://fillers.skin/#physician' },
            publisher: { '@id': 'https://fillers.skin/#organization' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(canonical) },
          },
        ]}
      />

      <PageHeader
        eyebrow="The Comparison"
        title={data.h1.split('—')[0].trim()}
        accent={data.h1.split('—')[1]?.trim() || ''}
        subtitle={data.summary}
        image={data.image}
      />

      {/* Side-by-side table */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-bone">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6 text-rosegold-700">
            <GitCompare size={16} strokeWidth={1.5} />
            <span className="eyebrow">Side-by-Side</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {data.columns.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-bone/80 backdrop-blur border border-blush-300/40 shadow-onyx-sm overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-blush-100">
                  <img
                    src={col.image}
                    alt={`${col.name} — Fillers Clinic Newcastle`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <h3
                    className="font-display font-light text-3xl text-onyx tracking-[-0.02em] mb-7"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    {col.name}
                  </h3>
                  <dl className="space-y-3">
                    {col.rows.map(([k, v], j) => (
                      <div key={j} className="grid grid-cols-[140px,1fr] gap-3 py-2 border-b border-onyx/8 last:border-0">
                        <dt className="eyebrow text-onyx/50 text-[0.65rem] pt-0.5">{k}</dt>
                        <dd className="text-onyx/85 font-light text-[0.95rem] leading-snug">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-gradient-to-b from-bone via-blush-50/30 to-bone">
        <div className="max-w-[800px] mx-auto space-y-16">
          {data.deepDive.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
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
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-bone">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="rosegold-rule" />
            <span className="eyebrow">FAQs</span>
          </div>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Common questions
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
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-blush-50/30">
        <div className="max-w-[800px] mx-auto">
          <span className="eyebrow text-rosegold-700">Continue Reading</span>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {data.related.map((t) => (
              <li key={t.path}>
                <Link
                  to={t.path}
                  className="group flex items-center gap-3 py-3 text-onyx/85 hover:text-rosegold-700 transition-colors min-h-[44px]"
                >
                  <span className="font-display text-lg flex-1">{t.name}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
