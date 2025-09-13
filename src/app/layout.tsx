import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: "Mary Bruff Portfolio",
  description: 'Mary Bruff MySpace Inspired Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-transparent">
        <div className="min-h-screen relative z-10">
          {children}
          <Navigation />
        </div>
      </body>
    </html>
  );
}