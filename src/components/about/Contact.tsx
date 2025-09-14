"use client";

import Image from "next/image";

type ContactLink = {
  icon: string;
};

const contactLinks: ContactLink[][] = [
  [
    { icon: "/icons/add_1.gif" },
    { icon: "/icons/forward_1.gif" },
  ],
  [
    { icon: "/icons/mail_1.gif" },
    { icon: "/icons/favorite_1.gif" },
  ],
  [
    { icon: "/icons/imskype_1.gif" },
    { icon: "/icons/block_1.gif" },
  ],
  [
    { icon: "/icons/group_1.gif" },
    { icon: "/icons/rank_1.gif" },
  ],
];

export default function ContactActions() {
  return (
    <>
      <div className="contact border-2 border-blue-500 bg-white text-sm">
        {/* Heading */}
        <div className="heading bg-blue-500 text-white text-sm font-bold px-2 py-1">
          <h5>Contacting Mary Bruff</h5>
        </div>

        {/* Grid of icons */}
        <div className="inner p-2 space-y-1">
          {contactLinks.map((row, rowIndex) => (
            <div key={rowIndex} className="f-row flex gap-2">
              {row.map((link, colIndex) => (
                <div key={colIndex} className="f-col flex-1 gap-0 flex justify-start">
                  <a href="#">
                    <Image
                      src={link.icon}
                      alt="contact option"
                      width={140} 
                      height={40}
                      unoptimized
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 border-blue-500 bg-white text-sm p-2">
        <p className="font-bold">Mary&apos;s MySpace URL:</p>
        <a href="#" className="underline">
          https://myspace.com/marybruff
        </a>
      </div>
    </>
  );
}
