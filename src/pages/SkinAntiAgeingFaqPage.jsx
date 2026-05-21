import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How can I look younger without surgery?',
    paragraphs: [
      'Non-surgical rejuvenation is the foundation of Dr Matla\'s practice. Through a carefully personalised combination of fillers, PRP, and skin rejuvenation treatments, Dr Matla regularly helps patients achieve meaningful, natural-looking improvements without any surgery, anaesthesia, or significant downtime.',
      'The three key causes of facial ageing — volume loss, skin laxity, and surface texture changes — are each addressed with different tools. Dr Matla\'s approach combines treatments precisely suited to your specific concerns, in the right sequence and at the right time.',
      'At consultation, Dr Matla assesses your skin, reviews your skincare routine, and discusses your goals honestly — always recommending the most impactful treatments for your particular face rather than a one-size-fits-all protocol.',
    ],
  },
  {
    q: 'What is the best anti-ageing treatment?',
    paragraphs: [
      'The most important thing Dr Matla communicates at every anti-ageing consultation is that there is no single best treatment — the right treatment depends entirely on your anatomy, your skin, and your goals.',
      'Dr Matla\'s most commonly recommended anti-ageing approaches include: fillers to restore structural volume and support; PRP to improve skin texture, tone, and collagen density; and skin boosters to restore lasting surface hydration and radiance. For most patients, a thoughtfully sequenced combination achieves the most compelling and natural result.',
      'Every treatment plan Dr Matla creates is bespoke — built around your face, not a template. You will always leave consultation with a clear, honest understanding of what each recommended treatment does, why it is appropriate for you, and what results you can realistically expect.',
    ],
  },
  {
    q: 'How can I tighten loose or sagging skin?',
    paragraphs: [
      'Skin laxity is one of the more complex aspects of facial ageing to address non-surgically, and Dr Matla is always honest about the distinction between what non-surgical treatment can and cannot achieve.',
      'For patients with mild to moderate laxity, Dr Matla\'s approach typically begins with volume restoration — replacing lost volume with filler to lift and support descended tissue. This alone often creates a visible improvement in skin tightness. Collagen stimulation treatments, including PRP and skin boosters, then improve the skin\'s underlying infrastructure over time.',
      'Dr Matla combines treatment recommendations with practical skincare guidance — particularly retinoids, daily SPF, and active vitamin C — to enhance and extend long-term results. Your skincare routine is as important as your clinic appointments.',
    ],
  },
  {
    q: 'Can fillers reduce wrinkles and lines?',
    paragraphs: [
      'Yes — fillers soften wrinkles and folds by restoring volume beneath the skin, physically lifting depressed tissue that creates visible lines. Dr Matla regularly treats smile lines (nasolabial folds) and marionette lines with exceptional results.',
      'Dr Matla\'s approach differs from simply filling lines directly — she addresses the structural cause of the line, which often means restoring mid-face volume that has caused the overlying skin to crease rather than injecting the fold itself. This produces a more natural result.',
      'Where appropriate, Dr Matla may recommend combining fillers with anti-wrinkle injections to address both structural and muscular contributors to lines simultaneously — always clearly explaining the rationale and ensuring patients are fully informed before any treatment is performed.',
    ],
  },
  {
    q: 'Which treatment gives the most immediate visible results?',
    paragraphs: [
      'Dermal fillers provide the most immediate visible improvement — results are apparent the same day, with the final settled result visible within two weeks as any swelling resolves. Dr Matla regularly performs filler treatments ahead of weddings, events, and other occasions where immediate improvement is a priority.',
      'PRP and skin boosters, by contrast, work gradually over three to six weeks as new collagen is stimulated and hydration improves. These treatments are cumulative — results build meaningfully across a course of sessions and continue improving over months.',
      'Dr Matla provides a clear picture at consultation of when each treatment delivers its results, ensuring your expectations are accurate and your timing is appropriate for your goals.',
    ],
  },
];

export default function SkinAntiAgeingFaqPage() {
  return (
    <FaqLayout
      eyebrow="Skin & Anti-Ageing Questions"
      title="Skin & Anti-Ageing — Your Questions, Answered."
      subtitle="Expert answers from Dr Matla on non-surgical skin rejuvenation and anti-ageing — from wrinkle reduction and skin tightening to choosing the right treatment for your goals."
      breadcrumb="Skin & Anti-Ageing"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'Skin Rejuvenation' },
        { to: '/treatments', label: 'PRP Therapy' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing FAQ' },
      ]}
      relatedLinks={[
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/treatment-comparisons', label: 'Treatment Comparisons' },
      ]}
    />
  );
}
