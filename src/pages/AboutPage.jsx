import PageHeader from '../components/PageHeader';
import About from '../components/About';
import CTABanner from '../components/CTABanner';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import { physicianSchema, breadcrumbSchema } from '../seo/schemas';

const stats = [
  { n: '9+', label: 'Years in medicine' },
  { n: '2800 +', label: 'Happy Patients' },
  { n: '98%', label: 'operations Successful' },
  { n: '4', label: 'Medical Qualifications' },
];

const accreditations = [
  'Aptos Thread Lift Trainer',
  'CQC Registered Clinic',
  'General Practitioner (MBBS, MRCGP, DFSRH)',
  'Over 9 years experience in medicine',
  'Registered with the General Medical Council',
  'Membership in Royal College of General Practice',
];

const clinicImages = [
  'https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-1.jpg',
  'https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-4.jpg',
  'https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-3.jpg',
  'https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS.jpg',
];

const treatments = [
  { name: 'Aptos Thread Lift', desc: 'Transform your face, neck and body with thread lift expert Dr Matla.' },
  { name: 'Dermal Fillers', desc: 'Cheeks, jawline, chin, nose, lips and tear trough fillers.' },
  { name: 'PDO Thread Lift', desc: 'High quality MINT threads for the face, neck and body.' },
  { name: 'PRP for Hair Loss', desc: 'PRP hair loss treatment for men and women — regain your confidence.' },
  { name: 'Skin Boosters', desc: 'Exosomes, Klardie, Neofound, Polynucleotides, Profhilo and PRP facials.' },
  { name: 'Anti-Wrinkle', desc: 'Refined, natural-looking results led by medical expertise.' },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Dr Matla — Aesthetic Doctor in Newcastle"
        description="Meet Dr Matla — GMC-registered aesthetic doctor and clinical director of Fillers Clinic Newcastle. MBBS, MRCGP, DFSRH, with 9+ years in medicine and a refined approach to natural-looking enhancement."
        keywords="Dr Matla, aesthetic doctor Newcastle, GMC registered Newcastle, CQC clinic Newcastle, MRCGP, MBBS, Aptos Thread Lift, dermal fillers Newcastle"
        canonical="/about"
        type="article"
        image="https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-1.jpg"
        jsonLd={[
          physicianSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Aesthetics Clinic Newcastle"
        title="About"
        accent="Dr Matla."
        subtitle="MBBS, MRCGP, DFSRH — a Newcastle-based GP and aesthetic physician dedicated to medical-grade, individually tailored care."
        image="https://drmatla.com/wp-content/uploads/2021/09/DRMATLACLINICSHOTS-1.jpg"
      />

      <About />

      {/* Stats — Onyx section */}
      <section className="section relative overflow-hidden" style={{ background: '#0E0606' }}>
        {/* Onyx mesh */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(at 20% 20%, rgba(58,44,44,0.85) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(150,72,70,0.40) 0px, transparent 55%), radial-gradient(at 80% 100%, rgba(37,26,26,0.85) 0px, transparent 50%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="border-t border-blush-300/25 pt-7"
            >
              <div
                className="font-display font-light text-5xl md:text-6xl rosegold-shimmer tracking-[-0.02em]"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {s.n}
              </div>
              <div className="eyebrow-light mt-4">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section className="section bg-gradient-to-b from-bone via-blush-50/40 to-bone relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[36rem] h-[36rem] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(238,184,178,0.25) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 relative">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="rosegold-rule" />
              <span className="eyebrow">Credentials</span>
            </div>
            <h2
              className="font-display font-light text-onyx text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Qualifications &
              <br />
              <span className="couture-italic rosegold-shimmer">accreditations</span>.
            </h2>
            <p className="mt-7 text-onyx/70 font-light leading-[1.85] max-w-md">
              Dr Matla's practice is grounded in over two decades of medical training and ongoing
              professional development across both general and aesthetic medicine.
            </p>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {accreditations.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="flex items-start gap-4 border-b border-blush-400/30 pb-5"
              >
                <span className="font-italiana italic text-rosegold-600 text-sm mt-1 deco-num">
                  N°{String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-display font-light text-onyx text-lg leading-snug tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  {a}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clinic gallery */}
      <section className="section bg-bone relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(209,123,119,0.15) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="rosegold-rule" />
            <span className="eyebrow">Inside the Clinic</span>
          </div>
          <h2
            className="font-display font-light text-onyx text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02] mb-16"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            A discreet space in{' '}
            <span className="couture-italic rosegold-shimmer">Newcastle</span>.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="img-zoom aspect-[3/4] overflow-hidden shadow-onyx-sm hover:shadow-onyx transition-shadow duration-700"
              >
                <img
                  src={src}
                  alt={`Fillers Clinic Newcastle — Dr Matla clinic interior ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature treatments */}
      <section className="section bg-gradient-to-b from-bone via-blush-50/40 to-bone">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="rosegold-rule" />
            <span className="eyebrow">Signature Treatments</span>
          </div>
          <h2
            className="font-display font-light text-onyx text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02] mb-16"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Expertly{' '}
            <span className="couture-italic rosegold-shimmer">delivered</span>.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {treatments.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="border-t border-blush-400/40 pt-7"
              >
                <div className="deco-num font-italiana italic text-rosegold-600 text-sm mb-3">
                  N°{String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="font-display font-light text-2xl text-onyx mb-3 tracking-[-0.015em]"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  {t.name}
                </h3>
                <p className="text-sm text-onyx/65 font-light leading-[1.85]">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </>
  );
}
