/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/synthos3/layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'synthos-primary': '#3B82F6', // Blue
        'synthos-secondary': '#10B981', // Green
        'synthos-dark': '#1E293B', // Dark blue/slate
      },
    },
  },
  plugins: [],
}
