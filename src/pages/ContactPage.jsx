import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import { SITE } from '../seo/siteConfig';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fillers Clinic Newcastle',
    description:
      'Book a private consultation at Fillers Clinic Newcastle. Tell us what you are considering — we respond personally within one working day.',
    url: `${SITE.url}/contact`,
    mainEntity: { '@id': `${SITE.url}/#organization` },
  };

  return (
    <>
      <SEO
        title="Contact Fillers Clinic Newcastle — Book a Consultation"
        description="Book a private consultation at Fillers Clinic Newcastle. Lip, cheek, jawline, tear trough and chin fillers by Dr Matla. We respond personally within one working day."
        keywords="contact Fillers Clinic Newcastle, book consultation Newcastle aesthetic clinic, Dr Matla appointment, fillers consultation Newcastle"
        canonical="/contact"
        jsonLd={[
          contactPageSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Begin"
        title="A private"
        accent="conversation."
        subtitle="Tell us a little about what you're considering. We'll respond personally within one working day."
      />

      <section className="px-6 md:px-12 lg:px-20 pb-32 relative overflow-hidden">
        {/* Soft bloom */}
        <div
          aria-hidden
          className="absolute top-0 -right-32 w-[40rem] h-[40rem] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(238,184,178,0.20) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            {sent ? (
              <div className="relative border border-blush-400/45 bg-bone/60 backdrop-blur p-12 text-center shadow-onyx-sm">
                <div className="w-16 h-16 mx-auto rounded-full bg-onyx text-bone flex items-center justify-center mb-6 shadow-onyx">
                  <Check size={22} strokeWidth={1.5} />
                </div>
                <h3
                  className="font-display font-light text-3xl text-onyx tracking-[-0.02em]"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  Thank you.
                </h3>
                <p className="mt-3 text-onyx/70 font-light leading-relaxed">
                  We'll be in touch within one working day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" type="tel" name="phone" />
                </div>
                <Field label="Treatment of interest" name="treatment" />
                <div>
                  <label className="eyebrow-onyx block mb-3">Message</label>
                  <textarea rows={5} name="message" className="input-luxury resize-none" />
                </div>
                <button type="submit" className="btn-luxury-primary group">
                  Send Enquiry
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                  />
                </button>
              </form>
            )}
          </motion.div>

          {/* Details aside */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-blush-400/45 p-10 bg-bone/60 backdrop-blur shadow-onyx-sm">
              <div className="flex items-center gap-3 mb-7">
                <span className="rosegold-rule" />
                <span className="eyebrow">Visit Us</span>
              </div>
              <h3
                className="font-display font-light text-3xl text-onyx tracking-[-0.02em]"
                style={{ fontVariationSettings: '"opsz" 60' }}
              >
                Newcastle upon Tyne
              </h3>
              <ul className="mt-9 space-y-6">
                {[
                  {
                    Icon: MapPin,
                    body: (
                      <>
                        Newcastle upon Tyne<br />United Kingdom
                      </>
                    ),
                  },
                  {
                    Icon: Phone,
                    body: (
                      <a
                        href="tel:0333 444 1399"
                        className="hover:text-rosegold-700 transition-colors duration-300"
                      >
                        0333 444 1399

                      </a>
                    ),
                  },
                  {
                    Icon: Mail,
                    body: (
                      <a
                        href="mailto:hello@fillers.skin"
                        className="hover:text-rosegold-700 transition-colors duration-300"
                      >
                        hello@fillers.skin
                      </a>
                    ),
                  },
                  {
                    Icon: Clock,
                    body: (
                      <>
                        Mon — Fri · 09:00 — 19:00
                        <br />Sat · 10:00 — 16:00
                      </>
                    ),
                  },
                ].map(({ Icon, body }, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-onyx/75 font-light leading-relaxed"
                  >
                    <Icon size={16} className="mt-1 text-rosegold-600 shrink-0" strokeWidth={1.5} />
                    <div>{body}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 aspect-[4/3] overflow-hidden shadow-onyx-sm">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Newcastle+upon+Tyne&output=embed"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label className="eyebrow-onyx block mb-3">{label}</label>
      <input type={type} name={name} required={required} className="input-luxury" />
    </div>
  );
}
