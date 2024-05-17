export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "376px",
        Tablet : "900px",
        Desktop: "1440px",
      },
      
      colors: {
        "primary-violet": "hsl(257, 40%, 49%)",
        "soft-mageneta": " hsl(300, 69%, 71%)",   
      },
      fontFamily: {
        poppins: ["Poppins Font", "sans-serif"],
        'open-sans': ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};