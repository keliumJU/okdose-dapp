/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/**/*.{js,jsx,ts,tsx}',
    '*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'gray-welcome': '#838383',
        'blue-pale': '#BFDBFE'
      },
      backgroundImage: {
        'background-welcome': 'url(\'/assets/images/background.png\')',
        'background-mobile-welcome':
          'url(\'/assets/images/background-mobile.png\')'
      }
    }
  }
};
