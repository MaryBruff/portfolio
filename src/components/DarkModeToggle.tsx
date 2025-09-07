"use client";

import { motion, Transition } from "framer-motion";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Sync with current theme on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className="w-16 h-8 bg-primary border border-ring  flex items-center rounded-full p-1 cursor-pointer"
        onClick={toggleDarkMode}
      >
        <motion.div
          className="w-6 h-6 bg-chart-4 rounded-full shadow-md flex items-center justify-center"
          animate={{ x: isDark ? 32 : 0 }} // Translate 32px (w-16 - w-6 - 2*p-1)
          transition={isDark ? spring : bounce}
        >
          <SunIcon
            className={`w-4 h-4 text-foreground transition-opacity duration-300 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          />
          <MoonIcon
            className={`w-4 h-4 text-primary transition-opacity duration-300 absolute ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Animation Constants
 */
const bounce: Transition = {
  duration: 0.6,
  ease: bounceEase,
};

const spring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 25,
};

/**
 * Bounce Easing Function (from easings.net)
 */
function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * ((x -= 1.5 / d1) * x) + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * ((x -= 2.25 / d1) * x) + 0.9375;
  } else {
    return n1 * ((x -= 2.625 / d1) * x) + 0.984375;
  }
}

export default DarkModeToggle;