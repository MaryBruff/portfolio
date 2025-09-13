"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // if you have it; otherwise inline template strings

export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={isMobile ? false : { top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={isMobile ? 0 : 0.5}
      dragTransition={isMobile ? {} : { bounceStiffness: 400, bounceDamping: 18 }}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileDrag={{ cursor: isMobile ? "default" : "grabbing" }}
      className={cn(className)}
    >
      <div className="window xp-tweaks">
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className={cn("p-2", bodyClassName)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
