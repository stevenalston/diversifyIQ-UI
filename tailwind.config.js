/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iqblack: {
          800: '#131414',
          900: '#07070b'
        },
        iqgold: {
          50: '#f6ebda',
          100: '#FBEAC9',
          300: '#EDC874',
        },
        iqteal: {
          400: '#44F5ED',
          800: '#1B3631',
        },
        peach: {
          200: '#fccfaa',
          300: '#efbe9a',
        },
        tan: {
          200: '#e3bc91',
          300: '#e8bf96',
        },
        mint: {
          200: '#b4d3be',
          300: '#bde2d1',
        },
        palemint: {
          200: '#bac5ae',
          300: '#b9c8b2'
        }
      },
      fontFamily: {
        sans: ['Oswald', 'ui-sans-serif', 'system-ui'],
        display: '"Patua One"',
      }
    },
  },
  plugins: [],
}