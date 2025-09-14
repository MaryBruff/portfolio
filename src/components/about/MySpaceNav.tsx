"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

type MySpaceNavProps = {
  logoSrc?: string; // e.g. "/logos/myspace.svg"
  logoAlt?: string;
};

const topLinks = [
  { label: "Help" },
  { label: "LogIn" },
  { label: "SignUp" },
] as const;

const mainLinks = [
  "Home",
  "Browse",
  "Search",
  "Invite",
  "Film",
  "Mail",
  "Blog",
  "Favorites",
  "Forum",
  "Groups",
  "Events",
  "Videos",
  "Music",
  "Classifieds",
] as const;

export default function MySpaceNav({
  logoSrc = "/myspace_2012.png",
  logoAlt = "MySpace",
}: MySpaceNavProps) {
  const [q, setQ] = useState("");

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // keep it on the page
  };

  return (
    <nav className="myspace-nav w-full bg-blue-800 text-sm">
      {/* Top row */}
      <div className="top flex items-center justify-between gap-3 px-3 py-2">
        {/* Left: Logo (always visible) */}
        <div className="left flex items-center">
          <Link href="#" aria-label="Home">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={200}
              height={28}
              style={{ aspectRatio: "55/14", height: "auto", width: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Center: Search (hide last, at <sm) */}
        <div className="center hidden sm:block">
          <form
            role="search"
            onSubmit={onSearch}
            className="flex items-start gap-4"
          >
            {/* Radios (hide second, at <md) */}
            <div className="hidden md:flex flex-col">
              <div className="field-row text-white">
                <input
                  id="radio-web"
                  type="radio"
                  name="scope"
                  value="web"
                  defaultChecked
                />
                <label htmlFor="radio-web">The Web</label>
              </div>
              <div className="field-row text-white">
                <input
                  id="radio-myspace"
                  type="radio"
                  name="scope"
                  value="myspace"
                />
                <label htmlFor="radio-myspace">MySpace</label>
              </div>
            </div>

            {/* Search input */}
            <div className="search-wrapper">
              <input
                id="q"
                name="q"
                type="text"
                autoComplete="off"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="h-7 w-52 border border-black px-2"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-7 px-3 border border-black bg-[#e6e6e6] text-black"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right: Help | LogIn | SignUp (hide first, at <lg) */}
        <div className="right hidden lg:block whitespace-nowrap text-white text-xs">
          {topLinks.map((t, i) => (
            <span key={t.label}>
              <Link href="#" className="underline">
                {t.label}
              </Link>
              {i < topLinks.length - 1 ? " | " : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Main link row */}
      <ul className="links hidden sm:flex flex-wrap items-center gap-x-4 gap-y-2 bg-blue-500 px-3 py-2">
        {mainLinks.map((label) => (
          <li key={label}>
            <Link href="#" className="underline text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
