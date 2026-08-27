/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F6F1E8',
          200: '#ECE3D2',
          300: '#DDD0B8',
        },
        ink: {
          900: '#14110D',
          800: '#241F18',
          700: '#3A3328',
          600: '#52483A',
          500: '#6B5F4E',
        },
        rust: {
          400: '#B5654A',
          500: '#9C4A30',
          600: '#7E3A26',
          700: '#5F2C1C',
        },
        olive: {
          300: '#A9A076',
          400: '#8A8255',
          500: '#6E6840',
          600: '#534E2F',
        },
        sand: {
          200: '#E8DFD0',
          300: '#D9CDB6',
          400: '#C4B69A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.4s ease forwards',
        'slow-zoom': 'slowZoom 18s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
