/**
 * Tailwind CSS configuration for the Learn Armenian project.
 *
 * This configuration enables dark mode via a CSS class, adds a custom
 * primary colour palette used throughout the site, and instructs Tailwind to
 * scan the appropriate files for class names.
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5A47AB',
          light: '#7E65D5',
          dark: '#443280',
        },
      },
    },
  },
  plugins: [],
};