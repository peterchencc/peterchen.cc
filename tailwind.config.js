module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "chelsea-blue": "#023E8A",
      },
    },
    container: {
      center: true,
      padding: { default: "1rem", sm: "2rem", lg: "4rem", xl: "5rem" },
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            position: "relative",
            textDecoration: "none",
            "&:after": {
              content: "",
              position: "absolute",
              zIndex: "-1",
              top: "60%",
              left: "-0.1em",
              right: "-0.1em",
              bottom: "0",
              transition: "top 200ms cubic-bezier(0, 0.8, 0.8, 1)",
              backgroundColor: theme("colors.blue.200"),
            },
            "&:hover": {
              color: "#3182ce",
              "&:after": {
                top: "0%",
              },
            },
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
