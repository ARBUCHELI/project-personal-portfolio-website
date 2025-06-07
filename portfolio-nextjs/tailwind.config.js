/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { // Ensure colors are extended, not overridden entirely unless intended
      colors: {
        'brand-primary': '#034f84',        // Dark Blue
        'brand-secondary': '#6b5b95',     // Muted Purple
        'brand-accent-red': '#c94c4c',      // Reddish
        'brand-accent-terracotta': '#bc5a45',// Terracotta
        'brand-accent-amber': '#feb236',    // Orange/Amber
        'brand-accent-lightblue': '#87bdd8',// Light Blue
        'brand-lightest-bg': '#deeaee',   // Very Light Bluish Gray (Body BG)
        'brand-light-bg': '#eaece5',      // Off-White/Light Grayish Beige (Content Container BG)
        'brand-medium-light-bg': '#f0f0f0',// Light Gray (Section BG like projects on home)
        'brand-text-primary': '#323232',    // Dark Gray (Default text)
        'brand-text-secondary': '#484848',  // Dark Gray (Footer text)
        'brand-link-hover': '#6b5b95',    // Muted Purple (for .colored-link:hover) - same as secondary for now
        'brand-nav-text': '#ffffff',        // White (explicitly defined)
        'brand-nav-hover-bg': '#dddddd',  // Light Gray
        'brand-logo-border': '#b8a9c9',   // Lighter Muted Purple
        // Adding a few more direct mappings from the CSS for clarity if needed elsewhere
        'brand-nav-bg': '#034f84',          // Same as primary
        'brand-active-nav-bg': '#6b5b95', // Same as secondary
      },
      backgroundImage: { // Preserving existing backgroundImage extensions
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
