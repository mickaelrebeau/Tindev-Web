/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {},
      spacing: {},
      zIndex: {
        '-1': '-1',
      },
      inset: {
        '2/5': '40%',
      },
      boxShadow: {
        '3xl': '-11px 11px 5px rgba(0, 0, 0, 0.3);',
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      gridTemplateColumns: {
        messages: 'minmax(300px, 500px) minmax(500px, 1fr) 300px',
      },
      gridTemplateRows: {
        messages: '80px 150px 1fr',
      },
    },
  },
  plugins: [],
}
