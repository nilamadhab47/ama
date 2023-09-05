/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/hero.png')",
        'about-background': "url('/images/aboutBg.png')",
        'solution-background': "url('/images/solutionBg.png')",
        'review-background': "url('/images/reviewBg.png')",
        'service-background': "url('/images/servicesBg.png')",
        'contact-background': "url('/images/contactBg.png')",
      },
      colors: {
        primary: "#EE5025",
        secondary: "#F04F23",
        hoverButton: "#B23614",
        header: "#222222",
        boxColor: "#16012c",
        boxDescription: "#64607D",
        reviewColor: "#333333",
        greyColor: "#4D5F7A",
       },
       fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
}
