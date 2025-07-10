/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDF6E3',
        'beige': '#F5F5DC',
        'soft-white': '#FAFAFA',
        'warm-gray': '#8B7355',
        'nostalgic-brown': '#D2B48C',
        'accent-gold': '#DAA520'
      },
      fontFamily: {
        'handwritten': ['Caveat', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
        'clean': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'nostalgic': '0 10px 25px -3px rgba(139, 115, 85, 0.1), 0 4px 6px -2px rgba(139, 115, 85, 0.05)'
      }
    },
  },
  plugins: [],
} 