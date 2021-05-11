module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": {
            transform: "translateY(10px)",
          },
          "100%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        updown: "updown 2s ease-in-out infinite alternate-reverse both",
      },
      width: {
        hero: "26rem",
      },
      fontFamily: {
        itim: ["itim"],
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
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(max-content, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
