/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out',
        rocketLine: 'rocketLine 1.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        rocketLine: {
          '0%': { width: '0%', transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { width: '100%', transform: 'translateX(0)' },
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
