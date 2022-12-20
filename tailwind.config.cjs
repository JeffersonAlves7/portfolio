/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: '#9039FF',
        black: '#000000',
        blue: '#0077B7',
        white: 'fff'
      },
      fontFamily: {
        loras: 'Loras',
        ubuntu: 'Ubuntu Mono',
      }
    },
  },
  plugins: []
}
