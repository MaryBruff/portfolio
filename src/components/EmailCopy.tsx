"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center gap-2 font-comic-sans">
      <a
        href={mailto}
        className="underline decoration-dashed underline-offset-4 hover:text-accent transition text-foreground"
      >
        {email}
      </a>
      <Button
        type="button"
        onClick={onCopy}
        variant="outline"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}