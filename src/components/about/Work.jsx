import Window from "@/components/Window";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Work() {
  return (
    <Window title="Work">
      <p className="mb-4 portfolio-font">Explore selected work by category.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button variant="outline">
          <Link href="/work/software">Software Development</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/ui-ux">UI/UX & Content Strategy</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/multimedia">Multimedia & Motion</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/creative">Creative & Performance</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/multimedia">Multimedia & Motion</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/creative">Creative & Performance</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work/marketing">Marketing & Strategy</Link>
        </Button>
        <Button variant="outline">
          <Link href="/resume">Resume</Link>
        </Button>
        <Button variant="outline">
          <Link href="/work">View All Work</Link>
        </Button>
      </div>
    </Window>
  );
}