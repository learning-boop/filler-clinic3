import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '/assets/logo.webp';
import { SITE } from '../seo/siteConfig';

const faqDropdownItems = [
  { to: '/faq/lip-fillers', label: 'Lip Fillers FAQ' },
  { to: '/faq/jawline-chin', label: 'Jawline & Chin FAQ' },
  { to: '/faq/cheek-fillers', label: 'Cheek Fillers FAQ' },
  { to: '/faq/tear-trough', label: 'Tear Trough FAQ' },
  { to: '/faq/skin-anti-ageing', label: 'Skin & Anti-Ageing FAQ' },
  { to: '/faq/cost-pricing', label: 'Cost & Pricing' },
  { to: '/faq/safety-recovery', label: 'Safety & Recovery' },
  { to: '/faq/treatment-comparisons', label: 'Treatment Comparisons' },
];

const simpleLinks = [
  { to: '/treatments', label: 'Treatments' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const mobileLinks = [
  { to: '/treatments', label: 'Treatments' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function FaqDropdown({ scrolled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`relative flex items-center gap-1 text-[0.75rem] uppercase tracking-[0.22em] font-medium transition-all duration-300
        ${
          scrolled
            ? 'text-black'
            : 'text-white'
        }`}
      >
        FAQ

        <ChevronDown
          size={12}
          className={`transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 z-50">
          {faqDropdownItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-5 py-3 text-sm transition-all duration-200
              ${
                location.pathname === item.to
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-black hover:bg-rose-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-black/5'
          : 'bg-[#6E5D53]/85 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
        >

          {/* Logo Image */}
          <img
            src={logo}
            alt="Fillers Clinic Newcastle — Refined Aesthetic Medicine"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            width="56"
            height="56"
            className={`object-contain transition-all duration-300
            ${
              scrolled
                ? 'w-12 h-12'
                : 'w-14 h-14'
            }`}
          />

          {/* Brand Text */}
          <div className="flex items-baseline -ml-2">

            <span
              className={`transition-all duration-300
              ${
                scrolled
                  ? 'text-[#111111]'
                  : 'text-[#FAF7F2]'
              }`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.9rem',
                fontWeight: '500',
                letterSpacing: '-0.03em',
                lineHeight: '1',
              }}
            >
              Fillers
            </span>

            <span
              className={`transition-all duration-300
              ${
                scrolled
                  ? 'text-[#9C7443]'
                  : 'text-[#D4B07B]'
              }`}
              style={{
                fontFamily: "'Italiana', serif",
                fontSize: '1.7rem',
                letterSpacing: '-0.01em',
                marginLeft: '2px',
              }}
            >
              Clinic
            </span>

          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-7">

          {simpleLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative text-[0.74rem] uppercase tracking-[0.22em] font-medium transition-all duration-300
                ${
                  scrolled
                    ? isActive
                      ? 'text-black'
                      : 'text-black/70 hover:text-black'
                    : isActive
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <FaqDropdown scrolled={scrolled} />

        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-10 py-3 min-h-[44px] rounded-full whitespace-nowrap text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-300
            ${
              scrolled
                ? 'bg-black text-white hover:bg-rose-600'
                : 'bg-white text-black hover:bg-rose-300'
            }`}
          >
            Reserve Your Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`lg:hidden flex items-center justify-center w-12 h-12 -mr-2 transition-colors duration-300
          ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden
        ${
          open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }
        bg-white`}
      >
        <nav className="flex flex-col px-6 py-6">

          {mobileLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-xl py-4 min-h-[48px] flex items-center border-b border-black/5 last:border-0 transition-colors duration-300
                ${
                  isActive ? 'text-black font-medium' : 'text-black/70 hover:text-black'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-black text-white px-6 py-4 min-h-[48px] rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Reserve Consultation
          </a>

        </nav>
      </div>
    </header>
  );
}