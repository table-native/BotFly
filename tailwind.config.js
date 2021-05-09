module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Itim: ["Itim"],
        mono: [
          "Source Code Pro",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      colors: {
        dark: "#031613",
        darker: "#000D0A",
        transparentDark: "rgba(66, 66, 66, 0.34)",
        transparentDarker: "rgba(0, 0, 0, 0.28)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
