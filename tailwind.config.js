const tailwindConfig = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff8906",
        secondary:"#8E6447",
        darkprimary: "#e77d04",
        black: "#0b0909",
        lightblack: "#353030",
        lightblack2: "#0b132a",
        lightgray: "#4f5665",
        lightgray2: "#afb5c0",
        darkgray: "#f8f8f8",
        darkgray2: "#E8E8E8",
        darkwhite: "#dedede",
        green: "#00A700",
        greenbg: "#C9E6C9",
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;