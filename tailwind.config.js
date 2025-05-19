// tailwind.config.js
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
    /* 글씨 보더·글로우 유틸리티 */
    plugin(function ({ addUtilities, theme }) {
      addUtilities(
        {
          '.text-stroke-pink': {
            color: '#fff',
            '-webkit-text-stroke-width': '2px',
            '-webkit-text-stroke-color': theme('colors.outlinePink'),
          },
          '.text-glow-pink': {
            'text-shadow':
              '0 0 0px #fff, 0 0 3px rgba(255,107,138,0.9), 0 0 6px rgba(255,107,138,0.6)',
          },
        },
        { variants: ['responsive'] } // 필요 없으면 생략해도 됨
      );
    }),
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
    'block',
    'px-10',
    'py-2',
    'bg-red-100',
    'text-xl',
    'font-logo',
    'text-red-300',

     // 모달 배경
  'fixed',
  'inset-0',
  'z-[999999]',
  'bg-black',
  'bg-opacity-30',
  'flex',
  'items-center',
  'justify-center',

  // 모달 본체
  'w-[315px]',
  'h-[432px]',
  'rounded-[11px]',
  'bg-white',
  'p-4',
  'flex-col',
  'justify-between',

  // 썸네일 박스
  'w-[276px]',
  'h-[189px]',
  'flex-shrink-0',
  'rounded-[17px]',
  'bg-[#FF8989]',
  'mx-auto',
  'items-center',

  // 썸네일 텍스트
  'text-[36px]',
  'font-normal',
  'leading-[45px]',
  'text-[#FFF6F6]',
  'text-center',

  // 설명 텍스트
  'w-[271px]',
  'h-[110px]',
  'text-black',
  'mt-6',
  'mb-6',
  'break-words',

  // 외부 링크 버튼
  'w-[230px]',
  'h-[31px]',
  'bg-[#FFEBEB]',
  'rounded-[11px]',
  'transition-opacity',
  'hover:opacity-80',
  'no-underline', // underline 제거
  ],
};
