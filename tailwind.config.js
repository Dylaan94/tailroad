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
        "text-grey": "#686666",
        "background-grey": "#f6f6f6",
        "primary-black": "#090909",
        "primary-purple": "#dd3bf8",
        "editor-primary-dark-grey": "#1D2124",
        "editor-secondary-dark-grey": "#1A1D20",
        "editor-primary-light-grey": "#212529",
      },
      backgroundImage: {
        digbeth: "url('~/src/images/digbeth.jpg')",
      },
    },
  },
  plugins: [],
};
