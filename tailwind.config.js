/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGray: '#eef2ff',
        brand: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#b6ddff',
          300: '#82c4ff',
          400: '#4ca5ff',
          500: '#1f86fb',
          600: '#0a6be0',
          700: '#0855b3',
          800: '#0c438c',
          900: '#0c2e5f',
        },
        accent: {
          400: '#15c2ad',
          500: '#0ea995',
        },
      },
      boxShadow: {
        custom: '0px 8px 10px 0px rgba(0, 0, 0, 0.2)',
      },
      clipPath: {
        'custom-shape': 'polygon(100% 0, 100% 100%, 10% 100%, 0 90%, 0 0)',
      },
      screens: {
        mdx: [{ max: '1053px', min: '1023px' }],
      },
      listStyleType: {
        'upper-alpha': 'upper-alpha',
      },
    },
  },
  plugins: [],
};
