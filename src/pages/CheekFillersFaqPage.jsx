import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How can I get fuller, more defined cheeks?',
    paragraphs: [
      'Cheek fillers restore lost volume and improve mid-face contour — one of Dr Matla\'s most frequently performed and most impactful treatments. Full cheeks are associated with youth and facial balance; as we age, the fat pads of the cheeks descend and reduce in volume, creating a flattened, deflated appearance.',
      'Dr Matla places filler at the cheekbone and in the mid-face to lift tissue back toward its youthful position and restore structural support. The result is a refreshed, naturally defined appearance — without the operated look of surgery.',
      'At consultation, Dr Matla assesses your natural cheekbone structure and degree of volume loss, tailoring the treatment precisely to your anatomy and the result you are looking for.',
    ],
  },
  {
    q: 'Can cheek fillers make me look younger?',
    paragraphs: [
      'Yes — and mid-face volume restoration is one of the most reliable anti-ageing treatments Dr Matla offers. As collagen and fat pads reduce over time, cheeks become hollow or flat, contributing significantly to a tired or aged appearance.',
      'Dr Matla\'s cheek filler treatment creates a fresher, more youthful appearance by replenishing this lost volume and restoring structural support. Results are immediate, with the final outcome visible within two to four weeks as the filler fully integrates with the tissue.',
      'Patients who visit Dr Matla for cheek filler often remark that the improvement goes beyond what they expected — restoring not just volume, but a general sense of freshness and vitality to the face.',
    ],
  },
  {
    q: 'Can cheek fillers lift the face and reduce nasolabial folds?',
    paragraphs: [
      'Yes — this is one of the most compelling aspects of Dr Matla\'s approach to mid-face treatment. By restoring volume at the cheekbone and repositioning descended fat pads, cheek filler provides a genuine lifting effect on the overlying skin and soft tissue.',
      'This often reduces the depth of nasolabial folds — the lines running from the nose to the corners of the mouth — without placing filler directly into those folds. Dr Matla considers this the more anatomically correct and natural-looking approach, treating the cause rather than the symptom.',
      'The lifting effect settles fully over two to four weeks. Patients consistently describe the improvement as looking like a well-rested, more youthful version of themselves — which is exactly the standard Dr Matla works to achieve.',
    ],
  },
  {
    q: 'How long do cheek fillers last?',
    paragraphs: [
      'Cheek fillers are among the longest-lasting areas of Dr Matla\'s treatments, typically persisting for twelve to eighteen months and sometimes beyond. The mid-face is a relatively low-movement area, which slows the natural breakdown of hyaluronic acid.',
      'Dr Matla selects denser, more structured filler products for cheek treatment — products suited to lifting and supporting the mid-face — which also contributes to extended longevity.',
      'Many of Dr Matla\'s patients choose to maintain their results with annual top-up appointments, which typically require progressively less product over time as each session builds on the structural foundation of the previous treatment.',
    ],
  },
  {
    q: 'Who is and is not suitable for cheek fillers?',
    paragraphs: [
      'Most healthy adults are suitable candidates for cheek filler — and Dr Matla assesses each patient individually at consultation to confirm suitability. The treatment is particularly effective for patients experiencing age-related mid-face volume loss, those with naturally flat or undefined cheekbones, or those looking to improve facial symmetry.',
      'Dr Matla does not recommend cheek filler during pregnancy or breastfeeding, for patients with active skin infections in the treatment area, or for those with certain autoimmune conditions. A full medical history is always reviewed before any treatment recommendation is made.',
      'Patients who have had previous permanent fillers placed in the cheeks require special assessment, as hyaluronic acid filler may behave differently in the presence of permanent material. Dr Matla always requests full disclosure of previous aesthetic treatments to ensure your safety.',
    ],
  },
];

export default function CheekFillersFaqPage() {
  return (
    <FaqLayout
      eyebrow="Cheek Filler Questions"
      title="Cheek Fillers — Your Questions, Answered."
      subtitle="Expert answers from Dr Matla on cheek filler treatment — from volume restoration and the lifting effect to longevity, suitability, and what results to realistically expect."
      breadcrumb="Cheek Fillers"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'Cheek Filler Treatment' },
        { to: '/treatments', label: 'Mid-Face Rejuvenation' },
        { to: '/faq/tear-trough', label: 'Tear Trough FAQ' },
      ]}
      relatedLinks={[
        { to: '/faq/tear-trough', label: 'Tear Trough FAQ' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
      ]}
    />
  );
}
