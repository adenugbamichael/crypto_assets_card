/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(20, 23, 43, 1)",
        secondary: "#ECF0FF",
      },
    },
  },
  plugins: [],
}
