/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#363C43",
          50: "#969696",
          500: "#171717",
          200: "#373E44",
          300: "#191B1F",
          400: "#282828",
        },
      },
    },
  },
  plugins: [],
};
