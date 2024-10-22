import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [],
        serif: [],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundColor: {
        'space-color': '#000000',
      },
      backgroundImage: {
        'space-background': "url('/images/background_space.webp')",
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [],
};
export default config;
