module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      flex: {
        "1/2": "0 0 50%",
        "1/3": "0 0 33.333333%",
        "2/3": "0 0 66.666667%",
      },
    },
  },
  plugins: [],
};
