/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-one": "var(--neutral-one)",
        "neutral-two": "var(--neutral-two)",
        "neutral-three": "var(--neutral-three)",
        "neutral-inverse-one": "var(--neutral-inverse-one)",
        "neutral-inverse-two": "var(--neutral-inverse-two)",
        "neutral-inverse-three": "var(--neutral-inverse-three)",
        "primary-one": "var(--primary-one)",
        "primary-two": "var(--primary-two)",
        "primary-three": "var(--primary-three)",
      }
    }
  },
  plugins: [],
}

