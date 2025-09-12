"use client";

import Window from "@/components/Window";

export default function Welcome() {
  return (
    <Window title="Welcome to My Portfolio!" className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span
          className="block w-[435px] h-[75px] bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://dl.glitter-graphics.com/pub/2670/2670560e3z842dbcp.gif')",
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
