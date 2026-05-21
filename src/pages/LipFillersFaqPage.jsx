import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How can I make my lips look bigger naturally?',
    paragraphs: [
      'Many people want fuller lips without surgery. Hydration, exfoliation, and makeup techniques can improve lip appearance naturally, but professional lip fillers provide longer-lasting enhancement with genuinely balanced volume.',
      'Dr Matla specialises in natural-looking lip enhancement, focusing on lip symmetry, facial harmony, and proportional volume rather than exaggerated results. Her approach begins with a detailed facial assessment — considering the golden ratio of the face, your lip anatomy, and your personal aesthetic goals — before any filler is placed.',
      'At your consultation with Dr Matla, a personalised treatment plan is designed specifically around your face. The goal is always elegant enhancement, never alteration — most patients leave looking like a beautifully refreshed version of themselves.',
    ],
  },
  {
    q: 'Can lip fillers look completely natural?',
    paragraphs: [
      'Modern lip fillers are designed to create subtle, natural enhancement. Most people today prefer soft volume and improved shape rather than overly dramatic lips — and this is exactly the philosophy Dr Matla practises.',
      'Dr Matla carefully analyses facial balance before every treatment, selecting softer, lower-viscosity hyaluronic acid fillers that integrate seamlessly into lip tissue and move naturally with your expressions. Precise placement technique ensures results that are felt and seen as genuinely natural.',
      'The hallmark of Dr Matla\'s lip work is that it is undetectable. Patients consistently report that friends comment they look refreshed or well-rested — without being able to identify why.',
    ],
  },
  {
    q: 'How long do lip fillers last, and what affects longevity?',
    paragraphs: [
      'Lip fillers typically last between six and twelve months. The lips are one of the most mobile areas of the face — constant movement during speaking and eating causes hyaluronic acid to metabolise faster than in less active zones.',
      'At your appointment, Dr Matla will discuss how your individual metabolism, lifestyle, and the specific product selected are likely to affect your result. Clients who return for regular maintenance — typically every nine to twelve months — often require progressively less product over time as the filler builds a structural foundation.',
      'Dr Matla\'s conservative approach means she always starts with the right volume for your face, never overfilling — preserving the option to refine further at a review appointment if desired.',
    ],
  },
  {
    q: 'Are lip fillers painful, and what is the recovery like?',
    paragraphs: [
      'Discomfort during lip filler treatment is minimal. Dr Matla applies a topical anaesthetic cream for at least 20 minutes before treatment, and the hyaluronic acid fillers she uses contain lidocaine within the formulation itself — providing additional comfort throughout the injection.',
      'Patients typically describe the sensation as mild pressure or a brief pinch. Some swelling and tenderness is normal for 48–72 hours after treatment — the lips swell more noticeably than other areas due to their vascularity.',
      'By day five, swelling has settled significantly and your true result becomes visible. Dr Matla schedules a follow-up review at two weeks to assess the final result and make any refinements needed, ensuring you are completely happy before treatment is considered complete.',
    ],
  },
  {
    q: 'Can lip fillers correct uneven or asymmetric lips?',
    paragraphs: [
      'Yes — asymmetric lips are one of the most common reasons patients consult Dr Matla. Natural lip asymmetry is extremely common and can be significantly improved with strategic, precise filler placement.',
      'Before treatment, Dr Matla maps the lips carefully — identifying exactly where volume needs to be added or shape refined on each side independently. This meticulous approach ensures harmonious, balanced results always within the natural context of your face.',
      'Where previous filler has created asymmetry, Dr Matla may recommend dissolving with hyaluronidase first before placing fresh filler — always with your safety and satisfaction as the priority. She will discuss all options openly at consultation.',
    ],
  },
];

export default function LipFillersFaqPage() {
  return (
    <FaqLayout
      eyebrow="Lip Filler Questions"
      title="Lip Fillers — Your Questions, Answered."
      subtitle="Expert answers from Dr Matla on the most commonly asked questions about lip filler — from natural results and longevity to pain, recovery, and asymmetry correction."
      breadcrumb="Lip Fillers"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'Lip Filler Treatment' },
        { to: '/treatments', label: 'Facial Balancing' },
        { to: '/faq/jawline-chin', label: 'Jawline & Chin FAQ' },
      ]}
      relatedLinks={[
        { to: '/faq/jawline-chin', label: 'Jawline & Chin FAQ' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
      ]}
    />
  );
}
