/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Flex', 'sans-serif'],
      },
      screens: {
        'mobile-screen': '320px', // min-width
        'tablets': '768px'
      },
      boxShadow: {
        'radial-sm': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)',
         'radial-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 -8px 10px -6px rgba(0, 0, 0, 0.1)',
         'radial-sm-faint': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 -1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05), 0 -1px 1px 0 rgba(0, 0, 0, 0.05)',
         'radial-sm-soft': '0 1px 3px rgba(0, 0, 0, 0.05), 0 -1px 3px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05), 0 -2px 4px rgba(0, 0, 0, 0.05)',
         'radial-sm-soft-faint': '0 1px 2px rgba(0, 0, 0, 0.03), 0 -1px 2px rgba(0, 0, 0, 0.03), 0 2px 3px rgba(0, 0, 0, 0.03), 0 -2px 3px rgba(0, 0, 0, 0.03)',
         'radial-sm-less-noticeable': '0 0.5px 1.5px rgba(0, 0, 0, 0.02), 0 -0.5px 1.5px rgba(0, 0, 0, 0.02), 0 1.5px 2.5px rgba(0, 0, 0, 0.02), 0 -1.5px 2.5px rgba(0, 0, 0, 0.02)'   
      }
    },
  },
  plugins: [],
}
