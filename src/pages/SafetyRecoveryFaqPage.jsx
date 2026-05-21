import FaqLayout from '../components/FaqLayout';

const faqs = [
  {
    q: 'What aftercare should I follow after treatment with Dr Matla?',
    paragraphs: [
      'Dr Matla provides detailed written aftercare instructions at every appointment, tailored to the specific treatment you have received. The first 24–48 hours are the most important period — avoid touching, pressing, or massaging the treated area unless specifically instructed by Dr Matla to do so.',
      'Avoid strenuous exercise, saunas, steam rooms, and anything that significantly raises your body temperature for 24–48 hours. Avoid alcohol for 24 hours before and after treatment. Sleep on your back with your head slightly elevated on the first night.',
      'After the initial recovery period, Dr Matla recommends protecting your investment with consistent daily SPF and good hydration. She also schedules a follow-up review at two weeks for every new patient — assessing your final result and making any refinements needed to ensure complete satisfaction.',
    ],
  },
  {
    q: 'How long is the downtime, and when can I return to normal activities?',
    paragraphs: [
      'For most of Dr Matla\'s filler treatments, there is no formal downtime — patients can return to desk-based work and most daily activities immediately after their appointment. The practical consideration is visible swelling and potential bruising.',
      'Lip filler causes the most noticeable immediate swelling, typically peaking at 24–48 hours and resolving within five to seven days. Cheek, jaw, and chin treatments tend to produce less visible swelling. Bruising, when it occurs, can take seven to fourteen days to fully resolve.',
      'Dr Matla advises all patients to plan treatment at least two weeks before any important event or occasion — allowing full settling time and ensuring you are entirely happy with results before a significant social commitment.',
    ],
  },
  {
    q: 'What are the real risks of filler treatment, and how does Dr Matla manage them?',
    paragraphs: [
      'Dr Matla believes in complete transparency about the risks of filler treatment. Common side effects include temporary swelling, bruising, redness, and tenderness at injection sites — all expected, self-resolving, and discussed at consultation.',
      'The most serious risk of filler treatment is vascular occlusion — where filler inadvertently compresses a blood vessel, potentially compromising blood supply to the skin. This is rare in experienced hands but can occur in any injection procedure. Dr Matla is trained in emergency management of vascular complications and carries hyaluronidase for immediate dissolution at every appointment.',
      'Patient safety is the non-negotiable foundation of Dr Matla\'s practice. She will always discuss risks openly, ensure patients are fully informed before any treatment, and never proceed where there is any clinical concern.',
    ],
  },
  {
    q: 'Who should not have filler treatment?',
    paragraphs: [
      'During your consultation, Dr Matla reviews your full medical history to confirm you are a suitable candidate for treatment. Filler is not appropriate for patients who are pregnant or breastfeeding, those with active skin infections or cold sores in the treatment area, or those with bleeding disorders or on blood-thinning medication without clearance.',
      'Patients with certain autoimmune conditions, and those who may have body dysmorphic disorder, are also carefully assessed before any treatment is recommended. Dr Matla will never proceed with treatment where there is any clinical concern about suitability — your long-term wellbeing always comes before any treatment.',
      'Previous permanent filler in the area requires special assessment before further treatment. Dr Matla always requests full disclosure of any previous aesthetic treatments — and this information is kept entirely confidential within your patient record.',
    ],
  },
  {
    q: 'Can Dr Matla dissolve filler if I am unhappy with a previous result?',
    paragraphs: [
      'Yes — dissolving poorly placed or unwanted hyaluronic acid filler with hyaluronidase is one of the treatments Dr Matla regularly performs for patients who have had unsatisfactory results elsewhere. The enzyme works quickly and reliably, with effects typically visible within 24–48 hours.',
      'Dr Matla uses hyaluronidase in two situations: to manage complications where immediate dissolution is clinically necessary, and to reverse results a patient is unhappy with. Multiple sessions may occasionally be needed to fully dissolve larger volumes of filler.',
      'It is important to note that only hyaluronic acid fillers can be dissolved — calcium hydroxylapatite, PLLA, and permanent fillers cannot be reversed with hyaluronidase. This is one of the primary reasons Dr Matla exclusively uses HA-based products: the reversibility is a genuine safety advantage that she considers non-negotiable.',
    ],
  },
];

export default function SafetyRecoveryFaqPage() {
  return (
    <FaqLayout
      eyebrow="Safety & Recovery Questions"
      title="Safety & Recovery — Your Questions, Answered."
      subtitle="Transparent answers from Dr Matla on filler aftercare, downtime, risks, and safety — from what to expect in the first 48 hours to how complications are identified and managed."
      breadcrumb="Safety & Recovery"
      faqs={faqs}
      relatedTreatments={[
        { to: '/treatments', label: 'View All Treatments' },
        { to: 'https://portal.aestheticnursesoftware.com/book-online/1150', label: 'Book a Consultation' },
      ]}
      relatedLinks={[
        { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
        { to: '/faq/treatment-comparisons', label: 'Treatment Comparisons' },
        { to: '/faq/lip-fillers', label: 'Lip Filler FAQ' },
      ]}
    />
  );
}
