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
        "yat-green": "#31B2B2",
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.7)",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.7)",
          },
          "50%": {
            textShadow:
              "0 0 15px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7)",
          },
        },
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
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
