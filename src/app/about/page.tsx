"use client";
import {
  AboutMe,
  NewAbout,
  MyJams,
  Interests,
  MySpaceTop3,
  Blog,
  Education,
  Guestbook,
} from "@/components/about";
import Welcome from "@/components/about/Welcome";
import Window from "@/components/Window";

export default function About() {
  return (
    // Match Work's top-level layout so widths/centering align
    <main className="relative flex items-center justify-center">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-4">
        {/* Match Work's height wrapper exactly */}
        <div
          className="min-h-0 max-h-[730px] h-[calc(100svh-100px-16px)] sm:h-[calc(100dvh-80px-16px)]"
          style={{ marginTop: 8, marginBottom: 8 }}
        >
          <Window
            title="About Me"
            // Match Work's Window sizing so the chrome is identical
            className="h-full flex flex-col min-h-0"
            // Give the body a stable scroll like Work's content area
            bodyClassName="flex-1 min-h-0 overflow-y-auto pr-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {/* Left Column */}
              <div className="space-y-6">
                <AboutMe />
                <MySpaceTop3 />
                <MyJams />
                <Interests />
              </div>
              {/* Right Column */}
              <div className="space-y-6">
                <Welcome />
                <Blog />
                <NewAbout />
                <Education />
                <Guestbook />
              </div>
            </div>
          </Window>
        </div>
      </div>
    </main>
  );
}
