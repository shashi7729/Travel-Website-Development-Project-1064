/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#faebd7',
          200: '#f4d4a7',
          300: '#ecb876',
          400: '#e39944',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        earth: {
          50: '#f8f6f0',
          100: '#f0ead5',
          200: '#e0d4ab',
          300: '#cfbb7a',
          400: '#c0a555',
          500: '#a8924a',
          600: '#8f7a3e',
          700: '#756133',
          800: '#62502e',
          900: '#54452b',
        }
      },
      backgroundImage: {
        'safari-gradient': 'linear-gradient(135deg, #d97706 0%, #92400e 50%, #78350f 100%)',
        'adventure-gradient': 'linear-gradient(45deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)',
      }
    },
  },
  plugins: [],
}