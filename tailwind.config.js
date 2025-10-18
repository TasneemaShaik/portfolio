/*********************************************************
 * Tailwind CSS Configuration
 *********************************************************/
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#121d4a',
          2: '#121d4a'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.45)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
