/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      hubRed: '#EC6664',
      hubRedDark: '#cc4d59',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/Images/Group_39403_min.png')",
      },
    },
  },
  plugins: [],
}

