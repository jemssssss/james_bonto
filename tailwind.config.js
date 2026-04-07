/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#131313',
        surfaceLow: '#1c1b1b',
        surfaceHigh: '#2a2a2a',
        surfaceHighest: '#353534',
        onSurface: '#e5e2e1',
        onSurfaceVariant: '#bacac6',
        outlineVariant: '#3c4a47',
        primary: '#66fdec',
        primaryContainer: '#40e0d0',
        onPrimary: '#003732',
        secondaryContainer: '#194f49',
        onSecondaryContainer: '#8bbfb7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        obsidian: '0 30px 60px -30px rgba(0, 0, 0, 0.75)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        heroGlow:
          'radial-gradient(circle at top left, rgba(102, 253, 236, 0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(64, 224, 208, 0.12), transparent 35%)',
      },
    },
  },
  plugins: [],
}
