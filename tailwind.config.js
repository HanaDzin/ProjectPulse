/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#FFF6EA",
        sidebarBg: "#FFBF61",
        saveBtn: "#8ABFA3",
        cancelBtn: "#D91656",
        inputBg: "#FFF6EA",
      },
    },
  },
  plugins: [],
};
