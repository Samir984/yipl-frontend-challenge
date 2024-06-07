/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      colors: {
        "hero-bg1": "#002953",
        "hero-bg2": "#002D5B",
      },
      screens: {
        phone: "420px",
        tablet: "640px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
