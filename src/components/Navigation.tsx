"use client";
import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 right-0 z-[1000]"
    >
      <div
        className="flex items-center gap-2 h-[40px]"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(9, 151, 255, 1) 0%,
            rgba(0, 83, 238, 1) 8%,
            rgba(0, 80, 238, 1) 40%,
            rgba(0, 102, 255, 1) 88%,
            rgba(0, 102, 255, 1) 93%,
            rgba(0, 91, 255, 1) 95%,
            rgba(0, 61, 215, 1) 96%,
            rgba(0, 61, 215, 1) 100%
          )`,
        }}
      >
        <Link href="/" className="nav-start-button" aria-label="Home"></Link>
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/work">
          <button>Work</button>
        </Link>
      </div>
    </nav>
  );
}
