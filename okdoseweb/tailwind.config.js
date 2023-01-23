/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/**/*.{js,jsx,ts,tsx}',
    '*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#3f3cbb', //This is an example of a custom color
      },
    },
  },
};
