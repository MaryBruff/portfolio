"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={constraintsRef}
      className="flex min-h-screen flex-col items-center justify-center p-4"
    >
      <motion.div
        drag={!isMobile}
        dragConstraints={constraintsRef}
        dragElastic={isMobile ? 0 : 0.2}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ cursor: isMobile ? "default" : "grab" }}
        whileDrag={{ cursor: isMobile ? "default" : "grabbing" }}
      >
        <Card className="border p-0 rounded-xl shadow-[5px_5px_0_0_var(--border)]">
          <CardHeader className="bg-primary rounded-t-xl p-3">
            <CardTitle className="text-primary-foreground flex justify-between items-center font-mono text-lg">
              <span>Welcome to My Portfolio</span>
              <div className="flex space-x-2">
                <div className="w-4 h-4 border border-foreground rounded-full bg-red-600" />
                <div className="w-4 h-4 border border-foreground rounded-full bg-amber-600" />
                <div className="w-4 h-4 border border-foreground rounded-full bg-green-600" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-5 lg:p-6">
            <h1 className="text-2xl font-bold mb-4">Hey there, I&apos;m Mary!</h1>
            <p className="mb-4">Explore my work in a retro Windows style.</p>
            <div className="flex space-x-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/about">About Me</Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link href="/work">My Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}