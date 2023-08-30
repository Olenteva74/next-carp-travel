/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/home-mobile.jpg")',
        'hero-tablet': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/home-tablet.jpg")', 
        'hero-desktop': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/home-desktop.jpg")',
        'gallery': 'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/gallery-mobile.jpg")',
        'gallery-tablet': 'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/gallery-tablet.jpg")',
        'gallery-desktop': 'linear-gradient(to bottom, rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)), linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/gallery-desktop.jpg")',
        'contact': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/contact-mobile.jpg")',
        'contact-tablet': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/contact-tablet.jpg")',
        'contact-desktop': 'linear-gradient(to bottom, #001826, rgba(0, 37, 49, 0.00)), url("/contact-desktop.jpg")',
        'about': 'linear-gradient(to bottom, #001826 16.5%,  #00253100  33%, rgb(10 10 10) 66%, #002426 82% #00253100'
      },
    },
  },
  plugins: [],
}
