/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Navy blue palette
        navy: '#0f172a',
        'navy-deep': '#1e3a8a',

        // Soft yellow palette
        'soft-yellow': '#fcd34d',
        'soft-yellow-light': '#fde047',
        'soft-yellow-dark': '#facc15',

        // Accent aliases (soft yellow — used across components)
        accent: '#facc15',
        'accent-light': '#fcd34d',
        'accent-dark': '#eab308',
        'accent-bright': '#fde047',

        // Surface / background palette
        surface: '#ffffff',
        'surface-muted': '#f8fafc',
        'surface-alt': '#f1f5f9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};