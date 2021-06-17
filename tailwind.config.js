module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
         colors: {
           brand: {
             light: "hsl(222, 100%, 93%)",
             DEFAULT: "hsl(215, 84%, 56%)",
             dark: "hsl(215, 84%, 23%)"
           }
         },
         fontFamily: {
           
         }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}