import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Clock, Sparkles, CheckCircle2, HelpCircle, ChevronDown, ChevronUp,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import { treatments } from '../data/treatments';
import SEO from '../seo/SEO';
import {
  medicalProcedureSchema,
  breadcrumbSchema,
  faqSchema,
} from '../seo/schemas';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blush-300/30 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-light text-onyx/85 text-[0.95rem] leading-relaxed group-hover:text-onyx transition-colors duration-300">
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-rosegold-600 shrink-0 mt-1" strokeWidth={1.5} />
        ) : (
          <ChevronDown size={16} className="text-rosegold-600 shrink-0 mt-1" strokeWidth={1.5} />
        )}
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="pb-5 text-onyx/65 font-light text-sm leading-[1.85]"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
}

// Scroll to hash on mount
function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
    }
  }, []);
}

export default function TreatmentsPage() {
  useScrollToHash();

  // Build a MedicalProcedure schema for each treatment, plus FAQ schema
  // for whichever treatments have FAQs in the data file.
  const procedureSchemas = treatments.map((t) =>
    medicalProcedureSchema({
      name: t.name,
      description: t.short || t.overview,
      path: `/treatments#${t.slug}`,
      image: t.image,
      duration: t.duration,
    })
  );

  const allFaqs = treatments.flatMap((t) =>
    (t.faqs || []).map((f) => ({ q: f.q, a: f.a }))
  );

  return (
    <>
      <SEO
        title="Treatments | Lip, Cheek, Jawline, Tear Trough & Chin Fillers Newcastle"
        description="Premium dermal filler treatments in Newcastle upon Tyne. Lip enhancement, cheek contouring, jawline definition, tear trough rejuvenation, chin profile and Profhilo — delivered by Dr Matla."
        keywords="dermal fillers Newcastle, lip enhancement Newcastle, cheek contouring Newcastle, jawline definition Newcastle, tear trough Newcastle, chin filler Newcastle, Profhilo Newcastle"
        canonical="/treatments"
        image="/assets/bgg.webp"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Treatments', path: '/treatments' },
          ]),
          ...procedureSchemas,
          ...(allFaqs.length ? [faqSchema(allFaqs)] : []),
        ]}
      />
      <PageHeader
        eyebrow="The Menu"
        title="A curated study of"
        accent="proportion."
        subtitle="Each treatment is a quiet conversation between anatomy and aesthetic. Pricing is discussed personally at consultation — tailored to your unique goals."
        image="/assets/bgg.webp"
      />

      {/* Sticky quick nav */}
      <nav className="sticky top-20 z-40 bg-bone/92 backdrop-blur-xl border-b border-blush-300/40 hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
            {treatments.map((t) => (
              <a
                key={t.slug}
                href={`#${t.slug}`}
                className="eyebrow text-onyx/55 hover:text-rosegold-700 transition-colors duration-300 whitespace-nowrap"
              >
                {t.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 lg:px-20 pb-32 pt-20 relative">
        {/* Soft ambient bloom */}
        <div
          aria-hidden
          className="absolute top-40 -left-32 w-[40rem] h-[40rem] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(238,184,178,0.18) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1400px] mx-auto space-y-40 relative">
          {treatments.map((t, i) => (
            <motion.article
              id={t.slug}
              key={t.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative scroll-mt-32"
            >
              {/* Number divider */}
              {/* <div className="flex items-center gap-6 mb-14">
                <div
                  className="font-italiana italic text-5xl text-rosegold-400/85 leading-none select-none deco-num"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  N°{String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-rosegold-400/40 via-blush-300/30 to-transparent" />
              </div> */}

              {/* Image + detail grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                  i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image column */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    {/* Decorative outline frame */}
                    <div
                      aria-hidden
                      className="absolute inset-0 border border-blush-400/30 translate-x-5 translate-y-5 pointer-events-none"
                    />
                    <div className="img-zoom relative aspect-[4/5] overflow-hidden shadow-onyx-lg">
                      <img
                        src={t.image}
                        alt={`${t.name} treatment at Fillers Clinic Newcastle — ${t.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Top editorial label */}
                      {/* <div className="absolute top-4 left-4 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-bone/90 bg-onyx-900/55 backdrop-blur-md px-2.5 py-1.5">
                        N° {String(i + 1).padStart(2, '0')}
                      </div> */}
                    </div>
                  </div>

                  {/* Price card */}
                                  </div>

                {/* Content column */}
                <div className="lg:col-span-7">
                  <h2
                    className="font-display font-light text-onyx text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.02]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {t.name}
                  </h2>
                  <p className="mt-3 font-italiana italic text-blush-600 text-lg md:text-xl">
                    {t.tagline}
                  </p>

                  {/* Stats strip */}
                  <dl className="mt-9 grid grid-cols-2 gap-6 max-w-sm border-t border-b border-blush-400/30 py-6">
                    <div className="flex items-start gap-2.5">
                      <Clock size={14} className="text-rosegold-600 mt-1.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <dt className="eyebrow-onyx">Duration</dt>
                        <dd
                          className="font-display font-light text-2xl text-onyx mt-1.5"
                          style={{ fontVariationSettings: '"opsz" 60' }}
                        >
                          {t.duration}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Sparkles size={14} className="text-rosegold-600 mt-1.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <dt className="eyebrow-onyx">Results Last</dt>
                        <dd
                          className="font-display font-light text-2xl text-onyx mt-1.5"
                          style={{ fontVariationSettings: '"opsz" 60' }}
                        >
                          {t.longevity}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  {/* Overview */}
                  <div className="mt-10">
                    <h3 className="eyebrow mb-4">About This Treatment</h3>
                    <p className="text-onyx/72 font-light leading-[1.9] text-[0.97rem]">
                      {t.overview}
                    </p>
                  </div>

                  {/* What to Expect */}
                  <div className="mt-10">
                    <h3 className="eyebrow mb-5">What to Expect</h3>
                    <ul className="space-y-3.5">
                      {t.whatToExpect.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={15}
                            className="text-rosegold-500 shrink-0 mt-[3px]"
                            strokeWidth={1.5}
                          />
                          <span className="text-onyx/72 font-light text-sm leading-[1.85]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-10">
                    <h3 className="eyebrow mb-5">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {t.benefits.map((b, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 bg-blush-50/70 border border-blush-200/55 px-4 py-3.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rosegold-500 shrink-0 mt-2" />
                          <span className="text-onyx/72 font-light text-sm leading-relaxed">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="mt-12">
                    <div className="flex items-center gap-3 mb-5">
                      <HelpCircle size={15} className="text-rosegold-600" strokeWidth={1.5} />
                      <h3 className="eyebrow">Common Questions</h3>
                    </div>
                    <div className="border-t border-blush-300/30">
                      {t.faqs.map((faq, idx) => (
                        <FAQItem key={idx} q={faq.q} a={faq.a} />
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Link to="https://portal.aestheticnursesoftware.com/book-online/1150" className="btn-luxury-primary group">
                      Book Consultation
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                      />
                    </Link>
                    <Link to="/contact" className="btn-luxury-outline">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* <CTABanner /> */}
    </>
  );
}
