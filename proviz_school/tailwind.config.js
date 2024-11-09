/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'golden-gradient': 'linear-gradient(to right, #FCF8E5, #FDEBB0)', // Define your golden gradient here
        // 'warm-sunset-gradient': 'linear-gradient(to right, #FDEBB0, #FCF8E5)',
        
      },
    },
  },
  plugins: [],
}
