/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '475px',

      sm: '640px',

      md: '768px',

      mlg: '992px',

      lg: '1024px',

      xl: '1280px',
    },
  },
  plugins: [],
};
