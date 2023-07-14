/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7D060",
        secondary: "#FFF2CC",
        light: "#FFD95A",
        header: "#277BC0",
        textc: "#025464",
        orange: "#FF8551",
        about: "#AFD3E2",
        aboutbg: "#FBEEAC",
        hover: "#45CFDD",
        button: "#F29727",
      },
    },
  },
  plugins: [],
};
