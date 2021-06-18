module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
         colors: {
           brand: {
             DEFAULT: "#d35400"
           }
         }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}