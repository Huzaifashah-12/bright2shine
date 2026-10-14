/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2B3A', // Deep navy
          light: '#263d52',
          dark: '#131e28'
        },
        navy: {
          DEFAULT: '#1B2B3A', // Deep navy (aliases for backward compatibility)
          light: '#263d52',
          dark: '#131e28',
          deep: '#0e161e'
        },
        accent: {
          DEFAULT: '#B5441A', // Burnt orange
          hover: '#9a3814',
          dark: '#7e2d10',
          light: '#cf5a2d'
        },
        brand: {
          DEFAULT: '#B5441A', // Burnt orange (aliases for backward compatibility)
          hover: '#9a3814',
          dark: '#7e2d10',
          light: '#cf5a2d',
          ice: '#F3EFEA'
        },
        aqua: {
          DEFAULT: '#3BA8B5', // Fresh aqua
          hover: '#31929d',
          light: '#5fc3ce',
          ice: '#eaf6f8'
        },
        body: {
          DEFAULT: '#2B2F33', // Charcoal
          muted: '#525a61'
        },
        surface: {
          DEFAULT: '#FAFAF8', // Soft white
          alt: '#F3EFEA',     // Light warm grey
          warm: '#F3EFEA',
          white: '#FFFFFF'
        },
        sand: {
          light: '#FFFFFF',
          DEFAULT: '#FAFAF8',
          dark: '#F3EFEA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(27, 43, 58, 0.08)',
        'float': '0 20px 40px -10px rgba(27, 43, 58, 0.15)',
        'glow': '0 0 25px rgba(181, 68, 26, 0.35)',
        'card-3d': '0 20px 45px -10px rgba(27, 43, 58, 0.12)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
