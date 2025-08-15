"use client";
import * as React from "react";

export default function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);
  const mailto = `mailto:${email}`;

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={mailto}
        className="underline decoration-dashed underline-offset-4 hover:opacity-90"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="bg-win95-gray border-2 border-win95-dark-gray shadow-win95-inset px-2 py-1 text-black leading-none"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
