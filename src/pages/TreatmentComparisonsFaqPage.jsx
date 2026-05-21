import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'What is the difference between fillers and Botox?',
    paragraphs: [
      'Fillers and Botox are often discussed together but work in entirely different ways — and understanding the distinction helps patients make more informed decisions. Dr Matla explains this clearly at every relevant consultation.',
      'Dermal fillers add volume, structure, and contour — they physically fill areas that have lost volume or require additional support. Botox relaxes the muscles responsible for dynamic facial expressions, reducing the lines those movements create. Dr Matla uses fillers for static lines visible at rest, volume restoration, and structural definition. Anti-wrinkle injections are used for expression-driven lines such as frown lines, forehead creases, and crow\'s feet.',
      'Many of Dr Matla\'s patients benefit from a thoughtful combination of both — often called a liquid facelift — where each treatment addresses a different component of facial ageing. Dr Matla assesses at consultation whether a combined approach is genuinely appropriate for your specific concerns.',
    ],
  },
  {
    q: 'Fillers vs. surgical procedures — how does Dr Matla approach this comparison?',
    paragraphs: [
      'Dr Matla is committed to honest, patient-first advice — which means she will tell you clearly if surgery would serve your goals better than non-surgical treatment. Some structural changes, significant skin excess, or advanced ageing require what only surgery can provide, and misrepresenting what fillers can achieve does not serve patients.',
      'For most patients in their 30s, 40s, and early 50s, non-surgical treatment with Dr Matla provides excellent, meaningful results. For older patients with significant skin laxity or more dramatic ageing changes, surgery may ultimately provide a more complete result — and Dr Matla will tell you honestly which category you fall into.',
      'Where non-surgical treatment is appropriate, Dr Matla\'s results are immediate, involve no incisions, and are fully reversible for hyaluronic acid fillers. These advantages make non-surgical treatment the right first step for the vast majority of her patients.',
    ],
  },
  {
    q: 'Hyaluronic acid fillers vs. other filler types — what does Dr Matla use and why?',
    paragraphs: [
      'Dr Matla exclusively uses hyaluronic acid (HA) fillers for the vast majority of her treatments — a considered clinical choice based on safety, predictability, and reversibility. HA is a naturally occurring substance in the body, making HA fillers biocompatible and well-tolerated.',
      'The key advantage of HA fillers that Dr Matla considers non-negotiable is reversibility. If results are unsatisfactory or a complication occurs, HA filler can be dissolved immediately with hyaluronidase. Other filler types — calcium hydroxylapatite, PLLA, and permanent fillers — cannot be dissolved, which carries significantly greater long-term risk.',
      'Dr Matla believes this represents the most responsible approach to patient safety. She selects different HA formulations — varying in viscosity, firmness, and elasticity — for different treatment areas, always choosing the product most suited to the anatomy being treated and the result being sought.',
    ],
  },
  {
    q: 'PRP vs. fillers — which does Dr Matla recommend and when?',
    paragraphs: [
      'PRP and fillers address different aspects of skin health and ageing, and Dr Matla uses both regularly — often in combination for patients whose concerns span both structural and skin-quality improvements.',
      'Fillers provide immediate structural improvement: volume, contour, and lift. PRP stimulates the skin\'s own regenerative processes, gradually improving texture, tone, hydration, and collagen density over six to twelve weeks. Dr Matla recommends PRP particularly for patients whose primary concern is skin quality — dullness, fine surface lines, acne scarring, or uneven texture.',
      'For many of Dr Matla\'s patients, a combined approach achieves a more comprehensive result than either treatment alone. She will always explain clearly at consultation which treatment addresses which concern, and what timeline and investment each involves.',
    ],
  },
  {
    q: 'How do Dr Matla\'s treatments compare to skincare and lifestyle changes?',
    paragraphs: [
      'Dr Matla consistently emphasises that aesthetic treatments and skincare are not alternatives — they work best together. Skincare and lifestyle are the foundation of long-term skin health, and no treatment compensates for poor sun protection, dehydration, or smoking.',
      'At the same time, skincare cannot replace lost volume, reposition descended fat pads, or add structural definition to the jawline and chin. These structural changes require treatment. Dr Matla\'s role is to provide the treatments that skincare genuinely cannot — and to be honest about the distinction.',
      'At consultation, Dr Matla always reviews your current skincare routine and discusses how to optimise it alongside any recommended treatments. The best outcomes consistently come from combining excellent skincare habits with appropriately chosen aesthetic treatments — and Dr Matla\'s patients benefit from guidance on both.',
    ],
  },
];

export default function TreatmentComparisonsFaqPage() {
  return (
    <FaqLayout
      eyebrow="Treatment Comparisons"
      title="Treatment Comparisons — Your Questions, Answered."
      subtitle="Clear, honest comparisons from Dr Matla between fillers and Botox, surgical and non-surgical options, and different filler types — helping you make the most informed decision for your goals."
      breadcrumb="Treatment Comparisons"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'View All Treatments' },
        { to: 'https://portal.aestheticnursesoftware.com/book-online/1150', label: 'Book a Consultation' },
      ]}
      relatedLinks={[
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
        { to: '/faq/skin-anti-ageing', label: 'Skin & Anti-Ageing FAQ' },
      ]}
    />
  );
}
