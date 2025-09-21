"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const constraintsRef = useRef(null);
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
      className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden"
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
        <div className="xp w-full max-w-xl">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Welcome to My Portfolio</div>
              <div className="title-bar-controls">
                <button aria-label="Help" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="window-body p-2">
              <h3 className="text-2xl font-bold mb-4">Hey there! I&apos;m Mary Bruff!</h3>
              <p className="mb-4">Take a look at my About page…</p>
              <div className="flex gap-3 flex-row-reverse">
                <Link href="/work"><button>My Work</button></Link>
                <Link href="/about"><button>About Me</button></Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}