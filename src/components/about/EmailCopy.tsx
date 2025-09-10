"use client";

import * as React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <TooltipProvider>
      <Tooltip open={copied || undefined}>
        <TooltipTrigger asChild>
          <a
            className="underline decoration-dashed underline-offset-4 cursor-pointer hover:text-chart-5 transition text-foreground"
            onClick={onCopy}
            aria-label="Copy email"
          >
            {email}
          </a>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{copied ? "Copied!" : "Copy?"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}