import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How much do lip fillers cost, and what affects the price?',
    paragraphs: [
      'Lip filler treatment at Dr Matla\'s clinic typically ranges from £250 to £500 per session, depending on the volume of product used and the complexity of the treatment. All pricing is discussed openly at consultation — there are no hidden fees and no pressure to commit on the day.',
      'Factors that influence the price include the specific filler product selected, the number of syringes required to achieve your goals, and whether any correction of previous treatment is needed. Dr Matla always recommends beginning conservatively — you can always add more at a review appointment, but addressing overfilled results is more complex and more costly.',
      'Dr Matla encourages patients to view aesthetic treatment as an investment in their confidence and wellbeing, and to prioritise expertise and safety over cost. Choosing the cheapest available option in aesthetics carries real clinical risks.',
    ],
  },
  {
    q: 'How much do jawline and chin fillers cost?',
    paragraphs: [
      'Jawline and chin treatments require more product than lip filler, as larger structural areas are being addressed. At Dr Matla\'s clinic, jawline treatment typically ranges from £350 to £700, and chin enhancement from £300 to £500.',
      'Combined lower-face treatment — addressing both the jawline and chin together — is often Dr Matla\'s recommended approach for patients seeking meaningful structural change, and combined pricing is discussed openly at consultation.',
      'Every pricing conversation at Dr Matla\'s clinic is honest and transparent. She will never recommend more treatment than is genuinely appropriate for your anatomy and goals, and will always work with you to prioritise the most impactful treatments within your budget.',
    ],
  },
  {
    q: 'Are payment plans available for treatment at Dr Matla\'s clinic?',
    paragraphs: [
      'Dr Matla understands that aesthetic treatment represents a significant personal investment and aims to make her treatments accessible wherever possible. Payment plan options are available and can be discussed at consultation.',
      'Dr Matla recommends discussing your full treatment goals at consultation so she can provide a realistic picture of the total investment required — whether that is a single treatment or a planned sequence of appointments over time. This ensures you can make a fully informed and comfortable decision.',
      'There is no obligation to proceed with any treatment following your consultation. Dr Matla\'s priority is always that patients feel genuinely informed, not pressured.',
    ],
  },
  {
    q: 'Is cheaper filler treatment less safe?',
    paragraphs: [
      'This is one of the most important questions any prospective patient can ask — and Dr Matla is always willing to discuss it directly. Very low price points in aesthetics often indicate inferior products, reduced consultation time, inadequate aftercare, or practitioners without appropriate medical training.',
      'The cost of a single high-quality, clinically approved filler syringe alone is significant. Practitioners offering treatment at substantially below-market prices may be using inferior products or cutting corners on the clinical standards that keep patients safe.',
      'Dr Matla\'s qualifications, medical training, emergency protocols, and the standards she maintains at every appointment represent genuine patient safety — not a luxury premium. She encourages all patients to ask any practitioner about their qualifications, training in complication management, and whether they carry emergency hyaluronidase before every appointment.',
    ],
  },
  {
    q: 'How often will I need to repeat treatment, and what is the annual cost?',
    paragraphs: [
      'Most of Dr Matla\'s filler treatments last between six and eighteen months depending on the area and product. Lips typically require top-up treatment every nine to twelve months; cheeks and jawline every twelve to eighteen months.',
      'Over time, many of Dr Matla\'s long-term patients find that maintenance requires progressively less product — meaning the annual investment often decreases after the initial treatment. This is because each session builds upon the structural foundation established previously.',
      'At your consultation, Dr Matla will provide a realistic picture of the ongoing investment required to maintain your results — ensuring you can make an informed and sustainable commitment to your treatment plan.',
    ],
  },
];

export default function CostPricingFaqPage() {
  return (
    <FaqLayout
      eyebrow="Cost & Pricing Questions"
      title="Cost & Pricing — Your Questions, Answered."
      subtitle="Honest, transparent answers from Dr Matla about the cost of filler treatments — what affects price, how to budget for ongoing maintenance, and why expertise matters more than cost alone."
      breadcrumb="Cost & Pricing"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'View All Treatments' },
        { to: 'https://portal.aestheticnursesoftware.com/book-online/1150', label: 'Book a Consultation' },
      ]}
      relatedLinks={[
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
        { to: '/faq/treatment-comparisons', label: 'Treatment Comparisons' },
        { to: '/faq/lip-fillers', label: 'Lip Filler FAQ' },
      ]}
    />
  );
}
