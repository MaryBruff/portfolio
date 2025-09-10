"use client";

import Window from "@/components/Window";

export default function Welcome() {
  return (
    <Window title="Welcome to My Portfolio!" className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span
          className="block w-[435px] h-[75px] bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('http://dl2.glitter-graphics.net/pub/1131/1131312rnznvr0irr.jpg')",
            visibility: "visible",
            backgroundColor: "transparent",
            fontSize: "0px",
            letterSpacing: "-0.5px",
          }}
        />
      </div>
    </Window>
  );
}