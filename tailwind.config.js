/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        white: '#FFFFFF',
        'off-white': '#F7F7F4',
        'deep-navy': '#0B1F33',
        'accent-blue': '#1667D9',
        'warm-yellow': '#E9B949',
        'light-grey': '#E9E9E6',
        'mid-grey': '#8A8A86',
      },
      fontFamily: {
        display: ['Inter Tight', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '64px',
        '2xl': '128px',
        '3xl': '160px',
      },
      borderRadius: {
        'sm': '12px',
        'md': '20px',
        'lg': '28px',
        'xl': '40px',
      }
    },
  },
  plugins: [],
}
