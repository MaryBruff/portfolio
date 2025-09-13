"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav aria-label="Primary" className="fixed bottom-0 left-0 right-0 z-[1000]">
      <div 
        className="justify-start rounded-none w-full items-center gap-2 px-[3px] py-[3px]"
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
            )`
          }}
      >
        <Button className="flex-none px-3 py-[2px]">
          <Link href="/">Home</Link>
        </Button>
        <Button className="flex-none px-3 py-[2px]">
          <Link href="/about">About</Link>
        </Button>
        <Button className="flex-none px-3 py-[2px]">
          <Link href="/work">Work</Link>
        </Button>
      </div>
    </nav>
  );
}