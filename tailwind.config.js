/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chaussea: {
          50: '#EBF2FA',
          100: '#E0ECFA',
          200: '#D0DFEF',
          300: '#BBDEFB',
          400: '#90B4D8',
          500: '#6B8DB5',
          600: '#42A5F5',
          700: '#1E88E5',
          800: '#1565C0',
          900: '#0D47A1',
        },
        dark: '#1A2B42',
        success: '#2E7D32',
        'success-light': '#C8E6C9',
        'success-mid': '#43A047',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}