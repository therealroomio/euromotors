import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lufga: ['var(--font-lufga)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#10141A',
        'light-gray': '#E4E4E4',
        neutral: {
          '100': '#F5F5F5',
          '200': '#E6E6E6',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        blob1: 'blob1 20s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        blob2: 'blob2 25s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        blob3: 'blob3 30s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        blob4: 'blob4 22s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        blob5: 'blob5 28s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        blob6: 'blob6 35s infinite cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
        blob1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(30%, 20%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20%, 30%) scale(0.9)',
          },
        },
        blob2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(-30%, -20%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(20%, -30%) scale(0.9)',
          },
        },
        blob3: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(-20%, 20%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(30%, -20%) scale(0.9)',
          },
        },
        blob4: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(25%, -25%) scale(1.2) rotate(120deg)',
          },
          '66%': {
            transform: 'translate(-15%, 25%) scale(0.85) rotate(240deg)',
          },
        },
        blob5: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(-30%, -10%) scale(1.15) rotate(-120deg)',
          },
          '66%': {
            transform: 'translate(20%, -25%) scale(0.9) rotate(-240deg)',
          },
        },
        blob6: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(15%, 25%) scale(1.1) rotate(120deg)',
          },
          '66%': {
            transform: 'translate(-25%, -15%) scale(0.95) rotate(240deg)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backdropBlur: {
        lg: '16px',
      },
      transitionProperty: {
        all: 'all',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [tailwindcssAnimate, typography, aspectRatio],
} satisfies Config;
