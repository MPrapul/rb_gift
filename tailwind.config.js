/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#03033C', // RGB(3, 3, 60)
        'mint-green': '#98D8D0',
        'light-pink': '#FFB6C1',
        'mustard-yellow': '#F4D03F',
      },
    },
  },
  plugins: [],
} 