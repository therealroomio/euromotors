import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { THEME_COLORS } from '../constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ThemeMode = keyof typeof THEME_COLORS;

export const getThemeColors = (mode: ThemeMode) => THEME_COLORS[mode];
export const isDarkMode = (mode: ThemeMode): boolean => mode === 'dark';
