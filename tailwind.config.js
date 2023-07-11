/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Big Shoulders Display", "cursive"],
        paragraph: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "tablet-hero": "url(./assets/tablet/image-hero.jpg)",
      },
    },
  },
  plugins: [],
};
