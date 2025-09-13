"use client";

import Window from "@/components/Window";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span
        className="block w-full max-w-md aspect-[435/75] bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage:
            "url('https://dl.glitter-graphics.com/pub/2670/2670560e3z842dbcp.gif')",
          visibility: "visible",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
