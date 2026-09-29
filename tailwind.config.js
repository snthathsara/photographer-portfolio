/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        'primary-text': '#E1E0CC',
        dark: {
          950: '#000000',
          900: '#101010',
          800: '#181818',
          700: '#212121',
          600: '#2c2c2c',
        },
        cream: {
          50: '#FBF9F4',
          100: '#F7F5EE',
          200: '#EBE7D8',
          300: '#DEDBC8',
          400: '#C4BAA3',
        }
      },
      fontFamily: {
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
