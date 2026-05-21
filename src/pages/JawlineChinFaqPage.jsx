import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'How can I get a sharper jawline without surgery?',
    paragraphs: [
      'A defined jawline is one of the most sought-after aesthetic improvements — and one of Dr Matla\'s areas of particular expertise. Jawline filler creates sharper contours and improved facial balance without surgery, with immediate, visible results and minimal downtime.',
      'Dr Matla places dermal filler along the mandible to sharpen and define the jaw angle, adding structural support to the bone architecture beneath the skin. The result is crisp definition that photographs beautifully and reads naturally in person.',
      'At consultation, Dr Matla assesses your natural bone structure, skin quality, and the degree of definition achievable — giving you a realistic and honest picture of what treatment can achieve for your specific anatomy.',
    ],
  },
  {
    q: 'Can fillers improve a weak or recessed chin?',
    paragraphs: [
      'Chin projection is one of the most impactful and underappreciated areas of facial aesthetics. Dr Matla routinely treats patients seeking chin enhancement — improving projection and balancing the side profile with immediately visible results and no surgery required.',
      'A recessed chin affects overall facial harmony significantly. It anchors the lower third of the face, and when underprojected, even a well-proportioned nose can appear disproportionately large. Dr Matla places filler at the chin point and, where appropriate, along the lateral chin to improve both projection and width.',
      'Many of Dr Matla\'s patients find chin enhancement to be among the most transformative treatments they have received — improving confidence in photographs and in daily life in a way that feels natural and proportionate.',
    ],
  },
  {
    q: 'How long do jawline fillers last?',
    paragraphs: [
      'Jawline fillers typically last between twelve and eighteen months, making this one of the longer-lasting areas for filler treatment. Dr Matla selects firmer, higher-G\' hyaluronic acid products specifically suited to structural work in this area, which contributes significantly to longevity.',
      'At your consultation, Dr Matla will discuss how your individual metabolism and lifestyle are likely to affect your result. Many patients maintain results with annual top-up appointments that progressively require less product as each session builds on the structural foundation of the last.',
      'Dr Matla provides honest, realistic guidance on longevity at every consultation — ensuring you have a clear picture of the ongoing investment before committing to treatment.',
    ],
  },
  {
    q: 'Is jawline filler safe?',
    paragraphs: [
      'Jawline fillers are safe when performed by a qualified, medically trained professional — and patient safety is the cornerstone of Dr Matla\'s practice. She uses only clinically approved hyaluronic acid products and carries emergency hyaluronidase at every appointment.',
      'Mild swelling or bruising may occur temporarily and resolves within a week for most patients. Dr Matla\'s thorough knowledge of facial anatomy — including the course of the facial artery along the jawline — ensures injections are placed safely and precisely.',
      'Every patient undergoes a full medical history review and facial assessment before any treatment is recommended. Dr Matla will never proceed where there is any clinical concern, and always takes time to ensure patients feel fully informed and comfortable.',
    ],
  },
  {
    q: 'What is the best non-surgical jawline treatment?',
    paragraphs: [
      'In Dr Matla\'s clinical experience, dermal fillers are among the most effective non-surgical jawline treatments available — providing immediate, meaningful contouring with results visible the same day and fully settled within two weeks.',
      'For some patients, Dr Matla recommends combining jawline filler with a skin-tightening procedure — particularly where mild skin laxity is present alongside volume and definition concerns. A personalised treatment plan is always designed around your specific anatomy and goals.',
      'The consultation with Dr Matla includes a thorough facial assessment and an honest discussion of all suitable options — ensuring the approach taken is genuinely the most effective for you, not simply the most complex or expensive.',
    ],
  },
];

export default function JawlineChinFaqPage() {
  return (
    <FaqLayout
      eyebrow="Jawline & Chin Questions"
      title="Jawline & Chin Filler — Your Questions, Answered."
      subtitle="Expert answers from Dr Matla on non-surgical jawline contouring and chin enhancement — covering results, longevity, safety, and what to realistically expect."
      breadcrumb="Jawline & Chin"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'Jawline Contouring' },
        { to: '/treatments', label: 'Chin Enhancement' },
        { to: '/faq/cheek-fillers', label: 'Cheek Filler FAQ' },
      ]}
      relatedLinks={[
        { to: '/faq/lip-fillers', label: 'Lip Fillers FAQ' },
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
      ]}
    />
  );
}
