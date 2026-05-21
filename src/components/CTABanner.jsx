import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/bgg.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover animate-kenburns"
        />
        {/* Onyx-blush gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(14,6,6,0.94) 0%, rgba(14,6,6,0.78) 40%, rgba(150,72,70,0.65) 80%, rgba(185,112,88,0.55) 100%)',
          }}
        />
      </div>

      {/* Film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Soft blush bloom */}
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[40rem] h-[40rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(238,184,178,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="rosegold-rule-light" />
            <span className="eyebrow-light">Begin Your Journey</span>
            <span className="rosegold-rule-light" />
          </div>

          <h2
            className="font-display font-light text-bone text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Your consultation
            <br />
            <span className="couture-italic blush-text-light">awaits</span>.
          </h2>

          <p className="mt-9 text-bone/72 max-w-xl mx-auto font-light text-base md:text-[1.05rem] leading-[1.85]">
            A private 45-minute discussion with Dr. Matla. No obligation — only clarity,
            expertise, and a plan tailored entirely to you.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-luxury-blush group">
              Book Consultation
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </Link>
            <a href="tel:+441912000000" className="btn-luxury-ghost-light">
              +44 (0)191 200 0000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
