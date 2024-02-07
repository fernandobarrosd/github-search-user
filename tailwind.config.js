/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "360px"
        }
      }
    },
  },
  plugins: []
};