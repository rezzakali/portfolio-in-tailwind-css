module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extends: {},
    screens: {
      sm: { min: '250px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1535px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    plugins: [],
  },
};
