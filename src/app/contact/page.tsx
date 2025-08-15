// app/contact/page.tsx
"use client";
import * as React from "react";
import Window from "@/components/Window";
import Guestbook from "@/components/Guestbook";
import EmailCopy from "@/components/EmailCopy";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-myspace-bg py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
        
        {/* Header */}
        <Window title="Let’s Connect" className="myspace-window">
          <p className="text-myspace-text">
            Add me like it’s 2005 ✨ — find my links below or drop a friendly comment in the guestbook.
          </p>
        </Window>

        {/* Links + Views row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <Window title="MySpace Top 3 (Links)" className="myspace-window h-full">
            <ul className="space-y-3 text-myspace-text">
              <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                <span className="flex items-center gap-2"><span>💼</span>LinkedIn</span>
                <Link href="https://www.linkedin.com/in/mary-bruff/" target="_blank"
                  className="underline decoration-dashed underline-offset-4 hover:opacity-90">
                  /marybruff
                </Link>
              </li>
              <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                <span className="flex items-center gap-2"><span>💻</span>GitHub</span>
                <Link href="https://github.com/MaryBruff" target="_blank"
                  className="underline decoration-dashed underline-offset-4 hover:opacity-90">
                  @MaryBruff
                </Link>
              </li>
              <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                <span className="flex items-center gap-2"><span>📮</span>Email</span>
                <EmailCopy email="marybruff5@gmail.com" />
              </li>
            </ul>
          </Window>

          <Window title="Profile Views" className="myspace-window h-full">
            <ProfileViews />
          </Window>
        </div>

        {/* Guestbook */}
        <Window title="MySpace Comments (Guestbook)" className="myspace-window">
          <Guestbook />
        </Window>
      </div>
    </main>
  );
}

function ProfileViews() {
  const [views, setViews] = React.useState<number | null>(null);
  React.useEffect(() => {
    fetch("/api/guestbook/views", { method: "POST" })
      .then(() => fetch("/api/guestbook/views"))
      .then(r => r.json())
      .then(d => setViews(d.total))
      .catch(() => setViews(null));
  }, []);
  return (
    <div className="text-myspace-text">
      <p className="mb-2">People who have viewed this page:</p>
      <div className="text-4xl font-bold animate-blink leading-none">{views ?? "—"}</div>
      <p className="mt-3 text-xs opacity-80">Demo counter — resets on redeploy.</p>
    </div>
  );
}
