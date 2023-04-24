/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yat-blue": "#3A3367",
        "yat-purple": "#181629",
        "yat-darkblue": "#232131",
        "yat-black": "#0D0B0E",
        link: "#1D9BF0",
        "yat-discord": "#523DF1",
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
