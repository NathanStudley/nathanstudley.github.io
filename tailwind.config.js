/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ["./index.html", "./src/**/*.{js,jsx}"] },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        ink: { 950: "#07070c", 900: "#0d0d16", 800: "#151522", 700: "#20202f", 600: "#2e2e42" },
      },
      keyframes: {
        flow: { to: { strokeDashoffset: "-24" } },
        rise: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        pulseglow: { "0%,100%": { opacity: "0.55" }, "50%": { opacity: "1" } },
      },
      animation: {
        flow: "flow 1.2s linear infinite",
        rise: "rise 0.7s ease-out both",
        pulseglow: "pulseglow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
