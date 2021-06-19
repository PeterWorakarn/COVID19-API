module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
         colors: {
           brand: {
             DEFAULT: "#fe5f75",
             light: "#fc9842"
           }
         }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}