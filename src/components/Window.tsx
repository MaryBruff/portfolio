"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
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
      // whileHover={{ scale: 1.02, cursor: isMobile ? "default" : "grab" }}
      whileDrag={{ scale: isMobile ? 1 : 1.05, cursor: isMobile ? "default" : "grabbing" }}
    >
      <Card className={`border-black border p-0 rounded-xl shadow-[5px_5px_0_0_rgba(0,0,0,1)] ${className}`}>
        <CardHeader className="bg-primary rounded-t-xl p-3">
          <CardTitle className="text-black flex justify-between items-center portfolio-font">
            <span>{title}</span>
            <div className="flex space-x-2">
              <div className="w-4 h-4 border-black border rounded-full bg-chart-4" />
              <div className="w-4 h-4 border-black border rounded-full bg-chart-5" />
              <div className="w-4 h-4 border-black border rounded-full bg-chart-3" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className={`p-4 md:p-5 lg:p-6 ${bodyClassName}`}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}