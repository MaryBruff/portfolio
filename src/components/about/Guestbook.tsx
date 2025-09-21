"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Turnstile from "react-turnstile";
import { ICONS, type Icon } from "@/lib/icons";

type Entry = {
  id: string;
  name: string;
  message: string;
  icon?: string;          // <-- added
  createdAt: string;      // ISO
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY; // <-- note the NEXT_PUBLIC_ prefix

export default function Guestbook() {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [icon, setIcon] = React.useState<Icon>(ICONS[0]);       // <-- icon state
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null); // <-- token
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      const data = await res.json();
      setEntries(data.entries || []);
    } catch {
      // noop
    }
  }, []);

  React.useEffect(() => {
    load();
  }, [load]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Name and message are required.");
      return;
    }
    if (siteKey && !turnstileToken) {
      setError("Please complete the captcha.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          message,
          icon,
          nickname: "",              // honeypot field (keep empty)
          turnstileToken,            // server verifies this
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to post");
      }

      // reset form
      setName("");
      setMessage("");
      setIcon(ICONS[0]);
      setTurnstileToken(null);
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h4 className="font-bold mb-3">Guestbook</h4>

      <form onSubmit={onSubmit} className="space-y-3 mb-6">
        {/* Honeypot */}
        <input
          type="text"
          name="nickname"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="col-span-4 md:col-span-2"
            maxLength={40}
            aria-label="Your name"
          />

          {/* Icon picker */}
          <div className="col-span-4 md:col-span-2 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs opacity-80 whitespace-nowrap portfolio-font">
              Choose an icon:
            </span>
            <div className="flex items-center gap-1">
              {ICONS.map((ic) => (
                <button
                  key={ic}
                  type="button"
                  onClick={() => setIcon(ic)}
                  className={`px-2 py-1 rounded border ${
                    icon === ic ? "border-pink-500" : "border-transparent"
                  } bg-pink-950/60 hover:bg-pink-900/60`}
                  aria-pressed={icon === ic}
                  title={`Use ${ic}`}
                >
                  <span className="text-lg leading-none">{ic}</span>
                </button>
              ))}
            </div>
          </div>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a note like it’s 2005…"
            className="col-span-4 min-h-[80px]"
            maxLength={280}
            aria-label="Your message"
          />
        </div>

        {siteKey ? (
          <div className="pt-1">
            <Turnstile
              sitekey={siteKey}
              onVerify={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken(null)}
              theme="dark"
            />
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={submitting || (siteKey ? !turnstileToken : false)}
          >
            {submitting ? "Posting…" : "Post Comment"}
          </button>
          {error && (
            <span className="text-red-200 text-sm portfolio-font">{error}</span>
          )}
        </div>
      </form>

      <ul className="space-y-3">
        {entries.length === 0 && (
          <li className="opacity-80 portfolio-font">
            No comments yet. Be the first! ✍️
          </li>
        )}
        {entries.map((e) => (
          <li
            key={e.id}
            className="border border-pink-500 p-3 bg-pink-950/80 backdrop-blur-sm rounded-lg"
          >
            <div className="flex items-start gap-3">
              <AvatarComponent name={e.name} icon={e.icon} />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <strong className="portfolio-font">{e.name}</strong>
                  <time dateTime={e.createdAt} className="portfolio-font">
                    {formatDate(e.createdAt)}
                  </time>
                </div>
                <p className="mt-1 whitespace-pre-wrap portfolio-font">
                  {e.message}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AvatarComponent({ name, icon }: { name: string; icon?: string }) {
  const initials =
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || ":)";
  return (
    <Avatar className="w-10 h-10 border-2 border-pink-500 bg-pink-950/80 flex items-center justify-center">
      <AvatarFallback className="portfolio-font text-white text-lg">
        {icon ?? initials}
      </AvatarFallback>
    </Avatar>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
