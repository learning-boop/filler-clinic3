import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, ArrowRight } from 'lucide-react';
import { treatments, treatmentsDisclaimer } from '../data/treatments';
export default function Treatments() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-bone via-blush-50/40 to-bone">
      {/* Soft ambient bloom */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(238,184,178,0.25) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(209,123,119,0.18) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="rosegold-rule" />
              <span className="eyebrow">Our Treatments</span>
            </div>
            <h2
              className="font-display font-light text-onyx text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              A curated{' '}
              <span className="couture-italic rosegold-shimmer">menu</span>
              <br />
              of refinement.
            </h2>
          </div>
          <Link to="/treatments" className="btn-luxury-outline self-start md:self-end">
            Explore All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {treatments.slice(0, 6).map((t, i) => (
            <motion.article
              key={t.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link to={`/treatments#${t.slug}`} className="block">
                {/* Image */}
                <div className="img-zoom relative h-[380px] overflow-hidden rounded-[24px] bg-blush-100 shadow-onyx-sm group-hover:shadow-onyx transition-all duration-700">
                  <img
                    src={t.image}
                    alt={`${t.name} — ${t.tagline} | Fillers Clinic Newcastle`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Onyx gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/55 via-onyx-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bone/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-onyx-sm">
                    <ArrowUpRight size={15} className="text-onyx" strokeWidth={1.5} />
                  </div>

                  
                </div>

                {/* Card body */}
                <div className="pt-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className="font-display font-light text-2xl md:text-[1.75rem] text-onyx tracking-[-0.015em]"
                      style={{ fontVariationSettings: '"opsz" 60' }}
                    >
                      {t.name}
                    </h3>
                    <span className="font-italiana text-rosegold-600 text-base shrink-0">
                      {t.price}
                    </span>
                  </div>
                  <p className="mt-2 font-italiana italic text-blush-600 text-[0.95rem]">
                    {t.tagline}
                  </p>
                  <p className="mt-4 text-onyx/65 text-sm leading-[1.85] font-light">
                    {t.short}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-[0.7rem] text-rosegold-700 font-medium tracking-luxury uppercase group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <p className="text-center text-[11px] text-onyx/45 leading-relaxed mt-14 max-w-2xl mx-auto">
  {treatmentsDisclaimer}
</p>

        {/* Cross-links: concerns + locations */}
        {/* <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-blush-300/30 p-7 bg-bone/60">
            <span className="eyebrow text-rosegold-700">By Concern</span>
            <ul className="mt-5 space-y-2 font-display text-lg">
              <li><Link to="/concerns/thin-lips" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Thin lips</Link></li>
              <li><Link to="/concerns/under-eye-hollows" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Under-eye hollows</Link></li>
              <li><Link to="/concerns/facial-volume-loss" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Facial volume loss</Link></li>
              <li><Link to="/concerns/jawline-definition" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Soft / undefined jawline</Link></li>
            </ul>
          </div>
          <div className="border border-blush-300/30 p-7 bg-bone/60">
            <span className="eyebrow text-rosegold-700">By Location</span>
            <ul className="mt-5 space-y-2 font-display text-lg">
              <li><Link to="/locations/lip-fillers-newcastle" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Lip fillers Newcastle</Link></li>
              <li><Link to="/locations/cheek-fillers-sunderland" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Cheek fillers Sunderland</Link></li>
              <li><Link to="/locations/jawline-fillers-durham" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Jawline fillers Durham</Link></li>
              <li><Link to="/locations/tear-trough-fillers-gateshead" className="block py-2 min-h-[40px] text-onyx/80 hover:text-rosegold-700 transition-colors">Tear trough Gateshead</Link></li>
            </ul>
          </div>
        </div> */}

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center border-t border-blush-300/35 pt-16"
        >
          <p className="text-onyx/60 font-light mb-7 max-w-md mx-auto leading-relaxed">
            Pricing is discussed during your personal consultation — tailored to your unique goals.
          </p>
          <Link to="/contact" className="btn-luxury-primary">
            Book a Free Consultation
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}