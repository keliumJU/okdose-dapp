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
        'welcome-background': 'url(\'/assets/images/background.png\')',
        'welcome-background-mobile':
          'url(\'/assets/images/background-mobile.png\')'
      }
    }
  }
};
