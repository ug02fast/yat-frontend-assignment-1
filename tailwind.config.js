/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yat-blue": "#3A3367",
        "yat-purple": "#181629",
        "yat-darkblue": "#232131",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
};
