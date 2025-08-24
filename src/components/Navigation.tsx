"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-pink-950/80 border-t-2 border-pink-500 py-1 px-2 flex space-x-2 backdrop-blur-sm">
      <Button variant="outline" className="border-pink-500 text-white hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
        Start
      </Button>
      <Button
        variant="outline"
        className="border-pink-500 text-white hover:bg-pink-300 hover:text-pink-950 font-comic-sans"
        asChild
      >
        <Link href="/">Home</Link>
      </Button>
      <Button
        variant="outline"
        className="border-pink-500 text-white hover:bg-pink-300 hover:text-pink-950 font-comic-sans"
        asChild
      >
        <Link href="/about">About</Link>
      </Button>
      <Button
        variant="outline"
        className="border-pink-500 text-white hover:bg-pink-300 hover:text-pink-950 font-comic-sans"
        asChild
      >
        <Link href="/work">Work</Link>
      </Button>
    </nav>
  );
}