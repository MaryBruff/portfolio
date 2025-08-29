import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <Window title="About Me">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl font-bold animate-blink text-foreground portfolio-font mb-4">
            Mary Bruff
          </h1>
          <Image
            src="/Me_Toon.png"
            alt="Profile Picture"
            width={256}
            height={256}
            className="w-full max-w-64 h-auto mx-auto rounded-lg shadow-md border border-black"
          />
        </div>
        <div className="space-y-4">
          <Image
            src="https://dl.glitter-graphics.com/pub/745/745455rvacxjsot2.gif"
            alt="Online Now"
            width={90}
            height={90}
            unoptimized
            className="mx-auto"
          />
          <div className="text-sm space-y-2 portfolio-font">
            <p>&quot;lala&quot;</p>
            <p>United States</p>
            <p>
              Last active: <br />
              <time className="opacity-80">4 months ago</time>
            </p>
          </div>
          <p className="text-sm portfolio-font">
            <b>Mood:</b> Groovy :-)
          </p>
        </div>
      </div>
    </Window>
  );
}
