/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        "text-white": "#ffffff",
        "btn-acc": "#F8A917",
        "bg-black": "rgba(36, 36, 36, 1)",
        "btn-green": "#31B545",
        "grad-green": "#00FF0A",
        "dark-grey": "#656565",
        "btn-yellow": "#FFC600",
        "grad-yellow": "#FF8B00",
        "bg-dark": "#363636",
        "bg-light": "#FFF8EC",
        "btn-red": "#CF0000",
        "grad-red": "#A90000",
        "card-bord": "#e7e7e7",
        "btn-border": "#d3d5b6",
        "del-form": "#f7f7f721",
        "input-form": "#7a7a7a0d",
      },
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [],
};
