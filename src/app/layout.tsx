import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '@/components/layout/navigation';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Euro Motors - European Auto Service & Tuning',
  description:
    'Specialized European auto service center offering luxury modifications and performance tuning for premium vehicles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} min-h-screen bg-background font-syne text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
