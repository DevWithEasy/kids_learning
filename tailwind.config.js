/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        kalpurush : ["kalpurush","sans-serif"],
        uthemi : ["uthemi","sans-serif"]
      }
    },
  },
  plugins: [],
}