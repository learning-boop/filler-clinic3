/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── ONYX ── deep warm blacks with subtle red-brown undertone
        onyx: {
          DEFAULT: '#0E0606',
          50: '#F6F2F2',
          100: '#E8E0E0',
          200: '#C9BCBC',
          300: '#8E7B7B',
          400: '#5A4A4A',
          500: '#3A2C2C',
          600: '#251A1A',
          700: '#1A1010',
          800: '#120909',
          900: '#0E0606',
        },
        // ── BLUSH ── soft rose → deep rosewood
        blush: {
          50: '#FCF4F3',
          100: '#FAE8E6',
          200: '#F5D5D1',
          300: '#EEB8B2',
          400: '#E29892',
          500: '#D17B77', // primary
          600: '#B85E5C',
          700: '#964846',
          800: '#723736',
          900: '#532828',
        },
        // ── ROSE GOLD ── metallic warm pink (for accents only)
        rosegold: {
          50: '#FBF1ED',
          100: '#F4DDD2',
          200: '#E9C0AF',
          300: '#DBA38D',
          400: '#CC8A72',
          500: '#B97058',
          600: '#9C5743',
          700: '#7E4334',
          900: '#3D2118',
        },
        // ── BONE ── neutral creams with pink undertone
        bone: {
          DEFAULT: '#F8F2F0',
          50: '#FBF7F6',
          100: '#F8F2F0',
          200: '#EFE5E2',
          300: '#E2D3CE',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', '"Outfit"', 'system-ui', 'sans-serif'],
        italiana: ['"Italiana"', '"Fraunces"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        luxury: '0.18em',
        editorial: '0.32em',
        couture: '0.45em',
      },
      boxShadow: {
        'onyx-sm': '0 4px 24px -8px rgba(14, 6, 6, 0.10)',
        'onyx': '0 18px 60px -20px rgba(14, 6, 6, 0.30)',
        'onyx-lg': '0 36px 100px -28px rgba(14, 6, 6, 0.45)',
        'blush-glow': '0 0 80px -10px rgba(209, 123, 119, 0.45)',
        'rosegold-glow': '0 0 60px -10px rgba(185, 112, 88, 0.40)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.55)',
      },
      backgroundImage: {
        'blush-mesh':
          'radial-gradient(at 18% 12%, #FAE8E6 0px, transparent 45%), radial-gradient(at 85% 8%, #F5D5D1 0px, transparent 55%), radial-gradient(at 12% 88%, #FCF4F3 0px, transparent 50%), radial-gradient(at 88% 92%, #EEB8B2 0px, transparent 45%)',
        'onyx-mesh':
          'radial-gradient(at 20% 20%, #1A1010 0px, transparent 50%), radial-gradient(at 80% 0%, #3A2C2C 0px, transparent 55%), radial-gradient(at 0% 100%, #120909 0px, transparent 50%), radial-gradient(at 80% 100%, #251A1A 0px, transparent 50%)',
        'rosegold-shimmer':
          'linear-gradient(90deg, #964846 0%, #B97058 22%, #DBA38D 45%, #F4DDD2 50%, #DBA38D 55%, #B97058 78%, #964846 100%)',
        'onyx-blush-gradient':
          'linear-gradient(135deg, #0E0606 0%, #251A1A 35%, #964846 75%, #D17B77 100%)',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 6s linear infinite',
        'kenburns': 'kenburns 22s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'marquee': 'marquee 38s linear infinite',
        'mesh-shift': 'meshShift 14s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        meshShift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(2%, -2%) scale(1.06)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};