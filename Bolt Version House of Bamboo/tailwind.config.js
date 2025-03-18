/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bamboo: {
          dark: '#1A2721',
          gold: '#D4AF37',
          red: '#FF4D4D',
          leaf: '#4A5D4C'
        }
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};