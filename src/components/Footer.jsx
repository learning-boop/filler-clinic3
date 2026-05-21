import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Music2,
} from 'lucide-react';

import logo from '/assets/logo.webp';
import { SITE } from '../seo/siteConfig';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0E0606' }}
    >
      {/* Luxury mesh background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 18% 18%, rgba(150,72,70,0.20) 0px, transparent 55%), radial-gradient(at 82% 88%, rgba(185,112,88,0.15) 0px, transparent 55%)',
        }}
      />

      {/* Film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-blush-300/15">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

            {/* Logo */}
            <Link to="/" className="flex items-center">

              <img
                src={logo}
                alt="Fillers Clinic Newcastle"
                loading="lazy"
                decoding="async"
                width="80"
                height="80"
                className="w-20 h-20 object-contain"
              />

              {/* Brand text */}
              <div className="flex items-baseline -ml-5">

                <span
                  className="text-[#FAF7F2]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.4rem',
                    fontWeight: '500',
                    letterSpacing: '-0.03em',
                    lineHeight: '1',
                  }}
                >
                  Fillers
                </span>

                <span
                  className="text-[#D4B07B]"
                  style={{
                    fontFamily: "'Italiana', serif",
                    fontSize: '2.2rem',
                    letterSpacing: '-0.01em',
                    marginLeft: '2px',
                  }}
                >
                  Clinic
                </span>

              </div>

            </Link>

            {/* Description */}
            <p className="mt-7 text-bone/65 max-w-sm font-light leading-[1.85]">
              Expert aesthetic medicine, delivered with discretion from our
              private Newcastle clinic.
            </p>

            {/* Decorative divider */}
            <div className="mt-8 mb-8">

              <svg
                viewBox="0 0 200 12"
                className="w-44 h-3"
                fill="none"
                aria-hidden
              >

                <path
                  d="M0 6 Q 25 0, 50 6 T 100 6 T 150 6 T 200 6"
                  stroke="url(#footerGrad)"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />

                <circle cx="0" cy="6" r="1.5" fill="#B97058" />
                <circle cx="200" cy="6" r="1.5" fill="#B97058" />

                <defs>
                  <linearGradient
                    id="footerGrad"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                  >
                    <stop
                      offset="0"
                      stopColor="#B97058"
                      stopOpacity="0.0"
                    />

                    <stop
                      offset="0.5"
                      stopColor="#DBA38D"
                      stopOpacity="0.9"
                    />

                    <stop
                      offset="1"
                      stopColor="#B97058"
                      stopOpacity="0.0"
                    />
                  </linearGradient>
                </defs>

              </svg>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center flex-wrap gap-3">

              {[
                {
                  icon: Instagram,
                  href: SITE.social.instagram,
                  label: 'Instagram',
                  external: true,
                },
                {
                  icon: Facebook,
                  href: SITE.social.facebook,
                  label: 'Facebook',
                  external: true,
                },
                {
                  icon: Youtube,
                  href: SITE.social.youtube,
                  label: 'YouTube',
                  external: true,
                },
                {
                  icon: Music2,
                  href: SITE.social.tiktok,
                  label: 'TikTok',
                  external: true,
                },
                {
                  icon: Mail,
                  href: `mailto:${SITE.email}`,
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label, external }) => (

                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  className="
                    w-12 h-12 rounded-full
                    border border-blush-300/30
                    flex items-center justify-center
                    text-blush-300
                    hover:bg-blush-400
                    hover:text-onyx-900
                    hover:border-blush-400
                    transition-all duration-500
                  "
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>

              ))}

            </div>

            {/* CONTACT INFO */}
            <ul className="mt-8 space-y-3 text-sm text-bone/70 font-light">

              {/* LOCATION */}
              <li className="flex items-start gap-3">

                <MapPin
                  size={14}
                  className="mt-1 text-blush-300 shrink-0"
                  strokeWidth={1.5}
                />

                <span className="leading-relaxed">
                  Newcastle upon Tyne, United Kingdom
                </span>

              </li>

              {/* PHONE */}
              <li className="flex items-center gap-3">

                <Phone
                  size={14}
                  className="text-blush-300 shrink-0"
                  strokeWidth={1.5}
                />

                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="
                    py-2
                    min-h-[40px]
                    flex items-center
                    hover:text-blush-300
                    transition-colors
                  "
                >
                  {SITE.phone}
                </a>

              </li>

              {/* EMAIL */}
              <li className="flex items-center gap-3">

                <Mail
                  size={14}
                  className="text-blush-300 shrink-0"
                  strokeWidth={1.5}
                />

                <a
                  href={`mailto:${SITE.email}`}
                  className="
                    py-2
                    min-h-[40px]
                    flex items-center
                    hover:text-blush-300
                    transition-colors
                  "
                >
                  {SITE.email}
                </a>

              </li>

            </ul>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">

            {/* Treatments */}
            <div>

              <h4 className="eyebrow-light mb-6">
                Treatments
              </h4>

              <ul className="space-y-3.5 font-display font-light text-lg text-bone/85">

                <li>
                  <Link
                    to="/treatments#lip-fillers"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Lip Enhancement
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#cheek-fillers"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Cheek Contouring
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#tear-trough-fillers"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Tear Trough
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#jawline-fillers"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Jawline Definition
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#profhilo"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Profhilo Skin Renewal
                  </Link>
                </li>

              </ul>

            </div>

            {/* Experience */}
            <div>

              <h4 className="eyebrow-light mb-6">
                Experience
              </h4>

              <ul className="space-y-3.5 font-display font-light text-lg text-bone/85">

                <li>
                  <Link
                    to="/results"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Before & After
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Meet Dr. Matla
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    FAQ & Guides
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Consultation
                  </Link>
                </li>

                <li>
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-blush-300 transition-colors duration-300"
                  >
                    Book Appointment
                  </a>
                </li>

              </ul>

            </div>

            {/* Philosophy */}
            <div>

              <h4 className="eyebrow-light mb-6">
                Our Philosophy
              </h4>

              <p className="text-bone/65 leading-[1.9] font-light text-sm max-w-xs">
                Refined aesthetic treatments designed to enhance natural beauty
                with elegance, balance, and discretion.
              </p>

              <div className="mt-6">

                <Link
                  to="https://portal.aestheticnursesoftware.com/book-online/1150"
                  className="
                    inline-flex items-center gap-2
                    text-blush-300
                    hover:text-blush-200
                    transition-colors duration-300
                    text-sm
                    tracking-[0.2em]
                    uppercase
                  "
                >
                  Begin Your Journey
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          <p className="text-[0.72rem] text-bone/45 tracking-luxury uppercase font-light">
            © {new Date().getFullYear()} Fillers Clinic. All rights reserved.
          </p>

          <div className="flex gap-8 text-[0.72rem] text-bone/45 tracking-luxury uppercase font-light">

            <a
              href="#"
              className="hover:text-blush-300 transition-colors duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-blush-300 transition-colors duration-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-blush-300 transition-colors duration-300"
            >
              CQC Regulated
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}