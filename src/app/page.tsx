"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const constraintsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Preload the image to avoid layout shift or loading issues
    const img = new window.Image();
    img.src = "http://dl5.glitter-graphics.net/pub/23/23695zmk95wu7m4.gif";
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => console.warn("Marquee image failed to load");
  }, []);

  const marqueeData = [
    { top: 71, scrollamount: 3, scrolldelay: 40 },
    { top: 143, scrollamount: 5, scrolldelay: 13 },
    { top: 198, scrollamount: 4, scrolldelay: 9 },
    { top: 271, scrollamount: 5, scrolldelay: 42 },
    { top: 435, scrollamount: 5, scrolldelay: 35 },
  ];

  return (
    <motion.div
      ref={constraintsRef}
      className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Updated marquee elements */}
      {imagesLoaded &&
        marqueeData.map((data, index) => (
          <marquee
            key={index}
            behavior="alternate"
            direction="right"
            scrollamount={data.scrollamount}
            scrolldelay={data.scrolldelay}
            width="95%"
            style={{
              position: 'absolute',
              left: '5%',
              top: `${data.top}px`,
              width: '95%',
              height: '40px',
            }}
          >
            <img 
              src="http://dl5.glitter-graphics.net/pub/23/23695zmk95wu7m4.gif" 
              alt="Glitter graphic"
              style={{ height: '40px', verticalAlign: 'middle' }}
              border="0"
            />
          </marquee>
        ))}

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
            <h1 className="text-2xl font-bold mb-4">Hey there! I&apos;m Mary Bruff!</h1>
            <p className="mb-4">Take a look at my About page to learn more about me, or jump right into my work or resume!</p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link href="/about">About Me</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/work">My Work</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/work">Resume</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}