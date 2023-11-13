/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'card-hover': '0 2px 8px 3px rgb(0 0 0 / 0.3)',
        'card': '0 2px 4px 1px rgb(0 0 0 / 0.3)',
      },
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

