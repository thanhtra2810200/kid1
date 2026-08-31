/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        cream: {
          DEFAULT: '#FAF5EE',
          50: '#FDFBF7',
          100: '#FAF5EE',
          200: '#F2E9D8',
          300: '#E8D9BE',
          400: '#D9C49E',
          500: '#C5A878',
        },
        sky: {
          DEFAULT: '#B6E0EB',
          100: '#E4F3F8',
          200: '#C9E8F1',
          300: '#B6E0EB',
          400: '#8FCBDD',
          500: '#5FA9C0',
          600: '#3D87A3',
          700: '#2D6680',
        },
        blush: {
          DEFAULT: '#FFCBDB',
          100: '#FFE9F0',
          200: '#FFD9E5',
          300: '#FFCBDB',
          400: '#FFA9C2',
          500: '#FF7FA3',
          600: '#E85A85',
        },
        ink: {
          DEFAULT: '#1F2A37',
          900: '#1F2A37',
          800: '#2D3B4D',
          700: '#3E4D61',
          600: '#52647A',
          500: '#6B7D93',
          400: '#94A3B8',
          300: '#CBD5E1',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
      },
      spacing: {
        // 4px base unit — explicit scale for editorial layouts
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(31, 42, 55, 0.08)',
        card: '0 8px 32px -12px rgba(31, 42, 55, 0.12)',
        lift: '0 16px 48px -16px rgba(31, 42, 55, 0.16)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
