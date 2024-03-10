/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe4a23",
        yellow: "#ffd027",
        black: "#0d0d0d",
        offWhite: "#f0f0f0",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"],
      },
    },
  },
  plugins: [],
};
