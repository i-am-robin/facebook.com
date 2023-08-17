/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prymary: "#1877F2",
        "prymary-lite": "#F5F6F7",
        "primary-outline": "#E2980B",
        "prmary-black": "#1F1E24",
        "blue-radient": "#232031",
        "black-cool": "#35353a",
        "grey-lite": "#A5A5A7",
        "grey-mid": "#28272d",
      },
    },
  },
  plugins: [],
};
