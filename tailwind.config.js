/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-mode": "url('./Assets/Light_Mode_Background.svg')",
        "dark-mode": "url('./Assets/Dark_Mode_Background.svg')",
      },
    },
  },
  plugins: [],
}

