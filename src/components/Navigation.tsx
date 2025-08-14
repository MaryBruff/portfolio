import React from 'react';
import Button from './Button';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-win95-gray border-t-[3px] border-win95-dark-gray py-1 px-2 flex space-x-2">
      <Button>Start</Button> {/* Placeholder for future menu */}
      <Button href="/">Home</Button>
      <Button href="/about">About</Button>
      <Button href="/contact">Contact</Button>
      <Button href="/work">Work</Button>
    </nav>
  );
}