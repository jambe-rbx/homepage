const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2FCD9A",
          50: "#C2F1E2",
          100: "#B2EDDA",
          200: "#91E6CA",
          300: "#6FDEBA",
          400: "#4ED6AB",
          500: "#2FCD9A",
          600: "#259F78",
          700: "#1A7255",
          800: "#104433",
          900: "#051611",
        },
        dark: {
          DEFAULT: "#1a1a1a",
          50: "#f8f0f2",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#2e2e2e",
          900: "#120b0d",
        },
        light: {
          ...colors.zinc,
          DEFAULT: colors.zinc[50],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
}
