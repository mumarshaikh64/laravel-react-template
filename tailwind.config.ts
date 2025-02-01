/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/react/**/*.ts",
    "./resources/views/**/*.php",
    "./storage/framework/views/**/*.php",
    './resources/**/*.blade.php', // Laravel Blade files
    './resources/**/*.js',        // React files in Laravel
    './resources/**/*.jsx',       // React files in Laravel
    './resources/**/*.ts',
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#1D4ED8", // Custom blue
      //   secondary: "#9333EA", // Custom purple
      //   accent: "#F59E0B", // Custom yellow
      // },
    },
  },
  plugins: [],
}

