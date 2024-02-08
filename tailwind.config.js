// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
    },
  },
  corePlugins: {
    preflight: false, // Disable preflight plugin
  },
  plugins: [],
}

