import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveHorizontal } from 'lucide-react';
import { results } from '../data/treatments';

/* ─────────────────────────────────────────────────────────────
   Luxury Before / After comparison card
   • Much larger footprint (responsive up to 480 × 640)
   • Etched gold corner brackets
   • Sculpted slider handle with rose-gold rim
   • Hover-lift with rosegold glow
   ───────────────────────────────────────────────────────────── */
function GoldBracket({ className, rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 22 L2 2 L22 2"
        stroke="url(#brkGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="1.6" fill="#DBA38D" />
      <defs>
        <linearGradient id="brkGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#DBA38D" stopOpacity="1" />
          <stop offset="1" stopColor="#B97058" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

function BeforeAfter({ before, after, treatment, note, index }) {
  const [pos, setPos] = useState(50);
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  const onMove = (clientX) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  };

  // ── Mobile: side-by-side static layout
  if (isMobile) {
    return (
      <div className="group">
        <div className="grid grid-cols-2 gap-2">
          {/* Before */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={before}
              alt={`${treatment} — before treatment at Fillers Clinic Newcastle`}
              className="w-full h-52 object-cover object-center"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div
              className="absolute top-2 left-2 text-[0.55rem] uppercase tracking-luxury font-medium text-bone px-2.5 py-1"
              style={{
                background: 'rgba(14,6,6,0.65)',
                border: '1px solid rgba(219,163,141,0.22)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              Before
            </div>
            <GoldBracket className="absolute top-1.5 left-1.5 w-5 h-5 pointer-events-none" rotate={0} />
            <GoldBracket className="absolute bottom-1.5 left-1.5 w-5 h-5 pointer-events-none" rotate={270} />
          </div>

          {/* After */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={after}
              alt={`${treatment} — after treatment result at Fillers Clinic Newcastle`}
              className="w-full h-52 object-cover object-center"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div
              className="absolute top-2 right-2 text-[0.55rem] uppercase tracking-luxury font-medium text-onyx-900 px-2.5 py-1"
              style={{
                background: 'linear-gradient(135deg, #FAE8E6 0%, #EEB8B2 100%)',
                border: '1px solid rgba(185,112,88,0.30)',
                boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.55)',
              }}
            >
              After
            </div>
            <GoldBracket className="absolute top-1.5 right-1.5 w-5 h-5 pointer-events-none" rotate={90} />
            <GoldBracket className="absolute bottom-1.5 right-1.5 w-5 h-5 pointer-events-none" rotate={180} />
          </div>
        </div>

        {/* Caption */}
        <div className="pt-4 px-1 flex items-baseline justify-between gap-4">
          <h3
            className="font-display font-light text-xl text-bone tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 60' }}
          >
            {treatment}
          </h3>
          <span className="font-italiana italic text-blush-300 text-sm whitespace-nowrap">
            {note}
          </span>
        </div>
        <div className="mt-2 px-1 h-px bg-gradient-to-r from-rosegold-400/30 via-blush-300/15 to-transparent" />
      </div>
    );
  }

  return (
    <div className="group">
      {/* ── CARD WRAPPER ── */}
      <div className="relative mx-auto w-full max-w-[480px]">
        {/* Champagne glow on hover */}
        <div
          className="absolute -inset-6 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(238,184,178,0.32) 0%, rgba(185,112,88,0.10) 50%, transparent 75%)',
            filter: 'blur(28px)',
          }}
        />

        {/* The card itself */}
        <motion.div
          ref={cardRef}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[3/4] overflow-hidden rounded-[1.6rem]
                     select-none cursor-ew-resize bg-onyx-900
                     shadow-[0_45px_110px_-25px_rgba(0,0,0,0.65)]"
          style={{
            border: '1px solid rgba(219,163,141,0.30)',
          }}
          onMouseMove={(e) => onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
        >
          {/* After (full image base — always fills the entire card) */}
          <img
            src={after}
            alt={`${treatment} — after treatment result at Fillers Clinic Newcastle`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          {/* Before — same size/position as After, clipped to left side by clipPath */}
          <img
            src={before}
            alt={`${treatment} — before treatment at Fillers Clinic Newcastle`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          {/* Subtle cinematic wash */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-soft-light pointer-events-none opacity-60"
            style={{
              background:
                'linear-gradient(160deg, rgba(238,184,178,0.10) 0%, transparent 40%, rgba(14,6,6,0.30) 100%)',
            }}
          />

          {/* Film grain */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* Inner gold inset rule */}
          <div
            aria-hidden
            className="absolute inset-3 rounded-[1.3rem] pointer-events-none"
            style={{ border: '1px solid rgba(219,163,141,0.18)' }}
          />

          
          {/* ── Before label (top-left) */}
          <div className="absolute top-5 left-5 z-10 pointer-events-none">
            <div
              className="text-[0.6rem] uppercase tracking-luxury font-medium text-bone px-3.5 py-1.5"
              style={{
                background: 'rgba(14,6,6,0.65)',
                border: '1px solid rgba(219,163,141,0.22)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              Before
            </div>
          </div>

          {/* ── After label (top-right) */}
          <div className="absolute top-5 right-5 z-10 pointer-events-none">
            <div
              className="text-[0.6rem] uppercase tracking-luxury font-medium text-onyx-900 px-3.5 py-1.5"
              style={{
                background:
                  'linear-gradient(135deg, #FAE8E6 0%, #EEB8B2 100%)',
                border: '1px solid rgba(185,112,88,0.30)',
                boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.55)',
              }}
            >
              After
            </div>
          </div>

          {/* ── Etched gold corner brackets */}
          <GoldBracket className="absolute top-2 left-2 w-7 h-7 z-10 pointer-events-none" rotate={0} />
          <GoldBracket className="absolute top-2 right-2 w-7 h-7 z-10 pointer-events-none" rotate={90} />
          <GoldBracket className="absolute bottom-2 right-2 w-7 h-7 z-10 pointer-events-none" rotate={180} />
          <GoldBracket className="absolute bottom-2 left-2 w-7 h-7 z-10 pointer-events-none" rotate={270} />

          {/* ── Slider line + sculpted handle */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none z-20"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
          >
            {/* The vertical line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
              style={{
                background:
                  'linear-gradient(180deg, transparent 0%, rgba(250,232,230,0.95) 15%, rgba(250,232,230,0.95) 85%, transparent 100%)',
                boxShadow: '0 0 22px rgba(250,232,230,0.55)',
              }}
            />

            {/* The handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #FBF7F6 0%, #F5D5D1 55%, #DBA38D 100%)',
                  boxShadow:
                    '0 12px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(185,112,88,0.45), inset 0 1px 0 0 rgba(255,255,255,0.7)',
                }}
              >
                <MoveHorizontal
                  size={18}
                  strokeWidth={1.5}
                  className="text-rosegold-700"
                />
                {/* Outer pulse ring */}
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{
                    border: '1px solid rgba(238,184,178,0.6)',
                    animationDuration: '3s',
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Drag hint (bottom-center, fades on hover) */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none
                       opacity-90 group-hover:opacity-0 transition-opacity duration-500"
          >
            <div
              className="font-italiana text-blush-100 text-[0.78rem] tracking-[0.18em] px-4 py-1.5"
              style={{
                background: 'rgba(14,6,6,0.50)',
                border: '1px solid rgba(219,163,141,0.22)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              drag to reveal
            </div>
          </div>

          {/* ── Case number (bottom-right) */}
          <div className="absolute bottom-5 right-5 z-10 pointer-events-none">
            <span
              className="font-italiana text-bone/40 text-[0.7rem] tracking-[0.2em]"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Treatment caption */}
      <div className="pt-6 px-2 flex items-baseline justify-between gap-4">
        <h3
          className="font-display font-light text-2xl md:text-[1.7rem] text-bone tracking-[-0.015em]"
          style={{ fontVariationSettings: '"opsz" 60' }}
        >
          {treatment}
        </h3>
        <span className="font-italiana italic text-blush-300 text-base whitespace-nowrap">
          {note}
        </span>
      </div>
      <div className="mt-2 px-2 h-px bg-gradient-to-r from-rosegold-400/30 via-blush-300/15 to-transparent" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Results section
   ───────────────────────────────────────────────────────────── */
export default function Results() {
  return (
    <section
      className="section relative overflow-hidden py-24 md:py-32"
      style={{ background: '#0E0606' }}
    >
      {/* Onyx mesh background */}
      <div
        className="absolute inset-0 animate-mesh-shift pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(at 20% 20%, rgba(58,44,44,0.85) 0px, transparent 50%), \
             radial-gradient(at 80% 0%, rgba(150,72,70,0.45) 0px, transparent 55%), \
             radial-gradient(at 0% 100%, rgba(18,9,9,0.85) 0px, transparent 50%), \
             radial-gradient(at 80% 100%, rgba(37,26,26,0.85) 0px, transparent 50%)',
        }}
      />

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
        className="absolute -top-20 right-0 w-[42rem] h-[42rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(209,123,119,0.18) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom champagne bloom */}
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[42rem] h-[42rem] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(219,163,141,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1500px] mx-auto relative px-6 md:px-12 lg:px-16">
        {/* ── Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="rosegold-rule-light" />
              <span className="eyebrow-light">Real Patients · Real Results</span>
            </div>
            <h2
              className="font-display font-light text-bone text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Quietly{' '}
              <span className="couture-italic blush-text-light">transformative</span>.
            </h2>
            <p className="mt-7 max-w-md text-bone/65 font-light leading-[1.85]">
              Drag the divider to reveal each transformation. Every case shared
              with full patient consent — a private record of what considered,
              bespoke aesthetic medicine can quietly achieve.
            </p>
          </div>
          <Link
            to="/results"
            className="btn-luxury-ghost-light self-start md:self-end"
          >
            View The Full Archive
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Before/after grid — 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {results.slice(0, 6).map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <BeforeAfter {...r} index={i} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom footnote */}
        <div className="mt-20 pt-10 border-t border-blush-300/12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-bone/45 text-[0.78rem] font-light italic max-w-xl leading-relaxed">
            Individual results vary. All procedures performed by Dr Matla in our
            private Newcastle clinic, with consultation, documentation and
            follow-up included as standard.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[0.6rem] uppercase tracking-[0.32em] text-blush-300/70">
              CQC Regulated Clinic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}