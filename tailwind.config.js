/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#030712',
          950: '#020617',
        },
        accent: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
        neutral: '#64748b',
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
      }
    },
  },
  plugins: [],
}