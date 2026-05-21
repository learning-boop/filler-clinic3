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
      className="relative overflow-hidden -mt-1 border-t border-white/5"
      style={{ background: '#0B0505' }}
    >

      {/* Luxury background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 15% 15%, rgba(185,112,88,0.18) 0px, transparent 50%), radial-gradient(at 85% 85%, rgba(212,176,123,0.12) 0px, transparent 55%)',
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='1'/></svg>\")",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 border-b border-white/10 pb-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

            {/* LOGO */}
            <Link to="/" className="flex items-center">

              <img
                src={logo}
                alt="Fillers Clinic"
                className="w-20 h-20 object-contain"
                loading="lazy"
              />

              <div className="flex items-baseline -ml-5">

                <span
                  className="text-[#FAF7F2]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.5rem',
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
                    fontSize: '2.3rem',
                    marginLeft: '2px',
                  }}
                >
                  Clinic
                </span>

              </div>

            </Link>

            {/* DESCRIPTION */}
            <p className="mt-7 text-[#D8CEC6]/70 leading-[1.9] font-light max-w-md">
              Luxury aesthetic treatments crafted to enhance natural beauty
              with subtle refinement, elegance, and clinical precision.
            </p>

            {/* DECORATIVE LINE */}
            <div className="mt-8 mb-8">

              <svg viewBox="0 0 200 12" className="w-44 h-3" fill="none">

                <path
                  d="M0 6 Q 25 0, 50 6 T 100 6 T 150 6 T 200 6"
                  stroke="url(#footerLine)"
                  strokeWidth="0.7"
                />

                <defs>
                  <linearGradient
                    id="footerLine"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                  >
                    <stop offset="0" stopColor="#B97058" stopOpacity="0" />

                    <stop offset="0.5" stopColor="#D4B07B" stopOpacity="1" />

                    <stop offset="1" stopColor="#B97058" stopOpacity="0" />
                  </linearGradient>
                </defs>

              </svg>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-3">

              {[
                {
                  icon: Instagram,
                  href: SITE.social.instagram,
                  label: 'Instagram',
                },
                {
                  icon: Facebook,
                  href: SITE.social.facebook,
                  label: 'Facebook',
                },
                {
                  icon: Youtube,
                  href: SITE.social.youtube,
                  label: 'YouTube',
                },
                {
                  icon: Music2,
                  href: SITE.social.tiktok,
                  label: 'TikTok',
                },
              ].map(({ icon: Icon, href, label }) => (

                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-12 h-12 rounded-full
                    border border-[#D4B07B]/20
                    flex items-center justify-center
                    text-[#D4B07B]
                    hover:bg-[#D4B07B]
                    hover:text-black
                    transition-all duration-500
                  "
                >
                  <Icon size={16} strokeWidth={1.6} />
                </a>

              ))}

            </div>

            {/* CONTACT */}
            <ul className="mt-10 space-y-4 text-sm text-[#D8CEC6]/75 font-light">

              <li className="flex items-start gap-3">

                <MapPin
                  size={15}
                  className="mt-1 text-[#D4B07B] shrink-0"
                />

                <span>
                  Newcastle upon Tyne, United Kingdom
                </span>

              </li>

              <li className="flex items-center gap-3">

                <Phone
                  size={15}
                  className="text-[#D4B07B] shrink-0"
                />

                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-[#D4B07B] transition-colors"
                >
                  {SITE.phone}
                </a>

              </li>

              <li className="flex items-center gap-3">

                <Mail
                  size={15}
                  className="text-[#D4B07B] shrink-0"
                />

                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[#D4B07B] transition-colors"
                >
                  {SITE.email}
                </a>

              </li>

            </ul>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10 pt-6 lg:pt-2">
            {/* CONCERNS */}
            <div>

              <h4 className="text-[#D4B07B] uppercase tracking-[0.25em] text-xs mb-8 min-h-[20px]">
                Concerns
              </h4>

              <ul className="space-y-5 text-[#F7F2EE]/85 font-light">

                <li>
                  <Link
                    to="/concerns/thin-lips"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Thin Lips
                  </Link>
                </li>

                <li>
                  <Link
                    to="/concerns/under-eye-hollows"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Under-Eye Hollows
                  </Link>
                </li>

                <li>
                  <Link
                    to="/concerns/facial-volume-loss"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Volume Loss
                  </Link>
                </li>

                <li>
                  <Link
                    to="/concerns/nasolabial-folds"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Smile Lines
                  </Link>
                </li>

                <li>
                  <Link
                    to="/concerns/jawline-definition"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Soft Jawline
                  </Link>
                </li>

              </ul>

            </div>

            {/* TREATMENTS */}
            <div>

              <h4 className="text-[#D4B07B] uppercase tracking-[0.25em] text-xs mb-8 min-h-[20px]">
                Treatments
              </h4>

              <ul className="space-y-5 text-[#F7F2EE]/85 font-light">

                <li>
                  <Link
                    to="/treatments#lip-fillers"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Lip Enhancement
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#cheek-fillers"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Cheek Contouring
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#tear-trough-fillers"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Tear Trough
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#jawline-fillers"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Jawline Definition
                  </Link>
                </li>

                <li>
                  <Link
                    to="/treatments#profhilo"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Profhilo
                  </Link>
                </li>

              </ul>

            </div>

            {/* CLINIC */}
            <div>

              <h4 className="text-[#D4B07B] uppercase tracking-[0.25em] text-xs mb-8 min-h-[20px]">
                Clinic
              </h4>

              <ul className="space-y-5 text-[#F7F2EE]/85 font-light">

                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    About Dr. Matla
                  </Link>
                </li>

                <li>
                  <Link
                    to="/results"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Before & After
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    FAQ & Guides
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#D4B07B] transition-colors"
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>


          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

          <p className="text-[11px] uppercase tracking-[0.2em] text-[#D8CEC6]/40 font-light">
            © {new Date().getFullYear()} Fillers Clinic. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.2em] text-[#D8CEC6]/40 font-light">

            <a
              href="#"
              className="hover:text-[#D4B07B] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#D4B07B] transition-colors"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="hover:text-[#D4B07B] transition-colors"
            >
              CQC Regulated
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}