/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
