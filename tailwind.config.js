/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#121110',
          2: '#1b1917',
        },
        washi: {
          DEFAULT: '#ece6da',
          dim: '#948c7e',
        },
        seal: {
          DEFAULT: '#b3151b',
          bright: '#e6564f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
