import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F26B1D',
          blue: '#0079C4',
          green: '#2F9D4A',
          charcoal: '#1F2937',
          sand: '#F7F4EF'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
