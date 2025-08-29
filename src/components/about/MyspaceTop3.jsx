import Window from "@/components/Window";
import Link from "next/link";
import EmailCopy from "@/components/EmailCopy";

export default function MySpaceTop3() {
  return (
    <Window title="MySpace Top 3 (Links)">
      <ul className="space-y-3">
        <li className="flex items-center justify-between border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <span>💼</span>LinkedIn
          </span>
          <Link
            href="https://www.linkedin.com/in/mary-bruff/"
            target="_blank"
            className="underline hover:text-accent transition portfolio-font"
          >
            /marybruff
          </Link>
        </li>
        <li className="flex items-center justify-between border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <span>💻</span>GitHub
          </span>
          <Link
            href="https://github.com/MaryBruff"
            target="_blank"
            className="underline hover:text-accent transition portfolio-font"
          >
            @MaryBruff
          </Link>
        </li>
        <li className="flex items-center justify-between border border-foreground p-2 rounded-lg">
          <span className="flex items-center gap-2 portfolio-font">
            <span>📮</span>Email
          </span>
          <EmailCopy email="marybruff5@gmail.com" />
        </li>
      </ul>
    </Window>
  );
}