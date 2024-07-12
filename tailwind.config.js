/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kokushoku: "#171412",
        "ghost-white": "#f8f8ff",
        "custom-blue": "#0048ba",
      },
    },
  },
  plugins: [],
};
