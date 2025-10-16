  "use client";

  import Image from "next/image";
  import Link from "next/link";

  export default function AboutMe() {
    return (
      <div className="general-about">
        {/* Name */}
        <div className="mb-2 flex items-center space-x-2">
          <h4 className="font-bold">Mary Bruff</h4>
          <Image
            src="/2008/heart-pink-flash.gif"
            alt="Heart"
            width={24}
            height={24}
            unoptimized
          />
        </div>

        {/* Profile pic + details row */}
        <div className="grid grid-cols-[160px_1fr] gap-4 text-sm">
          <div className="profile-pic">
            <Image
              src="/Me_Toon.png"
              alt="Mary Bruff's profile picture"
              width={160}
              height={160}
              className="w-[160px] h-[160px] object-cover object-top border border-black"
              priority
            />
          </div>

          <div className="details space-y-3">
            <p className="italic">"Fail fast, fail often!"</p>
            <p>United States</p>
            <Image
              src="/2008/nice-breeze.gif"
              alt="Online Now"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="http://www.myspacegens.com/images/online_now/148.gif"
              alt="Online Now"
              width={100}  
              height={100}
              unoptimized
            />
          </div>
        </div>

      {/* Mood + View my */}
    <div className="mt-3 space-y-1 text-sm">
    <p>
      <b>Mood:</b> Most Excellent :] 
    </p>
    <p>
      <b>View my:</b>{" "}
      <Link
        href="https://github.com/MaryBruff"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Mary Bruff's GitHub in a new tab"
        className="underline hover:text-blue-600"
      >
        GitHub
      </Link>
      <span className="mx-1">|</span>
      <Link
        href="https://poptartmarbear.tumblr.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Mary Bruff's Tumblr in a new tab"
        className="underline hover:text-blue-600"
      >
        Tumblr
      </Link>
    </p>
        </div>
      </div>
    );
  }