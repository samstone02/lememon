/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "e-paper": "#e8e6e3",
      "e-paper-darker": "#70695c",
      "e-ink": "#2a2722",
      "lagoon": "#267371",
      "salty-lagoon": "#59a6a4"
    }
  },
  plugins: [],
}

