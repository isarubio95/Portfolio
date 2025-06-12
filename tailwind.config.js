/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 8px 20px rgba(0, 0, 0, 0.5)',
        inset: 'inset 0 1px 8px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'short': { 'raw': '(max-height: 600px)' },
        'medium': { 'raw': '(max-height: 820px)' },
        'tall': { 'raw': '(min-height: 900px)' }
      }
    },
  },
  plugins: [],
}


