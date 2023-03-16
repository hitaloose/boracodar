/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      boxShadow: {
        "dashboard-card": "3px 4px 26px rgba(0, 0, 0, 0.25);"
      }
    }
  },
  plugins: []
};
