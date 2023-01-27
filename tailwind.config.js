/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      hero: "url('/src/images/background.png')",
    },
    extend: {
      objectPosition: {
        center: "center",
      },
      fontFamily: "Merriweather",
      height: {
        navbar: "5vh",
      },
      width: {
        30: 120,
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
