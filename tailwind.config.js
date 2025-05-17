/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 다크모드 class 기반
  theme: {
    extend: {
      fontFamily: {
        pixel: ['MoneygraphyPixel', 'sans-serif'],
        rounded: ['MoneygraphyRounded', 'sans-serif'],
        logo: ['MoneygraphyPixel', 'sans-serif'],
        display: ['Pretendard', 'sans-serif'],
        paper: ['Paperlogy', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      colors: {
        outlinePink: '#FF6B8A',
      },
    },
  },
  plugins: [
        // 글씨 보더라인 커스텀
        ({ addUtilities, theme }) => {
          addUtilities({
            '.text-stroke-pink': {
              color: '#fff',
              '-webkit-text-stroke-width': '2px',
              '-webkit-text-stroke-color': theme('colors.outlinePink'),
            },
            '.text-glow-pink': {
              'text-shadow':
                '0 0 0px #fff, 0 0 3px rgba(255,107,138,0.9), 0 0 6px rgba(255,107,138,0.6)',
            },
          });
        }
  ],
  safelist: [
    'font-rounded',
    'rounded-3xl',
    'bg-rose-400',
    'text-white',
    'text-2xl',
    'leading-10',
    'font-display',
    'px-6',
    'py-10',
    'text-center',
    'w-72',
    'bg-red-200',
    'border-[3px]',
    'border-red-400',
    'p-6',
    'space-y-4',
    'font-paper',
    'text-white',
    'leading-10',
    'shadow-sm',
    'relative',
    'mt-12',
    'group',
    'focus:outline-none',
    'focus-visible:ring-4',
    'focus-visible:ring-rose-300',
    'overflow-hidden',
    'absolute',
    'inset-0',
    'bg-red-400',
    'transition-transform',
    'duration-150',
    'group-hover:scale-105',
    'group-active:scale-95',
    'relative',
    'block',
    'px-10',
    'py-2',
    'bg-red-100',
    'text-xl',
    'font-logo',
    'text-red-300',
  ],
}