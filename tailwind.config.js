/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },

  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      display: ['Playfair Display', 'serif'], // Add Playfair Display
    },
  }

}

