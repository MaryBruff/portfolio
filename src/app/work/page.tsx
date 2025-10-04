"use client";

import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Window from "@/components/Window";

import CreativeContent from "@/components/work/CreativeContent";
import MarketingContent from "@/components/work/MarketingContent";
import MultimediaContent from "@/components/work/MultimediaContent";
import SoftwareDevContent from "@/components/work/SoftwareDevContent";
import ResumeContent from "@/components/work/ResumeContent";
import UIUXContent from "@/components/work/UIUXContent";

type TabDef = { icon: string; label: string; content: React.ReactNode };

const tabs: TabDef[] = [
  { icon: "💻", label: "Software", content: <SoftwareDevContent /> },
  { icon: "🎨", label: "Design", content: <UIUXContent /> },
  { icon: "🎥", label: "Multimedia", content: <MultimediaContent /> },
  { icon: "✍️", label: "Creative", content: <CreativeContent /> },
  { icon: "📈", label: "Marketing", content: <MarketingContent /> },
  { icon: "📄", label: "Resume", content: <ResumeContent /> },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export default function WorkContent() {
  const [index, setIndex] = useState(0);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const ids = useMemo(
    () =>
      tabs.map((t) => {
        const base = slugify(t.label);
        return { tabId: `tab-${base}`, panelId: `panel-${base}` };
      }),
    []
  );

  const onKeyDown: React.KeyboardEventHandler<HTMLMenuElement> = (e) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const last = tabs.length - 1;
    let next = index;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    setIndex(next);
    btnRefs.current[next]?.focus();
  };

  return (
    <main className="relative flex items-center justify-center ">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4">
        <div
          className="min-h-0 max-h-[730px] h-[calc(100svh-100px-16px)] sm:h-[calc(100dvh-80px-16px)]"
          style={{ marginTop: 8, marginBottom: 8 }}
        >
          <Window
            title="Work"
            className="h-full flex flex-col min-h-0"
            bodyClassName="flex flex-col min-h-0"
          >
            <div className="shrink-0">
              <p className="mb-4 portfolio-font text-muted-foreground">
                Explore selected work by category.
              </p>

              <section className="tabs w-full shrink-0 ">
                <menu
                  role="tablist"
                  aria-label="Work categories"
                  onKeyDown={onKeyDown}
                  className="flex flex-wrap-reverse flex-row sm:flex-wrap sm:flex-row gap-0"
                >
                  {tabs.map((t, i) => (
                    <button
                      key={t.label}
                      ref={(el) => {
                        btnRefs.current[i] = el;
                      }}
                      role="tab"
                      id={ids[i].tabId}
                      aria-controls={ids[i].panelId}
                      aria-selected={index === i}
                      onClick={() => setIndex(i)}
                      className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 ${
                        index === i ? "font-semibold" : ""
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </menu>
              </section>
            </div>

            <div
              className="flex-1 min-h-0 overflow-y-auto pr-2"
              style={{ scrollbarGutter: "stable" }}
            >
              <AnimatePresence mode="wait">
                {tabs.map((t, i) =>
                  i === index ? (
                    <motion.article
                      key={t.label}
                      role="tabpanel"
                      id={ids[i].panelId}
                      aria-labelledby={ids[i].tabId}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="w-full !mx-0"
                    >
                      {t.content}
                    </motion.article>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <div className="flex mt-3 gap-3 justify-end">
              <button>Ok</button>
              <button>Cancel</button>
              <button>Apply</button>
            </div>
          </Window>
        </div>
      </div>
    </main>
  );
}
