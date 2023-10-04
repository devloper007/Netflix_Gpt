/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html,jsx}"
  ],
  theme: {
    extend: {
      hideScrollbar: {
        '::-webkit-scrollbar': {
          display: 'none',
        },

        '@supports (-moz-appearance:none)': {
          'scrollbar-width': 'none',
        }
    },
  },
  plugins: [],
}
}
