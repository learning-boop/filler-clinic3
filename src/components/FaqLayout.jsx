import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CTABanner from './CTABanner';
import SEO from '../seo/SEO';
import { faqSchema, breadcrumbSchema } from '../seo/schemas';

export const faqNav = [
  { to: '/faq', label: 'All Topics' },
  { to: '/faq/lip-fillers', label: 'Lip Fillers' },
  { to: '/faq/jawline-chin', label: 'Jawline & Chin' },
  { to: '/faq/cheek-fillers', label: 'Cheek Fillers' },
  { to: '/faq/tear-trough', label: 'Tear Trough' },
  { to: '/faq/skin-anti-ageing', label: 'Skin & Anti-Ageing' },
  { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
  { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
  { to: '/faq/treatment-comparisons', label: 'Treatment Comparisons' },
];

function useActiveQuestion(ids) {
  const [active, setActive] = useState(ids[0] || '');
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [ids]);
  return active;
}

export default function FaqLayout({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  faqs,
  relatedTreatments,
  relatedLinks,
  seo,
}) {
  const location = useLocation();
  const ids = faqs.map((_, i) => `q-${i}`);
  const active = useActiveQuestion(ids);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Build SEO defaults from the props we already have
  const pageTitle =
    seo?.title || `${breadcrumb || title} FAQ — Fillers Clinic Newcastle`;
  const pageDescription =
    seo?.description ||
    subtitle ||
    `Expert answers about ${breadcrumb} from Dr Matla at Fillers Clinic Newcastle.`;
  const canonical = seo?.canonical || location.pathname;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        keywords={
          seo?.keywords ||
          `${breadcrumb} Newcastle, ${breadcrumb} FAQ, Dr Matla, Fillers Clinic Newcastle, aesthetic clinic Newcastle`
        }
        jsonLd={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
            { name: breadcrumb || title, path: location.pathname },
          ]),
        ]}
      />
      {/* ── HERO HEADER ──────────────────────────────────── */}
      <section
        className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgb(36, 5, 5) 0%, #170702 60%, #1a0505 100%)' }}
      >
        {/* Subtle grain */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Blush bloom */}
        <div
          aria-hidden
          className="absolute -top-20 right-0 w-[36rem] h-[36rem] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(209,123,119,0.18) 0%, transparent 65%)', filter: 'blur(80px)' }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-[0.65rem] uppercase tracking-luxury text-bone/35">
            <Link to="/" className="hover:text-bone/70 transition-colors">Home</Link>
            <ChevronRight size={10} className="text-bone/20" />
            <Link to="/faq" className="hover:text-bone/70 transition-colors">FAQ & Guides</Link>
            <ChevronRight size={10} className="text-bone/20" />
            <span className="text-rosegold-400/80">{breadcrumb || eyebrow}</span>
          </nav>

          <div className="mb-3 text-[0.65rem] uppercase tracking-luxury text-rosegold-400/70 font-medium">
            FAQ — {eyebrow}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-bone text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.08] max-w-3xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-bone/55 font-light text-[0.92rem] leading-[1.85] max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────── */}
      <section className="bg-bone py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

            {/* ── MAIN CONTENT ── */}
            <div className="lg:col-span-8 xl:col-span-8">
              {faqs.map((faq, i) => (
                <motion.article
                  key={i}
                  id={`q-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-14 md:mb-20 scroll-mt-28"
                >
                  {/* Question number */}
                  <div className="text-[0.6rem] uppercase tracking-[0.2em] text-rosegold-500/60 font-medium mb-4">
                    Question {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Question heading */}
                  <h2
                    className="font-display font-light text-onyx text-2xl md:text-3xl tracking-[-0.02em] leading-[1.2] mb-6"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {faq.q}
                  </h2>

                  {/* Divider */}
                  <div className="w-10 h-px bg-gradient-to-r from-rosegold-500 to-transparent mb-6" />

                  {/* Answer paragraphs */}
                  <div className="space-y-4">
                    {(Array.isArray(faq.paragraphs) ? faq.paragraphs : [faq.a]).map((para, j) => (
                      <p key={j} className="text-onyx/65 font-light text-[0.93rem] leading-[1.9]">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.article>
              ))}

              {/* CTA at bottom */}
              <div className="mt-6 pt-10 border-t border-onyx/8 flex flex-col sm:flex-row gap-4">
                <Link to="https://portal.aestheticnursesoftware.com/book-online/1150" className="btn-luxury-primary">
                  Book a Consultation
                </Link>
                <Link to="/faq" className="btn-luxury-outline">
                  View All FAQ Topics
                </Link>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <aside className="lg:col-span-4 xl:col-span-4">
              <div className="sticky top-28 space-y-6">

                {/* Questions on this page */}
                <div className="bg-white border border-onyx/6 p-6 rounded-sm shadow-sm">
                  <p className="text-[0.6rem] uppercase tracking-luxury text-onyx/35 mb-5 font-medium">
                    Questions on this page
                  </p>
                  <div className="h-px bg-onyx/6 mb-5" />
                  <nav className="flex flex-col gap-1">
                    {faqs.map((faq, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(`q-${i}`)}
                        className={`flex items-start gap-2.5 py-2 text-left group transition-colors duration-200 ${
                          active === `q-${i}` ? 'text-onyx' : 'text-onyx/45 hover:text-onyx/80'
                        }`}
                      >
                        <span
                          className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                            active === `q-${i}` ? 'bg-rosegold-500' : 'bg-onyx/15 group-hover:bg-onyx/30'
                          }`}
                        />
                        <span className="text-[0.75rem] leading-snug font-light">{faq.q}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Related Treatments */}
                {relatedTreatments && relatedTreatments.length > 0 && (
                  <div className="bg-white border border-onyx/6 p-6 rounded-sm shadow-sm">
                    <p className="text-[0.6rem] uppercase tracking-luxury text-onyx/35 mb-5 font-medium">
                      Related Treatments
                    </p>
                    <div className="h-px bg-onyx/6 mb-5" />
                    <div className="flex flex-col gap-3">
                      {relatedTreatments.map((t) => (
                        <Link
                          key={t.to}
                          to={t.to}
                          className="group flex items-center gap-2.5 text-[0.78rem] text-onyx/55 hover:text-onyx transition-colors duration-200"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-rosegold-400/40 group-hover:bg-rosegold-500 transition-colors" />
                          {t.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Browse other FAQ topics */}
                <div className="bg-white border border-onyx/6 p-6 rounded-sm shadow-sm">
                  <p className="text-[0.6rem] uppercase tracking-luxury text-onyx/35 mb-5 font-medium">
                    Browse FAQ Topics
                  </p>
                  <div className="h-px bg-onyx/6 mb-5" />
                  <nav className="flex flex-col gap-1">
                    {faqNav.slice(1).map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-center gap-2 py-1.5 text-[0.75rem] font-light transition-colors duration-200 border-l-2 pl-3 ${
                          location.pathname === item.to
                            ? 'border-blush-500 text-onyx'
                            : 'border-transparent text-onyx/45 hover:text-onyx hover:border-blush-300'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Mini CTA */}
                <div
                  className="p-6 rounded-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0E0606 0%, #3A2C2C 100%)' }}
                >
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(209,123,119,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
                  />
                  <p className="text-[0.6rem] uppercase tracking-luxury text-bone/35 mb-3">Ready to begin?</p>
                  <p className="font-display font-light text-bone text-lg leading-snug mb-5" style={{ fontVariationSettings: '"opsz" 144' }}>
                    Book your private consultation.
                  </p>
                  <Link
                    to="https://portal.aestheticnursesoftware.com/book-online/1150"
                    className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-luxury font-medium text-rosegold-300 hover:text-rosegold-200 transition-colors"
                  >
                    Book Now <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </>
  );
}
