import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, accent, subtitle, image, imageDisclaimer }) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-bone">
      {/* Soft blush mesh */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 18% 12%, rgba(250,232,230,0.95) 0px, transparent 50%), radial-gradient(at 85% 8%, rgba(245,213,209,0.55) 0px, transparent 55%), radial-gradient(at 12% 88%, rgba(252,244,243,0.60) 0px, transparent 50%), radial-gradient(at 88% 92%, rgba(238,184,178,0.40) 0px, transparent 45%)',
        }}
      />

      {/* Soft bloom */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[40rem] h-[40rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(238,184,178,0.30) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="rosegold-rule" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1
            className="font-display font-light text-onyx text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[1.02]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {title}{' '}
            {accent && (
              <span className="couture-italic rosegold-shimmer">{accent}</span>
            )}
          </h1>
          {subtitle && (
            <div className="mt-9 flex items-start gap-5 max-w-xl">
              <div className="mt-3 w-px h-14 bg-gradient-to-b from-blush-500/70 via-rosegold-500/30 to-transparent shrink-0" />
              <p className="text-onyx/70 font-light text-base md:text-[1.05rem] leading-[1.85]">
                {subtitle}
              </p>
            </div>
          )}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Decorative outline frame */}
            <div
              aria-hidden
              className="absolute inset-0 border border-blush-400/30 translate-x-5 translate-y-5"
            />
            <div className="img-zoom relative aspect-[4/5] overflow-hidden shadow-onyx-lg">
              <img
                src={image}
                alt="Fillers Clinic Newcastle — aesthetic treatment"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* Subtle blush tint at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(150,72,70,0.18) 100%)',
                }}
              />
            </div>
            {imageDisclaimer && (
              <p className="mt-3 text-[0.68rem] text-onyx/35 font-light italic leading-relaxed tracking-wide">
                {imageDisclaimer}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}