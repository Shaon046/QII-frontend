/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

colors:{
  "primary-blue-light":"#00f5e1",
  "primary-blue-dark":"#1d2c4f"
},

      backgroundImage: {
        'login-page-gradient': 'linear-gradient(0deg, rgba(0,193,187,1) 0%, rgba(0,116,130,1) 100%)',
      }

    },
  },
  plugins: [],
}

