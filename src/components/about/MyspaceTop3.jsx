import Window from "@/components/Window";
import Link from "next/link";
import EmailCopy from "@/components/about/EmailCopy";
import { GitHubLogoIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function MySpaceTop3() {
  return (
    <Window title="MySpace Top 3 (Links)">
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
    </Window>
  );
}