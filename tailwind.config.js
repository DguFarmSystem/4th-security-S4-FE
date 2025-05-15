/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 다크모드 class 기반
  theme: {
    extend: {
      fontFamily: {
        pixel: ['MoneygraphyPixel', 'sans-serif'],
        rounded: ['MoneygraphyRounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: ['font-rounded'],
}