/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: "Helvetica Neue",
      },
      animation: {
        "spin-slow": "spin 90s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
      backgroundImage: {
        "hero-woman-1": "url('/images/hero-woman-1.png')",
        "hero-man": "url('/images/hero-man.png')",
        "hero-woman-2": "url('/images/hero-woman-2.png')",
        "old-man": "url('/images/old-man.jpeg')",
        tree: "url('/images/logo-tree.png')",
        chill: "url('/images/man-chill.jpeg')",
        candel: "url('/images/candel.jpeg')",
        "mom-daughter": "url('/images/mom-daughter.jpeg')",
        "green-plant": "url('/images/green-plant.jpeg')",
        "green-roud": "url('/images/green-roud.jpeg')",
        "friends-back": "url('/images/friends-back.jpeg')",

        group: "url('/images/group.jpeg')",
        companies: "url('/images/companies.png')",
        Logo: "url('/images/logo.png')",
      },
      backgroundColor: {
        darkBlue: "#071237",
        lighterBlue: "#0f256e",
      },
      colors: {
        "text-primary": "#212529",
        "brand-primary": "#A64D79",
        "brand-secondary": "#9AC0D1",
        "brand-white": "#fcfcfc",
        "light-yellow": "#F9F5E6",
        "light-blue": "#ACD7EB",
      },
    },
  },
  plugins: [],
};
