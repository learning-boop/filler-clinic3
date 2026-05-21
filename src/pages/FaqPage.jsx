import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

const categories = [
  {
    id: 'lip',
    label: 'Lip Fillers',
    eyebrow: '01',
    faqs: [
      {
        q: 'Can lip fillers look natural?',
        a: 'Modern lip fillers are designed for subtle, natural enhancement. Skilled injectors analyse facial balance and use precise techniques to add soft volume and refined shape — never exaggerated. Proper product selection and a conservative approach are the hallmarks of elegant results.',
      },
      {
        q: 'How long do lip fillers last?',
        a: 'Lip fillers typically last six to twelve months, depending on the filler type, your metabolism, lifestyle, and aftercare. Because lips move frequently, the product in this area may dissolve faster than in less mobile zones. Regular maintenance sessions preserve your results beautifully.',
      },
      {
        q: 'Are lip fillers painful?',
        a: 'A topical numbing cream is applied before treatment to minimise discomfort. Most patients experience only mild pressure during injections. Mild swelling or tenderness may appear for a few days afterwards — both resolve quickly on their own.',
      },
      {
        q: 'Can fillers fix uneven lips?',
        a: 'Yes. Strategic filler placement corrects natural asymmetry or imbalance caused by ageing or previous treatments, restoring harmony and proportion while keeping results looking entirely natural.',
      },
      {
        q: 'How can I make my lips look fuller?',
        a: 'Lip fillers provide lasting, balanced volume that makeup alone cannot replicate. An experienced injector focuses on lip symmetry, hydration, and facial harmony rather than dramatic augmentation — the result is an elegantly enhanced you.',
      },
    ],
  },
  {
    id: 'jawline',
    label: 'Jawline & Chin',
    eyebrow: '02',
    faqs: [
      {
        q: 'How can I get a sharper jawline without surgery?',
        a: 'Jawline fillers create precise contours and improve overall facial balance non-surgically. Dermal filler is placed along the mandible to sharpen and define the angle, delivering immediate, visible results with minimal downtime.',
      },
      {
        q: 'Can fillers improve a weak chin?',
        a: 'Chin fillers improve projection and balance the side profile. A recessed chin affects overall facial harmony — non-surgical enhancement provides a stronger, more structured look with no scalpel required.',
      },
      {
        q: 'How long do jawline fillers last?',
        a: 'Jawline fillers typically last twelve to eighteen months. Areas with less movement tend to retain filler longer than highly mobile zones like the lips. Filler type, metabolism, and lifestyle all influence longevity.',
      },
      {
        q: 'Is jawline filler safe?',
        a: 'Jawline fillers are safe when performed by qualified medical professionals using clinically approved products. Mild, temporary swelling or bruising may occur. Choosing an experienced, medically trained injector is essential for safe and balanced outcomes.',
      },
      {
        q: 'What is the best non-surgical jawline treatment?',
        a: 'Dermal fillers are among the most effective non-surgical jawline treatments, providing immediate contouring and definition. Some patients combine fillers with skin-tightening procedures for enhanced results — your personalised plan will reflect your unique anatomy and goals.',
      },
    ],
  },
  {
    id: 'cheek',
    label: 'Cheek Fillers',
    eyebrow: '03',
    faqs: [
      {
        q: 'What do cheek fillers actually do?',
        a: 'Cheek fillers restore volume, add structure, and improve contour. They enhance facial proportions and soften signs of ageing, returning a refreshed and youthful balance to the mid-face.',
      },
      {
        q: 'Can cheek fillers make me look younger?',
        a: 'Yes. As collagen diminishes over time, cheeks can appear hollow or flat. Fillers restore the volume lost during ageing, creating a fresher and more youthful appearance without altering your fundamental features.',
      },
      {
        q: 'Can cheek fillers lift the face?',
        a: 'Cheek fillers create a subtle lifting effect by restoring support to the mid-face. This improves overall contour and may reduce the appearance of sagging in the lower face — a natural, non-surgical refresh.',
      },
      {
        q: 'How long do cheek fillers last?',
        a: 'Cheek fillers generally last twelve to eighteen months. Because the cheek area involves less movement than the lips, results tend to be long-lasting. Periodic top-up sessions maintain your definition over time.',
      },
      {
        q: 'Are cheek fillers worth it?',
        a: "Cheek fillers are consistently popular because they deliver noticeable improvement without lengthy recovery. They enhance facial harmony, support the mid-face, and build confidence — all with natural-looking, elegant results.",
      },
    ],
  },
  {
    id: 'teartrough',
    label: 'Tear Trough',
    eyebrow: '04',
    faqs: [
      {
        q: 'How can I remove under-eye hollows?',
        a: 'Tear trough fillers restore volume beneath the eyes and reduce the hollow appearance that creates shadows. While good hydration and skincare are supportive, fillers usually provide the most visible and lasting improvement.',
      },
      {
        q: 'Why do I always look tired?',
        a: 'Dark circles, volume loss, and ageing under the eyes can all create a perpetually fatigued appearance. Treatments such as tear trough fillers and PRP therapy brighten the under-eye area and restore freshness that rest alone cannot achieve.',
      },
      {
        q: 'Can fillers fix under-eye bags?',
        a: 'Fillers can improve mild under-eye bags by smoothing the transition between the lower eyelid and cheek. Pronounced puffiness or excess skin may require a different treatment approach — your consultation will clarify the best path forward.',
      },
      {
        q: 'Are tear trough fillers safe?',
        a: 'Tear trough treatment is safe when performed by highly trained medical professionals. The under-eye area is delicate and requires specialist expertise — proper technique, precise product choice, and careful assessment are non-negotiable here.',
      },
      {
        q: 'Can fillers brighten tired eyes?',
        a: 'Yes. By reducing shadows and hollowness beneath the eyes, fillers help patients appear genuinely more rested and youthful — a transformative result that refreshes the whole face.',
      },
    ],
  },
  {
    id: 'skinanti',
    label: 'Skin & Anti-Ageing',
    eyebrow: '05',
    faqs: [
      {
        q: 'Can fillers reduce wrinkles?',
        a: 'Yes — fillers soften wrinkles and folds by restoring volume beneath the skin. Smile lines, marionette lines, and nasolabial folds are all common treatment areas, with results that look natural and refreshed.',
      },
      {
        q: 'How can I look younger without surgery?',
        a: 'Non-surgical treatments such as fillers, PRP, and skin rejuvenation procedures restore a youthful appearance without invasive surgery or lengthy recovery. Combined with a considered skincare routine, the results can be remarkable.',
      },
      {
        q: 'What is the best anti-ageing treatment?',
        a: 'The optimal treatment depends on your skin condition and personal goals. Fillers restore volume while PRP improves texture and stimulates collagen production. A personalised plan — combining treatments where appropriate — delivers the best outcomes.',
      },
      {
        q: 'How can I tighten loose skin?',
        a: 'Collagen-stimulating treatments and skin-tightening procedures improve firmness and elasticity. Combining professional treatments with a quality skincare routine enhances and prolongs results.',
      },
      {
        q: 'Which treatment gives the fastest results?',
        a: 'Dermal fillers provide immediate, visible improvement in contour and volume from the day of treatment. PRP and collagen-stimulating therapies work gradually over several weeks, building lasting skin quality from within.',
      },
    ],
  },
  {
    id: 'prp',
    label: 'PRP & Skin Rejuvenation',
    eyebrow: '06',
    faqs: [
      {
        q: 'What is PRP treatment for the face?',
        a: 'PRP therapy uses your own blood — processed to concentrate growth factors — to stimulate collagen production and skin rejuvenation. It improves texture, glow, and overall skin quality entirely naturally, with no foreign substances introduced.',
      },
      {
        q: 'Does PRP really work?',
        a: 'Many patients notice improved skin texture, radiance, and freshness after a course of PRP treatments. Results develop gradually over several weeks as collagen regeneration accelerates — subtle but meaningful transformation.',
      },
      {
        q: 'Is PRP good for anti-ageing?',
        a: 'PRP is widely used for anti-ageing precisely because it promotes your skin\'s own collagen production and natural regeneration. The approach aligns perfectly with the philosophy of enhancing what is already there.',
      },
      {
        q: 'Can PRP improve skin texture?',
        a: 'PRP stimulates collagen and skin renewal, helping address dullness, uneven texture, and the lingering marks of acne scarring. Results are progressive, building over a series of sessions.',
      },
      {
        q: 'Does PRP help acne scars?',
        a: 'PRP can improve acne scars by supporting skin healing and collagen formation — particularly when combined with microneedling. The combination accelerates remodelling and creates more uniform skin tone and texture.',
      },
    ],
  },
];

const guides = [
  {
    number: '01',
    title: 'Your First Consultation: What to Expect',
    summary:
      'A calm, unhurried conversation. We review your concerns, assess your facial anatomy, and outline every option — with no obligation to proceed on the day.',
    tags: ['Consultation', 'First Visit'],
  },
  {
    number: '02',
    title: 'Understanding Hyaluronic Acid Fillers',
    summary:
      'HA fillers are the gold standard in non-surgical aesthetics. Learn how they work, how they are placed, and why they remain reversible at any time.',
    tags: ['Fillers', 'Science'],
  },
  {
    number: '03',
    title: 'Aftercare: The First 48 Hours',
    summary:
      'Simple steps — avoiding pressure on treated areas, staying hydrated, keeping makeup light — make a meaningful difference to your final result.',
    tags: ['Aftercare', 'Recovery'],
  },
  {
    number: '04',
    title: 'Natural vs. Dramatic: Choosing Your Aesthetic',
    summary:
      'We believe the best result is one you cannot quite put your finger on. This guide explores how treatment planning shapes the subtlety of your outcome.',
    tags: ['Treatment Planning', 'Results'],
  },
  {
    number: '05',
    title: 'PRP Therapy Explained',
    summary:
      'Your body\'s own growth factors, concentrated and reintroduced to stimulate renewal. Discover the science behind the skin-rejuvenation technique trusted by specialists worldwide.',
    tags: ['PRP', 'Skin Health'],
  },
  {
    number: '06',
    title: 'Longevity & Maintenance: Getting the Most from Your Fillers',
    summary:
      'Timing your top-up sessions, protecting your skin, and choosing the right lifestyle habits all influence how long your results last and how beautiful they remain.',
    tags: ['Longevity', 'Maintenance'],
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-onyx/10"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-light text-onyx text-[1.05rem] md:text-[1.15rem] leading-snug tracking-[-0.01em] group-hover:text-blush-600 transition-colors duration-300">
          {q}
        </span>
        <span className="mt-1 shrink-0 w-7 h-7 rounded-full border border-onyx/20 flex items-center justify-center text-onyx/50 group-hover:border-blush-400 group-hover:text-blush-500 transition-all duration-300">
          {open ? <Minus size={13} strokeWidth={1.8} /> : <Plus size={13} strokeWidth={1.8} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-onyx/65 font-light text-[0.95rem] leading-[1.9] pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('lip');
  const current = categories.find((c) => c.id === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Centre"
        title="FAQs &"
        accent="Guides"
        subtitle="Every question answered with honesty and expertise. From your first enquiry to long-term maintenance — we believe an informed patient makes the most confident one."
      />

      {/* ─── FAQ SECTION ─── */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="rosegold-rule" />
              <span className="eyebrow">Frequently Asked Questions</span>
            </div>
            <h2
              className="font-display font-light text-onyx text-4xl md:text-5xl tracking-[-0.03em] max-w-xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Your questions,{' '}
              <span className="couture-italic rosegold-shimmer">honestly</span> answered.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Category Sidebar */}
            <div className="lg:col-span-3">
              <nav className="flex flex-row lg:flex-col gap-2 flex-wrap lg:flex-nowrap sticky top-28">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-all duration-300 text-sm ${
                      activeCategory === cat.id
                        ? 'bg-onyx text-bone'
                        : 'text-onyx/60 hover:text-onyx hover:bg-onyx/5'
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.65rem] tracking-widest shrink-0 ${
                        activeCategory === cat.id ? 'text-blush-300' : 'text-onyx/30'
                      }`}
                    >
                      {cat.eyebrow}
                    </span>
                    <span className="font-medium text-[0.78rem] uppercase tracking-luxury whitespace-nowrap">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ list */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-8 flex items-center gap-3">
                    <span className="text-[0.65rem] font-mono tracking-widest text-onyx/30">
                      {current.eyebrow}
                    </span>
                    <h3 className="font-display font-light text-onyx text-2xl md:text-3xl tracking-[-0.02em]"
                      style={{ fontVariationSettings: '"opsz" 144' }}>
                      {current.label}
                    </h3>
                  </div>

                  <div className="border-t border-onyx/10">
                    {current.faqs.map((item, i) => (
                      <FaqItem key={i} {...item} index={i} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUIDES SECTION ─── */}
      <section className="py-20 md:py-28 bg-onyx-900" style={{ background: '#0E0606' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="rosegold-rule-light" />
              <span className="eyebrow-light">Treatment Guides</span>
            </div>
            <h2
              className="font-display font-light text-bone text-4xl md:text-5xl tracking-[-0.03em] max-w-2xl leading-[1.08]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Everything you need to know,{' '}
              <span className="couture-italic blush-text-light">before you begin.</span>
            </h2>
          </motion.div>

          {/* Guides grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/8">
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-onyx-900 p-8 md:p-10 flex flex-col gap-5 hover:bg-onyx-800 transition-colors duration-500 cursor-pointer border border-bone/[0.06] hover:border-blush-500/20"
                style={{ background: i % 2 === 0 ? 'rgba(14,6,6,1)' : 'rgba(26,16,16,0.8)' }}
              >
                {/* Number + tags row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.65rem] tracking-widest text-blush-600/70">
                    {guide.number}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] uppercase tracking-luxury px-2.5 py-1 border border-bone/10 text-bone/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-light text-bone text-xl md:text-2xl tracking-[-0.02em] leading-snug group-hover:text-blush-100 transition-colors duration-300"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {guide.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-blush-600/40 group-hover:w-16 group-hover:bg-blush-500/60 transition-all duration-500" />

                {/* Summary */}
                <p className="text-bone/45 font-light text-[0.88rem] leading-[1.85] flex-1">
                  {guide.summary}
                </p>

                {/* Read more hint */}
                <div className="flex items-center gap-2 text-blush-500/60 text-[0.72rem] uppercase tracking-luxury group-hover:text-blush-400 transition-colors duration-300">
                  <span>Ask at consultation</span>
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INLINE CTA STRIP ─── */}
      <section className="bg-bone py-16 md:py-20 border-b border-onyx/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="flex items-start gap-5">
              <div className="mt-1.5 w-px h-14 bg-gradient-to-b from-blush-500/70 via-rosegold-500/30 to-transparent shrink-0" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-luxury text-onyx/40 mb-2">Still have questions?</p>
                <p className="font-display font-light text-onyx text-2xl md:text-3xl tracking-[-0.02em]"
                  style={{ fontVariationSettings: '"opsz" 144' }}>
                  Your consultation answers everything.
                </p>
              </div>
            </div>
            <Link to="https://portal.aestheticnursesoftware.com/book-online/1150" className="btn-luxury-primary whitespace-nowrap shrink-0">
              Book a Consultation
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
