import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, X, ExternalLink } from 'lucide-react';
import { reviews, videoTestimonials } from '../data/reviews';
import { SITE } from '../seo/siteConfig';

/* ── Star row ─────────────────────────────────────────────── */
function Stars({ count = 5, size = 11 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="#B97058" stroke="none" />
      ))}
    </div>
  );
}

/* ── Initials avatar (cream) ──────────────────────────────── */
function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-italiana text-[0.78rem] text-rosegold-700"
      style={{
        background: 'linear-gradient(135deg, #FBF7F6 0%, #F5D5D1 100%)',
        border: '1px solid rgba(185,112,88,0.22)',
      }}
    >
      {initials}
    </div>
  );
}

/* ── Video thumbnail card ─────────────────────────────────── */
function VideoCard({ videoId, title, onPlay }) {
  return (
    <motion.button
      onClick={() => onPlay(videoId)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-video w-full overflow-hidden group/vid cursor-pointer"
      style={{ border: '1px solid rgba(185,112,88,0.22)' }}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(14,6,6,0.10) 0%, rgba(14,6,6,0.40) 100%)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/vid:scale-110"
          style={{
            background: 'linear-gradient(135deg, #FBF7F6 0%, #F5D5D1 55%, #DBA38D 100%)',
            boxShadow: '0 6px 18px rgba(126,67,52,0.35), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          <Play size={15} fill="#7E4334" stroke="none" className="ml-0.5" />
        </div>
      </div>
    </motion.button>
  );
}

/* ── YouTube modal ────────────────────────────────────────── */
function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(14,6,6,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 w-11 h-11 -mr-2 flex items-center justify-center text-bone/70 hover:text-bone transition-colors"
          aria-label="Close video"
        >
          <X size={22} strokeWidth={1.5} />
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Patient testimonial"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: '1px solid rgba(185,112,88,0.22)' }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Text review card — cream white, compact ──────────────── */
function ReviewCard({ review, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Full-review modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(14,6,6,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg flex flex-col p-7 md:p-9"
            style={{
              background: '#FBF7F6',
              border: '1px solid rgba(185,112,88,0.25)',
              boxShadow: '0 24px 60px rgba(70,30,20,0.25)',
              maxHeight: '85vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-onyx/40 hover:text-onyx transition-colors"
              aria-label="Close review"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="flex items-center justify-between mb-5 pr-10">
              <Stars count={review.rating} size={13} />
              <span
                className="text-[0.58rem] uppercase tracking-luxury font-medium text-rosegold-700 px-2.5 py-1"
                style={{
                  background: 'rgba(185,112,88,0.08)',
                  border: '1px solid rgba(185,112,88,0.20)',
                }}
              >
                {review.treatment}
              </span>
            </div>

            <span
              className="font-italiana text-5xl leading-none text-rosegold-400/40 mb-1 select-none"
              aria-hidden
            >
              &ldquo;
            </span>

            <p className="font-light text-onyx/75 leading-[1.85] text-[0.95rem]">
              {review.body}
            </p>

            <div
              className="flex items-center gap-3 mt-7 pt-5"
              style={{ borderTop: '1px solid rgba(185,112,88,0.18)' }}
            >
              <Avatar name={review.author} />
              <div>
                <p className="text-onyx text-sm font-medium leading-tight">{review.author}</p>
                <p className="text-onyx/50 text-[0.72rem] font-light mt-0.5">{review.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Card — compact cream-white */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col p-5 md:p-6"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF7F6 100%)',
          border: '1px solid rgba(185,112,88,0.18)',
          boxShadow: '0 2px 8px rgba(70,30,20,0.04)',
        }}
      >
        {/* Stars + treatment tag (FIXED: was {review.rating}) */}
        <div className="flex items-center justify-between mb-4">
          <Stars count={review.rating} size={10} />
          <span
            className="text-[0.56rem] uppercase tracking-luxury font-medium text-rosegold-700 px-2 py-0.5"
            style={{
              background: 'rgba(185,112,88,0.07)',
              border: '1px solid rgba(185,112,88,0.16)',
            }}
          >
            {review.treatment}
          </span>
        </div>

        {/* Quote mark */}
        <span
          className="font-italiana text-3xl leading-none text-rosegold-400/35 mb-1 select-none"
          aria-hidden
        >
          &ldquo;
        </span>

        {/* Clamped body — 3 lines */}
        <p
          className="font-light text-onyx/75 leading-[1.75] text-[0.88rem] flex-1"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {review.body}
        </p>

        {/* Author + Learn more */}
        <div
          className="flex items-center justify-between gap-3 mt-5 pt-4"
          style={{ borderTop: '1px solid rgba(185,112,88,0.14)' }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Avatar name={review.author} />
            <div className="min-w-0">
              <p className="text-onyx text-[0.82rem] font-medium leading-tight truncate">{review.author}</p>
              <p className="text-onyx/45 text-[0.68rem] font-light mt-0.5 truncate">{review.location}</p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="shrink-0 text-[0.62rem] uppercase tracking-luxury font-medium text-rosegold-700 px-2.5 py-1.5 min-h-[32px] transition-colors hover:text-onyx hover:bg-rosegold-100"
            style={{
              border: '1px solid rgba(185,112,88,0.22)',
              background: 'rgba(185,112,88,0.04)',
            }}
            aria-label={`Read full review by ${review.author}`}
          >
            Read
          </button>
        </div>
      </motion.div>
    </>
  );
}

/* ── Main Reviews section — cream-white ───────────────────── */
export default function Reviews() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background:
            'linear-gradient(180deg, #FBF7F6 0%, #FFFFFF 35%, #FDF4F2 100%)',
        }}
      >
        {/* Subtle blush bloom top-right */}
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[34rem] h-[34rem] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(219,163,141,0.20) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Soft rose-gold haze bottom-left */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(245,213,209,0.45) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1400px] mx-auto relative px-6 md:px-12 lg:px-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="rosegold-rule" />
                <span className="eyebrow text-rosegold-700">Patient Voices</span>
              </div>
              <h2
                className="font-display font-light text-onyx text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Trusted by{' '}
                <span className="couture-italic text-rosegold-700">thousands</span>.
              </h2>
              <p className="mt-6 max-w-md text-onyx/65 font-light leading-[1.85]">
                {SITE.trust.reviewRating}-star rated across {SITE.trust.reviewCount}+ verified reviews.
                Read what patients say about their experience with Dr. Matla.
              </p>
            </div>

            {/* Aggregate score card */}
            <div
              className="self-start md:self-end flex items-center gap-4 px-6 py-4 shrink-0"
              style={{
                border: '1px solid rgba(185,112,88,0.22)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FBF7F6 100%)',
                boxShadow: '0 4px 14px rgba(70,30,20,0.06)',
              }}
            >
              <div>
                <p className="font-display text-4xl text-onyx font-light tracking-tight">
                  {SITE.trust.reviewRating}
                </p>
                <Stars count={5} size={12} />
                <p className="text-onyx/45 text-[0.62rem] uppercase tracking-luxury mt-1">
                  {SITE.trust.reviewCount}+ reviews
                </p>
              </div>
              <div className="w-px h-12 bg-rosegold-400/25" />
              <a
                href="https://www.google.com/search?q=Dr+Matla+Aesthetics+Newcastle+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center text-onyx/50 hover:text-rosegold-700 transition-colors"
                aria-label="View Google reviews"
              >
                <ExternalLink size={14} strokeWidth={1.5} />
                <span className="text-[0.58rem] uppercase tracking-luxury">Google</span>
              </a>
            </div>
          </div>

          {/* Video testimonials */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <span className="rosegold-rule" />
              <span className="eyebrow text-rosegold-700">Video Testimonials</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videoTestimonials.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <VideoCard videoId={v.id} title={v.title} onPlay={setActiveVideo} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text reviews grid — tighter spacing, smaller cards */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <span className="rosegold-rule" />
              <span className="eyebrow text-rosegold-700">Written Reviews</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((r, i) => (
                <ReviewCard key={r.id} review={r} index={i} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8"
            style={{ borderTop: '1px solid rgba(185,112,88,0.18)' }}
          >
            <p className="text-onyx/50 text-[0.78rem] font-light italic max-w-xl leading-relaxed">
              All reviews are from verified patients. Results and experiences may vary between individuals.
            </p>
            <a
              href="https://www.google.com/search?q=Dr+Matla+Aesthetics+Newcastle+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-[0.72rem] uppercase tracking-luxury font-medium text-rosegold-700 hover:text-onyx transition-colors shrink-0"
              style={{
                border: '1px solid rgba(185,112,88,0.30)',
                background: 'rgba(185,112,88,0.05)',
              }}
            >
              Leave a Google Review
              <ExternalLink size={13} strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
