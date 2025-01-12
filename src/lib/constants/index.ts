// Create a new file to centralize constants
export * from './brands';
export * from './theme';
export * from './navigation';

// Add type safety to navigation
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Brands', href: '/brands' },
  { name: 'Tuning', href: '/tuning' },
  { name: 'Contact', href: '/contact' },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
