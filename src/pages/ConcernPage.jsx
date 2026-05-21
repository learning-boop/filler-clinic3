import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import SEO from '../seo/SEO';
import {
  faqSchema,
  breadcrumbSchema,
  medicalConditionSchema,
} from '../seo/schemas';
import { concernBySlug } from '../data/concerns';

export default function ConcernPage() {
  const { slug } = useParams();
  const data = concernBySlug(slug);
  if (!data) return <Navigate to="/" replace />;

  const canonical = `/concerns/${data.slug}`;

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
            { name: 'Concerns', path: '/treatments' },
            { name: data.title, path: canonical },
          ]),
          medicalConditionSchema({
            name: data.title,
            description: data.intro[0],
            treatments: data.treatments.map((t) => ({
              name: t.name,
              path: `/treatments#${t.slug}`,
            })),
          }),
          faqSchema(data.faqs),
        ]}
      />

      <PageHeader
        eyebrow="The Concern"
        title={data.h1.split(' ').slice(0, -2).join(' ')}
        accent={data.h1.split(' ').slice(-2).join(' ')}
        subtitle={data.intro[0]}
        image={data.image}
      />

      {/* Intro continued */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-bone">
        <div className="max-w-[800px] mx-auto">
          {data.intro.slice(1).map((p, i) => (
            <p key={i} className="text-onyx/75 font-light text-[1.05rem] md:text-[1.1rem] leading-[1.95] mb-6">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Causes */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-bone via-blush-50/40 to-bone">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-3 mb-6 text-rosegold-700">
            <AlertCircle size={16} strokeWidth={1.5} />
            <span className="eyebrow">Why it happens</span>
          </div>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Common causes of {data.title.toLowerCase()}
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {data.causes.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 bg-bone/70 backdrop-blur border border-blush-300/30"
              >
                <span className="font-mono text-[0.7rem] text-rosegold-500 mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-onyx/80 font-light leading-relaxed">{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Treatment approach */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-bone">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-6 text-rosegold-700">
            <Sparkles size={16} strokeWidth={1.5} />
            <span className="eyebrow">Dr. Matla's Approach</span>
          </div>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            How we treat it
          </h2>
          <div className="space-y-12">
            {data.treatmentApproach.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8 }}
                className="flex gap-6 md:gap-10"
              >
                <span className="font-display text-3xl md:text-4xl text-rosegold-500/40 leading-none shrink-0 w-12">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-light text-2xl md:text-[1.7rem] text-onyx tracking-[-0.015em] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-onyx/75 font-light text-[1.02rem] leading-[1.9]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended treatments */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-blush-50/30">
        <div className="max-w-[1000px] mx-auto">
          <span className="eyebrow text-rosegold-700">Recommended Treatments</span>
          <h2
            className="mt-4 font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            What we'll likely recommend
          </h2>
          <div className="space-y-4">
            {data.treatments.map((t) => (
              <Link
                key={t.slug}
                to={`/treatments#${t.slug}`}
                className="group block p-6 md:p-8 bg-bone/80 backdrop-blur border border-blush-300/40 hover:border-rosegold-500/50 hover:bg-bone transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-display font-light text-2xl md:text-[1.6rem] text-onyx tracking-[-0.015em] mb-2 group-hover:text-rosegold-700 transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-onyx/65 font-light leading-relaxed">
                      {t.summary}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-rosegold-600 mt-2 shrink-0 group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-bone">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="rosegold-rule" />
            <span className="eyebrow">Questions</span>
          </div>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-onyx tracking-[-0.02em] leading-[1.1] mb-12"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            About {data.title.toLowerCase()}
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

      <CTABanner />
    </>
  );
}
