"use client";

import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutMe() {
  return (
    <div className="text-sm grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="font-semibold">Mary Bruff</h4>
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
      <div className="space-y-1 my-auto">
        <p>
          <Image
            src="https://dl.glitter-graphics.com/pub/365/365653mpvh1aa95w.gif"
            alt="Glitter Graphic"
            width={15}
            height={15}
            unoptimized
            className="inline-block mr-2"
          />
          Fail fast, fail often!
          <Image
            src="https://dl.glitter-graphics.com/pub/365/365653mpvh1aa95w.gif"
            alt="Glitter Graphic"
            width={15}
            height={15}
            unoptimized
            className="inline-block ml-2"
          />
        </p>
        <p>United States</p>
        <p>She/Her</p>
        <div className="space-y-4 my-4">
          <Image
            src="http://www.myspacegens.com/images/online_now/148.gif"
            alt="Online Now"
            width={70}
            height={70}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
