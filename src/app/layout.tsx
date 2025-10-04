import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import DesktopIcons from '@/components/DesktopIcons';

export const metadata: Metadata = {
  title: "Mary Bruff's Portfolio",
  description: "Mary Bruff's Windows XP Inspired Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-transparent">
        <div className="min-h-screen relative z-10">
          <DesktopIcons />
          {children}
          <Navigation />
        </div>
      </body>
    </html>
  );
}