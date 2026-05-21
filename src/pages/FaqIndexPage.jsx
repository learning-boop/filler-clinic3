import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import { faqNav } from '../components/FaqLayout';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/schemas';

const topics = [
  { to: '/faq/lip-fillers', num: '01', label: 'Lip Filler Questions', desc: 'Shape, longevity, natural results, pain, and asymmetry corrections.', count: 5 },
  { to: '/faq/jawline-chin', num: '02', label: 'Jawline & Chin Questions', desc: 'Contouring, chin projection, facial balancing, and sculpting.', count: 5 },
  { to: '/faq/cheek-fillers', num: '03', label: 'Cheek Filler Questions', desc: 'Volume restoration, lifting effect, youthfulness, and duration.', count: 5 },
  { to: '/faq/tear-trough', num: '04', label: 'Tear Trough Questions', desc: 'Under-eye hollows, dark circles, tired appearance, and safety.', count: 5 },
  { to: '/faq/skin-anti-ageing', num: '05', label: 'Skin & Anti-Ageing', desc: 'Wrinkle reduction, skin tightening, non-surgical rejuvenation.', count: 5 },
  { to: '/faq/prp-skin', num: '06', label: 'PRP & Skin Rejuvenation', desc: 'Platelet therapy, texture improvement, glow, acne scarring.', count: 5 },
  { to: '/faq/cost-pricing', num: '07', label: 'Cost & Pricing', desc: 'Investment guides, what affects price, payment options.', count: 5 },
  { to: '/faq/safety-recovery', num: '08', label: 'Safety & Recovery', desc: 'Aftercare, downtime, bruising, contraindications, and risks.', count: 5 },
  { to: '/faq/treatment-comparisons', num: '09', label: 'Treatment Comparisons', desc: 'Fillers vs. Botox, surgical vs. non-surgical, HA vs. other fillers.', count: 5 },
];

export default function FaqIndexPage() {
  return (
    <>
      <SEO
        title="FAQ & Guides — Aesthetic Treatments | Fillers Clinic Newcastle"
        description="Every question we're asked about fillers — lip, cheek, jawline, tear trough, anti-ageing, pricing and safety — answered by Dr Matla. Organised by treatment for easy reference."
        keywords="aesthetic FAQ Newcastle, filler questions Newcastle, lip filler FAQ, cheek filler FAQ, tear trough FAQ, Dr Matla FAQ, Fillers Clinic Newcastle questions"
        canonical="/faq"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'FAQ & Guides — Fillers Clinic Newcastle',
            description:
              'Hub page for all FAQ topics organised by treatment area at Fillers Clinic Newcastle.',
            url: 'https://fillers.skin/faq',
            hasPart: topics.map((t) => ({
              '@type': 'WebPage',
              name: t.label,
              url: `https://fillers.skin${t.to}`,
            })),
          },
        ]}
      />
      <PageHeader
        eyebrow="FAQ & Guides"
        title="Everything you need"
        accent="to know."
        subtitle="Browse every question we're asked — organised by treatment so you can find exactly what you're looking for before your consultation."
      />

      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-onyx/6">
            {topics.map((t, i) => (
              <motion.div
                key={t.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={t.to}
                  className="group flex flex-col gap-5 p-8 md:p-10 bg-bone hover:bg-blush-50/60 transition-colors duration-400 h-full">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[0.6rem] tracking-widest text-rosegold-500/50">{t.num}</span>
                    <span className="text-[0.6rem] uppercase tracking-luxury text-onyx/25 border border-onyx/10 px-2.5 py-1 rounded-full">
                      {t.count} questions
                    </span>
                  </div>
                  <div className="h-px w-8 group-hover:w-16 bg-gradient-to-r from-rosegold-500 to-transparent transition-all duration-500" />
                  <h2 className="font-display font-light text-onyx text-xl md:text-2xl tracking-[-0.02em] leading-snug group-hover:text-blush-700 transition-colors duration-300"
                    style={{ fontVariationSettings: '"opsz" 144' }}>
                    {t.label}
                  </h2>
                  <p className="text-onyx/50 font-light text-[0.88rem] leading-[1.8] flex-1">{t.desc}</p>
                  <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-luxury text-rosegold-600 group-hover:text-rosegold-700 transition-colors">
                    <span>Read Questions</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </>
  );
}
