// Specifies what POSTCSS plugins we want to use.
// Autoprefixer adds vendor prefixes. e.g. moz
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: [""],
    }),
  ],
};
