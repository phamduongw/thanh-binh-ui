/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        'white-1': '#FCFCFF',
        'blue-1': '#006AD0',
        'black-1': '#3f3f3f',
        'gray-1': '#e5e5e5',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        appear: 'appear .4s ease-in-out',
      },
      screens: {
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
