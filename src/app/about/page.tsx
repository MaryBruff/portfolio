  import { AboutMe, MyJams, Interests, MySpaceTop3, Blog, Education, Guestbook } from "@/components/about";
    import Welcome from "@/components/about/Welcome";

    export default function About() {
      return (
        <main className="min-h-screen relative">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-6 mb-12">
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
                <Education />
                <Guestbook />
              </div>
            </div>
          </div>
        </main>
      );
    }