/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      screens: {
        phone: "420px",
        tablet: "640px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
