"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Window from "@/components/Window";
import CreativeContent from "@/components/work/CreativeContent";
import MarketingContent from "@/components/work/MarketingContent";
import MultimediaContent from "@/components/work/MultimediaContent";
import SoftwareDevContent from "@/components/work/SoftwareDevContent";
import UIUXContent from "@/components/work/UIUXContent";
import ResumeContent from "@/components/work/ResumeContent";

const tabs = [
  { label: "Software", content: <SoftwareDevContent /> },
  { label: "UI/UX", content: <UIUXContent /> },
  { label: "Multimedia", content: <MultimediaContent /> },
  { label: "Creative", content: <CreativeContent /> },
  { label: "Marketing", content: <MarketingContent /> },
  { label: "Resume", content: <ResumeContent /> },
];

export default function WorkContent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <main className="min-h-screen relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Work">
          <p className="mb-4 portfolio-font">
            Explore selected work by category.
          </p>
          <nav>
            <ul className="grid grid-cols-2 sm:grid-cols-6 gap-0 sm:gap-0">
              {tabs.map((item, index) => (
                <motion.li
                  key={item.label}
                  className={`relative flex items-center justify-center h-9 px-4 py-2 border-t border-x border-foreground bg-background hover:bg-pink-300 hover:text-pink-950 dark:bg-input/30 rounded-t-md cursor-pointer portfolio-font transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:bg-pink-300 ${
                    selectedTab.label === item.label
                      ? "bg-pink-300 text-pink-950 font-semibold translate-y-0 z-20"
                      : "text-foreground z-10 sm:translate-y-0 " +
                        (index === 0 || index === 1
                          ? "translate-y-4"
                          : index === 2 || index === 3
                          ? "translate-y-2"
                          : "translate-y-0")
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.label}
                  {selectedTab.label === item.label ? (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 right-0 h-[4px] z-10 bg-pink-500" 
                      layoutId="underline"
                    />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              className="bg-background shadow-xs rounded-b-md p-4 pt-0 border-x border-b border-foreground mt-0"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.content : null}
            </motion.div>
          </AnimatePresence>
        </Window>
      </div>
    </main>
  );
}