/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FFFFFF',
        'brand-secondary': '#D4D4D8',
        'brand-accent': '#FFFFFF',
        'dark-bg': '#09090B',
        'dark-section': '#121214',
        'dark-card': '#18181B',
        'dark-border': '#27272A',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
