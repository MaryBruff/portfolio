import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TheCube from '@/components/framer/the_cube';
import DarkModeToggle from '@/components/DarkModeToggle';

export const metadata: Metadata = {
  title: "Mary Bruff Portfolio",
  description: 'Mary Bruff MySpace Inspired Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen">
        <DarkModeToggle />
        <TheCube
          scale={7.0}
          speed={0.25}
        />
        {children}
        <Navigation />
      </body>
    </html>
  );
}