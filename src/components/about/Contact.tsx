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
      <div className="border-2 border-pink-400 bg-white text-sm">
        {/* Heading */}
        <div className="bg-pink-400 text-white text-sm font-bold px-2 py-1">
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
      <div className="border-2 border-pink-400 bg-white text-sm p-2">
        <p className="font-bold">Mary&apos;s MySpace URL:</p>
        <a href="#" className="underline">
          https://myspace.com/marybruff
        </a>
      </div>
    </>
  );
}

/* SAVING FOR LATER USE
import Link from "next/link";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import EmailCopy from "../EmailCopy";
<ul className="space-y-2 text-sm">
        <li className="flex items-center justify-between bg-accent border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <LinkedInLogoIcon className="h-4 w-4" />
            LinkedIn
          </span>
          <Link
            href="https://www.linkedin.com/in/mary-bruff/"
            target="_blank"
            className="underline hover:text-chart-5 transition portfolio-font"
          >
            /marybruff
          </Link>
        </li>
        <li className="flex items-center justify-between bg-accent border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <GitHubLogoIcon className="h-4 w-4" />
            GitHub
          </span>
          <Link
            href="https://github.com/MaryBruff"
            target="_blank"
            className="underline hover:text-chart-5 transition portfolio-font"
          >
            @MaryBruff
          </Link>
        </li>
        <li className="flex items-center justify-between bg-accent border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <EnvelopeClosedIcon className="h-4 w-4" />
            Email
          </span>
          <EmailCopy email="marybruff5@gmail.com" />
        </li>
      </ul>
*/