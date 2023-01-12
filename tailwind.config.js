/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-grey": "#262424",
        "secondary-grey": "#B3B3B3",
        "primary-green": "#5BC5B7",
      },
    },
  },
  plugins: [],
};
