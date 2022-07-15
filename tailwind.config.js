module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      fgrey: "#21252a",
      blackbg: "#1c2024",
    },
    extend: {
      fontSize: {
        xs: ".5rem",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
