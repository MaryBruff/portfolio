"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 right-0 z-[1000]"
    >
      <div
        className="flex items-center gap-1 h-[39px]"
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
          <Link
            rel="preload"
            href="/"
            className="nav-start-button"
            aria-label="Home"
          ></Link>
        <div className="flex items-center gap-0">
          {pathname !== "/" && (
            <Link
              href="/about"
              className={`nav-app-link ${
                pathname === "/about"
                  ? "nav-app-link-active"
                  : "nav-app-link-minimized"
              }`}
            >
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ie-icon.png"
                  width={16}
                  height={16}
                  alt="About"
                  className="nav-icon"
                />
                <span>About</span>
              </div>
            </Link>
          )}
          {pathname !== "/" && (
            <Link
              href="/work"
              className={`nav-app-link ${
                pathname === "/work"
                  ? "nav-app-link-active"
                  : "nav-app-link-minimized"
              }`}
            >
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/work-icon.png"
                  width={18}
                  height={18}
                  alt="Work"
                  className="nav-icon"
                />
                <span>Work</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
