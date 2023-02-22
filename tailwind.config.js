/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mm: { max: "423px" },
      // => @media (max-width: 575px) { ... }
      mxs: { max: "575px" },
      // => @media (max-width: 575px) { ... }
      xs: "576px",
      // => @media (min-width: 576px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      msm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      msd: "830px",
      mmsd: { max: "829px" },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      mlg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      mxl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        begin: {
          from: { transform: "translateX(100vw)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        begin: "begin 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
