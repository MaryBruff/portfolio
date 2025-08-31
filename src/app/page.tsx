import Link from "next/link";
import Window from '@/components/Window';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Window title="Welcome to My Portfolio">
        <h1 className="text-2xl font-bold mb-4">Hey there, I&apos;m Mary!</h1>
        <p className="mb-4">Explore my work in a retro Windows style.</p>
        <div className="flex space-x-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">About Me</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/work">My Work</Link>
          </Button>
        </div>
      </Window>
    </main>
  );
}