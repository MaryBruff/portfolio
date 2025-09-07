"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Link from "next/link";
import CreativeContent from "@/components/work/CreativeContent";
import MarketingContent from "@/components/work/MarketingContent";
import MultimediaContent from "@/components/work/MultimediaContent";
import SoftwareDevContent from "@/components/work/SoftwareDevContent";
import UIUXContent from "@/components/work/UIUXContent";

const tabs = [
  { label: "Software", content: <SoftwareDevContent /> },
  { label: "UI/UX", content: <UIUXContent /> },
  { label: "Multimedia", content: <MultimediaContent /> },
  { label: "Creative", content: <CreativeContent /> },
  { label: "Marketing", content: <MarketingContent /> },
  { label: "Resume", content: null, link: "/resume" },
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
          <nav className="mb-6">
            <ul className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  className={`relative px-4 py-2 border border-pink-500 rounded-md cursor-pointer portfolio-font transition-colors ${
                    selectedTab.label === item.label
                      ? "bg-pink-300 text-pink-950"
                      : "text-white hover:bg-pink-300 hover:text-pink-950"
                  }`}
                  onClick={() => {
                    if (item.link) {
                      window.location.href = item.link; // Navigate to the link for Resume tab
                    } else {
                      setSelectedTab(item); // Switch to tab content for other tabs
                    }
                  }}
                >
                  {item.label}
                  {selectedTab.label === item.label ? (
                    <motion.div
                      className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-pink-500"
                      layoutId="underline"
                    />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>
          <AnimatePresence mode="wait">
            {selectedTab.content && (
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab.content}
              </motion.div>
            )}
          </AnimatePresence>
        </Window>
      </div>
    </main>
  );
}