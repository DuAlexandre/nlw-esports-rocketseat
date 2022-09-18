/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 70.94%, #E1D55D 3.57%)',
        'game-gradient': 'linear-gradient(188deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.9) 67.88%)'
      }
    },
  },
  plugins: [],
}
