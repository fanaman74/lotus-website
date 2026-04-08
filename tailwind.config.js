/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f0e0c',
        'bg-alt': '#1a1814',
        surface: '#231f1a',
        text: '#f0ebe0',
        'text-muted': '#9a9080',
        accent: '#c8925a',
        'accent-alt': '#4a7c59',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', '"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      height: {
        nav: '72px',
      },
    },
  },
  plugins: [],
};
