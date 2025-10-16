"use client";

import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { cn } from "@/lib/utils";

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
      className={cn("flex flex-col min-h-0", className)}
    >
      <div className="window xp-tweaks flex flex-col min-h-0 h-full">
        <div
          className="title-bar shrink-0 cursor-grab active:cursor-grabbing select-none"
          onPointerDown={startDrag}
        >
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className={cn("p-2 flex-1 min-h-0", bodyClassName)}>{children}</div>
      </div>
    </motion.div>
  );
}
