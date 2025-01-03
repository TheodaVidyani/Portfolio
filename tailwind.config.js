/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: { // Add textShadow extension here
        lg: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Define the shadow here
      },
    },
  },
  variants: {
    textShadow: ['responsive'], // If you want to use responsive variants
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
};
