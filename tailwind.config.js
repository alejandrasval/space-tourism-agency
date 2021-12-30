const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'bellefair': ['Bellefair', 'sans-serif'],
    },
    backgroundImage: {
      'background1': "url('https://res.cloudinary.com/dtkdsolsz/image/upload/v1640357392/Space%20Tourism/background-home-desktop_u16hul.jpg')",
      'background2': "url('https://res.cloudinary.com/dtkdsolsz/image/upload/v1640357407/Space%20Tourism/background-destination-desktop_kw1owx.jpg')",
      'background3': "url('https://res.cloudinary.com/dtkdsolsz/image/upload/v1640357436/Space%20Tourism/background-crew-desktop_b3ihqy.jpg')",
      'background4': "url('https://res.cloudinary.com/dtkdsolsz/image/upload/v1640406170/Space%20Tourism/background-technology-desktop_acl4vw.jpg')",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      purple: colors.purple,
      blue: colors.blue,
      sky: colors.sky,
      red: colors.red,
      green: colors.emerald,
      yellow: colors.amber,
      pink: colors.pink,
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
