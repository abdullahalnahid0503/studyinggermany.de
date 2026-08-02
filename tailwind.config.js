/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4fb',
          100: '#d6e4f5',
          200: '#aed0eb',
          300: '#7eb5dc',
          400: '#4993c9',
          500: '#2f74b0',
          600: '#1d5c97',
          700: '#003366',
          800: '#002b56',
          900: '#001f3f',
          950: '#001426',
        },
        accent: {
          50: '#fdf9ec',
          100: '#faf0cb',
          200: '#f3df93',
          300: '#ecca5b',
          400: '#e6bb43',
          500: '#d4af37',
          600: '#b78d24',
          700: '#926c22',
          800: '#785723',
          900: '#654821',
        },
        ink: '#1F2937',
        canvas: '#F8FAFC',
        success: '#16A34A',
        danger: '#DC2626',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px -2px rgba(0, 51, 102, 0.08)',
        'card': '0 4px 30px -6px rgba(0, 51, 102, 0.12)',
        'glow': '0 0 60px -10px rgba(212, 175, 55, 0.35)',
        'gold': '0 10px 40px -8px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(to right, rgba(0,51,102,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,51,102,0.04) 1px, transparent 1px)",
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #f4e4a6 50%, #D4AF37 100%)',
        'primary-gradient': 'linear-gradient(135deg, #003366 0%, #1d5c97 50%, #003366 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(0,31,63,0.55) 0%, rgba(0,31,63,0.7) 60%, rgba(248,250,252,1) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
