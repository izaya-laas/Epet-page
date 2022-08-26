module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "600px",
        desktop: "1024px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "third-color": "var(--third-color)",
        "fourth-color": "var(--fourth-color)",
        "op-primary-color": "var(--op-primary-color)",
        "op-secondary-color": "var(--op-secondary-color)",
        "gray-color": "var(--gray-color)",
      },
    },
  },
  plugins: [],
};
