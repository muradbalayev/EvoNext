/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables dark mode using the 'class' strategy
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        // Add your custom colors here if needed
      },
      
    },
  },
  plugins: [],
}
