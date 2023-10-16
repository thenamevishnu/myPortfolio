export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        header: "1px 1px 1px #000"
      },
      colors:{
        secondaryText: "#a5b3ce",
        primaryBg: "#19202e",
        primaryCard: "#1e2738",
        primaryButton: "#465981"

      }
    },
  },
  plugins: [],
}