module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.mdx',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        'docusaurus-dark': '#1B1B1D',
      },
      animation: {
        circle: 'circle 20s infinite',
        'circle-delay-1': '20s circle 2s infinite',
        blob: 'blob 7s infinite',
        'blob-delay-1': '10s blob 1s infinite',
      },
      keyframes: {
        circle: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(10px, -10px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-5px, 5px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
