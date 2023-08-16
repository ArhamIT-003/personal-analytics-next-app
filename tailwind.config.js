/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
      },
      height: {
        '110': "500px",
      },
      colors: {
        black: "#111",
        "gray-700": "#bbb",
        "button-bg": "#53c28b",
        "button-text": "#fff",
        "hero-bg": "#194c33",
        "hero-color": "#bbb",
      },

      maxWidth: {
        "screen-xl": "1366px",
      },
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: "inherit",
            },
          },
        },
      },
      backgroundColor: {
        black: "#111",
      },
    },
  },
  plugins: [],
};
