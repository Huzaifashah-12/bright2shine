/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2B3C',
          light: '#24374D',
          dark: '#111D2A',
          deep: '#0B131C'
        },
        brand: {
          DEFAULT: '#B5441A',
          dark: '#933412',
          hover: '#CD4F20',
          light: '#E87B35',
          warm: '#F2995D'
        },
        sand: {
          light: '#FAF8F5',
          DEFAULT: '#F3E6DA',
          dark: '#E5D2C1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(27, 43, 60, 0.08)',
        'float': '0 20px 40px -10px rgba(27, 43, 60, 0.15)',
        'glow': '0 0 25px rgba(232, 123, 53, 0.35)',
        'card-3d': '0 25px 50px -12px rgba(181, 68, 26, 0.2)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
