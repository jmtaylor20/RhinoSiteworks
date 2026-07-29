import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './config/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: 'var(--brand-forest)',
          green: 'var(--brand-green)',
          gold: 'var(--brand-gold)',
          cream: 'var(--brand-cream)',
          ink: 'var(--brand-ink)',
        },
      },
      boxShadow: {
        lift: '0 20px 60px rgba(8, 35, 26, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
