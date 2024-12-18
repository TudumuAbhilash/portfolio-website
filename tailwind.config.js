module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include the components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Custom primary blue
        secondary: '#64748B',  // Custom secondary color
        accent: '#F59E0B',     // Accent color (yellow)
      },
    },
  },
  variants: {},
  plugins: [],
};
