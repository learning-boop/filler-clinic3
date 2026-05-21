import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const credentials = [
  {
    n: '01',
    title: 'MBBS, MRCGP, DFSRH, Cert. Cosmetic & Aesthetic Medicine',
    body: 'Newcastle-based GP with full GMC registration and Royal College of General Practice membership.',
  },
  {
    n: '02',
    title: 'CQC Registered Clinic',
    body: 'Fully regulated by the Care Quality Commission for the highest standards of patient safety and care.',
  },
  {
    n: '03',
    title: 'Aptos Thread Lift Trainer',
    body: 'Over 9 years of medical experience, training other practitioners in advanced thread lift techniques.',
  },
];

export default function About() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-bone via-blush-50 to-bone">
      {/* soft blush bloom */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(238,184,178,0.35) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* decorative outline frame behind */}
          <div
            aria-hidden
            className="absolute inset-0 border border-blush-300/45 translate-x-5 translate-y-5"
          />
          <div className="img-zoom relative aspect-[4/5] overflow-hidden shadow-onyx-lg">
            <img
              src="https://drmatla.com/wp-content/uploads/2023/10/Dr-Matla.jpg"
              alt="Dr Matla — GMC-registered aesthetic doctor at Fillers Clinic Newcastle"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-onyx-900 text-bone p-8 max-w-xs border border-blush-300/15">
            <div className="eyebrow-light mb-2">Newcastle upon Tyne</div>
            <p className="font-italiana text-[1.5rem] leading-[1.25] text-blush-100">
              "Building trust is the foundation of every transformation."
            </p>
            <div className="eyebrow-light mt-4">— Dr. Matla</div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="rosegold-rule" />
              <span className="eyebrow">About Dr Matla</span>
            </div>
            <h2
              className="font-display font-light text-onyx text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Medicine meets{' '}
              <span className="couture-italic rosegold-shimmer">artistry</span>.
            </h2>
            <p className="mt-8 max-w-xl text-onyx/70 font-light text-lg leading-[1.85]">
              Dr. Matla is a Newcastle-based GP practising both aesthetics and general medicine, with vast
              experience in medical emergencies and routine care. He believes the decision to pursue skin
              health and cosmetic enhancement is part of a much larger decision — to improve the overall
              quality of your life.
            </p>
            <p className="mt-5 max-w-xl text-onyx/70 font-light text-lg leading-[1.85]">
              Every patient receives a unique, individually tailored course of treatment that reflects
              their personal goals — delivered with the latest techniques for a comfortable recovery and
              swift, natural-looking results.
            </p>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            {credentials.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border-t border-blush-400/40 pt-6"
              >
                <div className="deco-num font-italiana text-rosegold-600 text-sm mb-3">
                  N°{p.n}
                </div>
                <h3 className="font-display text-xl text-onyx mb-2" style={{ fontVariationSettings: '"opsz" 60' }}>
                  {p.title}
                </h3>
                <p className="text-sm text-onyx/65 font-light leading-[1.75]">{p.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12"
          >
            <Link to="/contact" className="btn-luxury-outline">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}