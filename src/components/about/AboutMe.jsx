"use client";

import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutMe() {
  return (
    <Window title="Mary Bruff">
      <div className="text-sm grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* <h1 className="text-2xl font-bold animate-blink text-foreground mb-4">
            Mary Bruff
          </h1> */}
          <Image
            src="/Me_Toon.png"
            alt="Profile Picture"
            width={180}
            height={180}
            className="w-full max-h-36 h-full max-w-36 object-top object-cover rounded-lg shadow-md border border-black"
          />
          <p>
            <b>Mood:</b> Groovy :-)
          </p>
        </div>
        <div className="space-y-1">
            <p>&quot;I need coffee! ☕️&quot;</p>
            <p>Female</p>
            <p>United States</p>
            <p>She/Her</p>
        <div className="space-y-4 my-4">
          <Image
            src="https://dl.glitter-graphics.com/pub/745/745455rvacxjsot2.gif"
            alt="Online Now"
            width={70}
            height={70}
            unoptimized
          />
          </div>
        </div>
      </div>
    </Window>
  );
}