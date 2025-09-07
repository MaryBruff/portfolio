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
  { icon: "💻", label: "Software", content: <SoftwareDevContent /> },
  { icon: "🎨", label: "UI/UX", content: <UIUXContent /> },
  { icon: "🎥", label: "Multimedia", content: <MultimediaContent /> },
  { icon: "✍️", label: "Creative", content: <CreativeContent /> },
  { icon: "📈", label: "Marketing", content: <MarketingContent /> },
  { icon: "📄", label: "Resume", content: <ResumeContent /> },
];

export default function WorkContent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <main className="min-h-screen relative mb-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Work">
          <p className="mb-4 portfolio-font text-muted-foreground">
            Explore selected work by category.
          </p>
          <nav className="bg-card rounded-t-lg border-b border-sidebar-border">
            <ul className="flex flex-col sm:flex-row list-none p-0 m-0 font-medium text-sm w-full">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  initial={false}
                  animate={{
                    backgroundColor:
                      item === selectedTab
                        ? "var(--sidebar-accent)"
                        : "var(--sidebar)",
                    color:
                      item === selectedTab
                        ? "var(--sidebar-accent-foreground)"
                        : "var(--sidebar-foreground)",
                  }}
                  className={`relative flex items-center justify-center px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out rounded-t-md w-full sm:w-auto flex-1 outline-none focus-visible:ring-[3px] focus-visible:ring-sidebar-ring focus-visible:bg-sidebar-accent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground portfolio-font border-b sm:border-b-0 border-sidebar-border sm:border-r last:border-r-0 ${
                    item === selectedTab ? "font-semibold z-20" : "z-10"
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                  {item === selectedTab ? (
                    <motion.div
                      className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-sidebar-primary"
                      layoutId="underline"
                      id="underline"
                      transition={{ duration: 0.2 }}
                    />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>
          <div className="bg-card rounded-b-lg p-4 pt-6 border-x border-b border-sidebar-border shadow-xs scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-foreground w-full"
              >
                {selectedTab ? selectedTab.content : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </Window>
      </div>
    </main>
  );
}