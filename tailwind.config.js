module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mmcTheme: {
            "primary": "#184A54",
            "secondary": "#FEECD5",
            "accent": "#FCC877",
            "neutral": "#FCC877",
            "base-100": "#184A54",
            "color": "#FEECD5",
            "--bc": "#184A54",
          },
    },]
  },
};
