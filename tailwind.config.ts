import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ghibli-inspired palette
        cream: {
          50: '#fefdf8',
          100: '#fefae0',
          200: '#fff8f0',
        },
        sage: {
          400: '#6b9b63',
          500: '#588157',
          600: '#4a6d49',
        },
        terracotta: {
          400: '#d4813b',
          500: '#bc6c25',
          600: '#9a5820',
        },
        chocolate: {
          800: '#3d2c2e',
          900: '#2a1f20',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(61, 44, 46, 0.08)',
        'soft-lg': '0 8px 30px rgba(61, 44, 46, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
