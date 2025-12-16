import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7A00',
          blue: '#1D70B8',
          green: '#3E9C4F',
          ink: '#0B1021'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};

export default config;
