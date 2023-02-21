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
        'silver-gray': '#838383',
        'light-blue': '#BFDBFE',
        'light-red': '#FFD9D9',
        'strong-red': '#DC2626',
        'light-gray': '#525C7A',
        'very-light-gray': '#CED2DE'
      },
      backgroundImage: {
        'welcome-background': 'url(\'/assets/images/backgroundWelcome.png\')',
        'welcome-background-mobile':
          'url(\'/assets/images/backgroundWelcomeMobile.png\')',
        'home-background-mobile': 'url(\'/assets/images/homeMobile.png\')'
      }
    }
  }
};
