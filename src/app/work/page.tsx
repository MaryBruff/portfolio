import { Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Link from "next/link";

export default function WorkContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Work">
          <p className="mb-4 portfolio-font">
            Explore selected work by category.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/work/software">Software Development</Link>
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/work/ui-ux">UI/UX & Content Strategy</Link>
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/work/multimedia">Multimedia & Motion</Link>
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/work/creative">Creative & Performance</Link>
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/work/marketing">Marketing & Strategy</Link>
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </Window>
      </div>
    </main>
  );
}