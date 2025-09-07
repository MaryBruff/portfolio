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
  { label: "Software Development", content: <SoftwareDevContent /> },
  { label: "UI/UX & Content Strategy", content: <UIUXContent /> },
  { label: "Multimedia & Motion", content: <MultimediaContent /> },
  { label: "Creative & Performance", content: <CreativeContent /> },
  { label: "Marketing & Strategy", content: <MarketingContent /> },
];

export default function WorkContent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Work">
          <p className="mb-4 portfolio-font">
            Explore selected work by category.
          </p>
          <nav className="mb-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  className={`relative px-4 py-2 border border-pink-500 rounded-md cursor-pointer portfolio-font transition-colors ${
                    selectedTab.label === item.label
                      ? "bg-pink-300 text-pink-950"
                      : "text-white hover:bg-pink-300 hover:text-pink-950"
                  }`}
                  onClick={() => setSelectedTab(item)}
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
          <div className="flex justify-start mb-6">
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
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
