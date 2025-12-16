import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          home: '#F97316',
          pro: '#2563EB',
          agri: '#16A34A'
        },
        slate: {
          950: '#0b1021'
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        sketch: '4px 4px 0px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
