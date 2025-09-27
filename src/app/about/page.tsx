"use client";
import {
  MySpaceNav,
  AboutMe,
  Contact,
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
    <main className="relative flex items-center justify-center">
      {/* Outer container, scales up to 1080px */}
      <div className="mx-auto max-w-[1280px] w-full px-4 md:px-6 py-4 bg-no-repeat bg-center bg-cover">
        <div
          className="min-h-0 h-[calc(100svh-100px-16px)] sm:h-[calc(100dvh-80px-16px)]"
          style={{ marginTop: 8, marginBottom: 8 }}
        >
          <Window
            title="About Me"
            className="h-full flex flex-col min-h-0"
            bodyClassName="flex-1 min-h-0 overflow-y-auto p-0 bg-[url('/backgrounds/pink-bg.jpeg')] bg-cover border-l-[3px] border-[#0000ff] border-r-[3px] border-r-[#184198]"
          >
            {/*bg-[url('/backgrounds/pink-bg.jpeg')] bg-cover*/}
            <div className="mx-auto max-w-4xl bg-white/90">
              {/* Nav spans full width */}
              <MySpaceNav />

              {/* Content grid */}
              <div className="p-2 grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <AboutMe />
                  <Contact />
                  <MyJams />
                  <Interests />
                  <Education />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <Welcome />
                  <Blog />
                  <NewAbout />
                  <MySpaceTop3 />
                  <Guestbook />
                </div>
              </div>
            </div>
          </Window>
        </div>
      </div>
    </main>
  );
}
