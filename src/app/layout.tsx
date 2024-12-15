import type { Metadata } from 'next';
import React from 'react';
import localFont from 'next/font/local';
import './globals.css';
import { Navigation } from '@/components/layout/navigation';

const lufga = localFont({
  src: [
    {
      path: '../../public/fonts/LufgaRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-lufga',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Euro Motors',
    default: 'Euro Motors',
  },
  description: 'European Auto Service & Performance Tuning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className={lufga.variable}>
      <body className="min-h-screen bg-background font-lufga antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
