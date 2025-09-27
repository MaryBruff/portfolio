"use client";

import Link from "next/link";
import Image from "next/image";
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
              <div className="title-bar-text">My Portfolio</div>
              <div className="title-bar-controls">
                <button aria-label="Help" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="min-w-[300px] flex items-center flex-col p-5 text-center">
              
              <div className="flex flex-row items-center gap-2 mb-4">
                <Image
                  src="/2008/welcome-rainbow.webp"
                  alt="Mary Bruff Icon"
                  width={150}
                  height={64}
                />
              </div>
              <div className="flex flex-row items-end gap-2">
                <Image
                  src="/2008/marymarymary.gif"
                  alt="Mary Bruff Icon"
                  width={60}
                  height={72}
                />
                <h4 className="text-sm">says</h4>
              </div>
              <p className="mb-4">Click a page below to get started! ✨</p>
              <div className="flex gap-3 flex-row-reverse">
                <Link href="/work">
                  <button>My Work</button>
                </Link>
                <Link href="/about">
                  <button>About Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}