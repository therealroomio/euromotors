import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const THEME_COLORS = {
  dark: {
    background: '#10141A',
    text: '#FFFFFF',
    accent: '#E4E4E4',
  },
  light: {
    background: '#FFFFFF',
    text: '#10141A',
    accent: '#E4E4E4',
  },
} as const;
