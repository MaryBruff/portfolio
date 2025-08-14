import React from 'react';
import Link from 'next/link';

export default function Button({ href, children }: { href?: string; children: React.ReactNode }) {
  const baseClass = 'bg-win95-gray text-black px-4 py-1 border-[3px] border-win95-dark-gray shadow-win95-outset active:shadow-win95-inset';
  return href ? (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  ) : (
    <button className={baseClass}>{children}</button>
  );
}