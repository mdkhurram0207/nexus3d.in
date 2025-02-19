/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-out',
        rocketLine: 'rocketLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        rocketLine: {
          '0%': {
            width: '0%',
            transform: 'translateX(-100%)',
          },
          '50%': {
            transform: 'translateX(50%)',
          },
          '100%': {
            width: '100%',
            transform: 'translateX(0)',
          },
        },
      },
      // Adding scroll-behavior to extend Tailwind CSS
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
