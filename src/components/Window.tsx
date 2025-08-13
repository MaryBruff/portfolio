import React from 'react';

export default function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-[3px] border-win95-dark-gray bg-win95-white shadow-win95-outset rounded-sm max-w-3xl mx-auto my-4">
      {/* Title Bar */}
      <div className="bg-win95-blue text-white px-2 py-1 flex justify-between items-center">
        <span className="font-bold">{title}</span>
        <div className="flex space-x-1">
          <button className="bg-win95-gray text-black px-1 border-win95-dark-gray border-[2px] shadow-win95-inset">-</button>
          <button className="bg-win95-gray text-black px-1 border-win95-dark-gray border-[2px] shadow-win95-inset">□</button>
          <button className="bg-win95-gray text-black px-1 border-win95-dark-gray border-[2px] shadow-win95-inset">X</button>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}