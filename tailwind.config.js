const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    // add base styles here
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        h4: { fontSize: theme("fontSize.base") },
        h5: { fontSize: theme("fontSize.sm") },
        h6: { fontSize: theme("fontSize.xs") },
      });
    }),
    // add components here
    // plugin(function ({ addComponents, theme }) {
    //   const buttons = {
    //     ".btn": {
    //       padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
    //       borderRadius: theme("borderRadius.md"),
    //       fontWeight: theme("fontWeight.600"),
    //     },
    //   };
    //   addComponents(buttons);
    // }),
  ],
};
