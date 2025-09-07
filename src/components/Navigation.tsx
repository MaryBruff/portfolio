"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 py-1 px-2 flex space-x-2 backdrop-blur-sm">
      <Button
        variant="secondary"
        asChild
      >
        <Link href="/">Home</Link>
      </Button>
      <Button
        variant="secondary"
        asChild
      >
        <Link href="/about">About</Link>
      </Button>
      <Button
        variant="secondary"
        asChild
      >
        <Link href="/work">Work</Link>
      </Button>
    </nav>
  );
}