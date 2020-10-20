module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ["components", "utilities"],
    content: ["./components/*.{js,ts,jsx,tsx}", "./pages/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ["Barlow"],
      },
      screens: {
        xl: "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
};
