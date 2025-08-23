// components/Window.tsx
import React from "react";

export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string; // NEW
}) {
  return (
    <div className={`rounded-xl ${className}`}>
      {/* Title Bar */}
      <div className="text-white px-3 py-1.5 flex justify-between items-center">
        <span className="font-bold">{title}</span>
        <div className="flex space-x-1">
          <button className="">-</button>
          <button className="">□</button>
          <button className="">X</button>
        </div>
      </div>
      {/* Content */}
      <div className={`p-4 md:p-5 lg:p-6 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
