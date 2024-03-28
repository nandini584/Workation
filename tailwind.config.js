/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extending the theme to include custom fonts
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'] // Add 'Playfair Display' font family
      },
    },
  },
  plugins: [],
}
