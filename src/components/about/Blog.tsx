import Window from "@/components/Window";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <Window title="Latest Blog Entries">
      <div className="space-y-2">
        <h4 className="text-lg font-bold portfolio-font">
          Mary&apos;s Latest Blog Entries
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link
              href="https://mbruff.wixsite.com/letstalkabooutmusic/post/6-albums-to-get-you-into-jazz"
              target="_blank"
              className="underline hover:text-chart-4 transition portfolio-font"
            >
              6 Albums to Get You into Jazz
            </Link>
          </li>
          <li>
            <Link
              href="https://mbruff.wixsite.com/letstalkabooutmusic/post/not-your-cliché-jangle-pop-song-recommendation-pt-1"
              target="_blank"
              className="underline hover:text-chart-4 transition portfolio-font"
            >
              Not Your Cliché Jangle Pop Song Recommendation (Pt. 1)
            </Link>
          </li>
          <li>
            <Link
              href="https://mbruff.wixsite.com/letstalkabooutmusic/post/5-underrated-alternative-albums-from-the-90s"
              target="_blank"
              className="underline hover:text-chart-4 transition portfolio-font"
            >
              5 Underrated Alternative Albums from the 90s
            </Link>
          </li>
          <Button variant="outline">
            <Link href="https://mbruff.wixsite.com/letstalkabooutmusic" target="_blank">
              View Blog
            </Link>
          </Button>
        </ul>
      </div>
    </Window>
  );
}