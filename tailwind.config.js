/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'slow-spin': 'spin 10s linear infinite',
       
      },

    },
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    variants: {
      filter: ['responsive'], // defaults to ['responsive']
      backdropFilter: ['responsive'], // defaults to ['responsive']
    },
  },
  plugins:[
    require('tailwindcss-filters'),
  ],
}
