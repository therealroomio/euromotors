export const NAVIGATION_ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  BRANDS: '/brands',
  TUNING: '/tuning',
  CONTACT: '/contact',
} as const;

export const NAVIGATION_ITEMS = Object.entries(NAVIGATION_ROUTES).map(([key, href]) => ({
  name: key.charAt(0) + key.slice(1).toLowerCase(),
  href,
}));

export type NavigationItem = {
  name: string;
  href: (typeof NAVIGATION_ROUTES)[keyof typeof NAVIGATION_ROUTES];
};
