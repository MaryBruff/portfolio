import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      t: "6 Albums to Get You into Jazz",
      u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/6-albums-to-get-you-into-jazz",
    },
    {
      t: "Not Your Cliché Jangle Pop Song Recommendation (Pt. 1)",
      u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/not-your-cliché-jangle-pop-song-recommendation-pt-1",
    },
    {
      t: "5 Underrated Alternative Albums from the 90s",
      u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/5-underrated-alternative-albums-from-the-90s",
    },
  ];

  return (
    <div className="space-y-3">
      <ul className="space-y-2 text-sm">
        {posts.map((x) => (
          <li key={x.t} className="flex items-start gap-2">
            <span className="mt-1">💖</span>
            <Link
              href={x.u}
              target="_blank"
              className="underline hover:opacity-90"
            >
              {x.t}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="https://mbruff.wixsite.com/letstalkabooutmusic"
        target="_blank"
      >
        <button className="bg-transparent border border-current text-current py-1 px-2 rounded">
          View Blog
        </button>
      </Link>
    </div>
  );
}
