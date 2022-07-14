/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#00263A",
        "medium-blue": "#4B9CD3",
        "cust-white": "#DCFEFF",
        "cust-tan": "#F9F2CF",
        "cust-orange": "#EA4F39",
      },
    },
  },
  plugins: [],
};
