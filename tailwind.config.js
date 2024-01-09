/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'box': "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)",
      },
      textColor: {
        'custom-red': 'rgba(171, 2, 2, 0.67)',
      },
      colors: {
        'mygreen': 'rgba(2, 171, 108, 0.67)',
      },

    },
  },
  plugins: [],
};
