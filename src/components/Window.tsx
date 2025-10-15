"use client";

import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { cn } from "@/lib/utils";

type WindowSize = "sm" | "md" | "lg";

export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
  size = "md",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  size?: WindowSize; // new
}) {
  const [isMobile, setIsMobile] = useState(false);
  const dragControls = useDragControls();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDrag = (e: React.PointerEvent) => {
    if (isMobile) return;
    if ((e.target as HTMLElement).closest(".title-bar-controls")) return;
    e.preventDefault();
    dragControls.start(e);
  };

  // width constraints by size (desktop); mobile is always full-bleed
  const sizeClasses =
    size === "lg"
      ? "sm:w-[900px] md:w-[1024px]"
      : size === "md"
      ? "sm:w-[720px] md:w-[860px]"
      : "sm:w-[560px] md:w-[640px]";

  return (
    <motion.div
      drag={!isMobile}
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={isMobile ? false : { top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={isMobile ? 0 : 0.5}
      dragTransition={isMobile ? {} : { bounceStiffness: 400, bounceDamping: 18 }}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileDrag={{ cursor: isMobile ? "default" : "grabbing" }}
      className={cn(
        // Mobile: full width, no horizontal overflow
        "flex flex-col min-h-0 w-full max-w-[100vw] overflow-x-hidden",
        // Desktop: use size presets
        sizeClasses,
        // Keep the window from exceeding viewport width at any breakpoint
        "max-w-screen",
        className
      )}
    >
      <div className="window xp-tweaks flex flex-col min-h-0 h-full">
        <div
          className={cn(
            "title-bar shrink-0 cursor-grab active:cursor-grabbing select-none",
            // Make sure long titles wrap on phones instead of stretching window
            "[&_.title-bar-text]:whitespace-normal [&_.title-bar-text]:break-words"
          )}
          onPointerDown={startDrag}
        >
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        {/* Body scrolls independently on small screens */}
        <div
          className={cn(
            "p-2 flex-1 min-h-0",
            "overflow-y-auto",
            // Safe max-height so the window never grows past the phone viewport
            "max-h-[calc(100dvh-120px)] sm:max-h-none",
            bodyClassName
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
