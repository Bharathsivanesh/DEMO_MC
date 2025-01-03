/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      background: '#17161c',
      textgmail:'#453FF3',
    },
    backgroundImage: {
      'whiteportfolio': "url('../client/src/Portfolio/images/Header.png')",
    },
  },
  },
  plugins: [],
};
