/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'spin-fast': 'spin 100s linear infinite',
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif','Times New Roman'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    }

  },
};
export const variants = {};
export const plugins = [];
