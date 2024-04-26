/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff681a'
      },
    },
    fontFamily:{
      poppins:["Poppins", "sans-serif"],
      days:[ "Days One", "sans-serif"],
      monoton:[ "Monoton", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}

