import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How can I remove under-eye hollows and dark circles?',
    paragraphs: [
      'Tear trough fillers can restore volume under the eyes and reduce the hollow appearance that creates dark shadows — and this is one of the treatments Dr Matla\'s patients most frequently describe as life-changing. The under-eye area is one of the first places to show fatigue and ageing.',
      'Dr Matla uses highly specific, low-viscosity hyaluronic acid fillers designed for the delicate under-eye area, placed with exceptional precision to restore the smooth contour between the lower eyelid and cheek. The shadow responsible for the darkened, hollow look is eliminated — without the need for surgery.',
      'At consultation, Dr Matla conducts a thorough assessment of your under-eye anatomy to confirm whether filler is the right treatment for your specific concern — not all under-eye concerns are best addressed with filler, and she will always give you an honest recommendation.',
    ],
  },
  {
    q: 'Why do I always look tired, even after a full night\'s sleep?',
    paragraphs: [
      'A persistently tired appearance is most commonly caused by structural changes beneath the skin — not tiredness itself. Volume loss beneath the eyes creates shadows that give the appearance of darkness and depth, regardless of how well-rested you are.',
      'Dr Matla regularly treats patients who have tried every eye cream available without meaningful improvement — because their concern is structural, not pigmentary. Topical products cannot replace lost volume or reposition descended tissue; that requires treatment.',
      'Tear trough filler — and in many cases, a combination of tear trough and cheek filler to restore mid-face support — is Dr Matla\'s most commonly recommended approach for a persistently tired appearance. Many patients describe the result as the single most meaningful aesthetic improvement they have experienced.',
    ],
  },
  {
    q: 'Can fillers fix under-eye bags?',
    paragraphs: [
      'Fillers can significantly improve the appearance of under-eye bags in many patients — though Dr Matla always provides an honest assessment of what is and is not achievable before proceeding. True fat herniation or significant skin excess may require surgical management.',
      'In many patients, what appears to be under-eye "bags" is actually a combination of mild puffiness and volume loss directly below — the hollow amplifies the appearance of the bulge above. Dr Matla\'s precise filler placement smooths this transition, creating a more even contour that significantly reduces the visible bag.',
      'Where filler is not the right treatment, Dr Matla will say so clearly and discuss alternative options. She never recommends treatment that is not in the patient\'s genuine best interest.',
    ],
  },
  {
    q: 'Is tear trough filler safe?',
    paragraphs: [
      'The under-eye area is one of the most technically demanding areas for filler treatment — which is why Dr Matla dedicates particular care and expertise to this zone. Proper technique, appropriate product selection, and thorough anatomical knowledge are essential.',
      'Dr Matla uses only low-viscosity, clinically approved hyaluronic acid products in the tear trough — firmer products used in other areas are entirely inappropriate here and carry significant risk of visible lumping or the Tyndall effect (a bluish discolouration visible through thin under-eye skin).',
      'Every patient undergoes full medical history review and detailed assessment at consultation. Dr Matla carries emergency hyaluronidase at every appointment and is trained in the management of any complication. Safety is never compromised in pursuit of a cosmetic result.',
    ],
  },
  {
    q: 'Can fillers brighten tired eyes and improve overall freshness?',
    paragraphs: [
      'Yes — and this is one of the most gratifying treatments Dr Matla performs. By restoring the smooth contour between the lower eyelid and cheek, tear trough filler eliminates the shadow responsible for the darkened, hollow under-eye appearance. The brightening effect is immediate and striking.',
      'Dr Matla often combines tear trough treatment with cheek filler for patients where both the under-eye area and mid-face have lost volume — the combined result improves not just the under-eye area but the entire upper and mid-face, creating a comprehensive rejuvenation.',
      'Patients consistently describe the result as looking like themselves — but rested, youthful, and at their best. This is the standard Dr Matla works to achieve for every patient she treats.',
    ],
  },
];

export default function TearTroughFaqPage() {
  return (
    <FaqLayout
      eyebrow="Tear Trough Questions"
      title="Tear Trough Filler — Your Questions, Answered."
      subtitle="Expert answers from Dr Matla on under-eye filler treatment — covering hollows, dark circles, tired appearance, safety, and whether tear trough filler is right for you."
      breadcrumb="Tear Trough"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'Tear Trough Filler' },
        { to: '/treatments', label: 'Cheek Filler' },
        { to: '/faq/cheek-fillers', label: 'Cheek Filler FAQ' },
      ]}
      relatedLinks={[
        { to: '/faq/cheek-fillers', label: 'Cheek Fillers FAQ' },
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
      ]}
    />
  );
}
