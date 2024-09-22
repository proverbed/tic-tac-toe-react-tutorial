const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#674636",
        secondary: "#AAB396",
        neutral: "#F7EED3",
        neutralLight: "FFF8E8"
      },
      width: {
        100: "25rem",
        110: "27.5rem",
        128: "32rem"
      },
      padding: {
        15: "3.75rem"
      }
    }
  },
  plugins: []
});
