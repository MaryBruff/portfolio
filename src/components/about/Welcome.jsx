"use client";

import Window from "@/components/Window";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <div className="flex items-center justify-center w-full h-24 border-2 border-black bg-white p-2">
        <h5 className="mb-2 font-semibold text-lg">Mary Bruff is in your extended network</h5>
      </div>
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
