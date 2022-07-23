module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      fgrey: "#21252a",
      blackbg: "#1c2024",
      logoblue: "#9DC7CD",
    },
    extend: {
      fontSize: {
        xs: ".5rem",
        sm: "1.10rem"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
