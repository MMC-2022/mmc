module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      mmcTheme: {
        "primary": "#0000FF",
        "background-color": "#0000FF",
      },
    },
  },
};
