module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: (theme) => ({
        pattern: "url('../images/pattern-bg.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
