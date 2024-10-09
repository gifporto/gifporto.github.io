/** @type {import('tailwindcss').Config} */
module.exports = {
  devtool: false,
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        primary2: '#F4D160',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        body: ['Poppins']
      },
    },
  },
  plugins: [],
}

