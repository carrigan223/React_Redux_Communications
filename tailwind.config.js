module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova"]
      },

      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }],
        sm: ["0.9rem"],
        header: ["2rem"]
      },
      boxShadow: {
        card: "0px 0.998258px 5px rgba(0, 0, 0, 0.25)",
        dialog: "4px 4px 15px 0 rgba(36, 37, 38, 0.22)"
      },
      colors: {
        green: {
          50: "#D8FDED"
        },
        gray: {
          75: "#f0f1f3"
        },
        backgroundColor: ["active"]
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#15192E",
      white: "#ffffff",

      gray: {
        50: "#F8F9FA",
        100: "#E9E9EC",
        200: "#D3D4D9",
        300: "#BEBFC6",
        400: "#A9AAB4",
        500: "#9596A2",
        600: "#818290",
        700: "#656576",
        800: "#494A5D",
        900: "#2E3145"
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
      },
      orange: {
        10: "#FEF5ED",
        50: "#FFF2EB",
        100: "#FFD8C2",
        200: "#FFCBAD",
        300: "#FFB185",
        400: "#FF985C",
        500: "#FF792A",
        600: "#F55A00",
        700: "#E05200",
        800: "#B84300",
        900: "#8F3400"
      },
      yellow: {
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#FDC10D",
        600: "#d69e2e",
        700: "#b7791f",
        800: "#975a16",
        900: "#744210"
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },
      teal: {
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52"
      },
      blue: {
        50: "#EFF6FF",
        100: "#DBEAFE",
        200: "#BFDBFE",
        300: "#93C5FD",
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
        800: "#1E40AF",
        900: "#1E3A8A"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
      },
      purple: {
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a"
      },
      pink: {
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459"
      }
    }
  },
  fontFamily: {
    sans: [
      '"Proxima Nova"',
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ],
    serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ]
  },
  variants: {},
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio")
  ]
};
