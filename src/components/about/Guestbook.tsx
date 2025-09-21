"use client";
import * as React from "react";
import Turnstile from "react-turnstile";
import { ICONS, type Icon } from "@/lib/icons";

type Entry = {
  id: string;
  name: string;
  message: string;
  icon?: string;
  createdAt: string;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function Guestbook() {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [icon, setIcon] = React.useState<Icon>(ICONS[0]);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(
    null
  );
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
          nickname: "", // honeypot
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to post");
      }

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
    <section className="comment-wall">
      {/* Header */}
      <header className="bg-orange-200 text-orange-500 text-sm font-bold px-2 py-1 mb-3">
        <h5>Mary&apos;s Friend&apos;s Comments</h5>
      </header>

      {/* Counter + View/Edit link */}
      <p className="mb-4 text-sm">
        <b>
          Displaying{" "}
          <span className="px-1 rounded text-red-700 text-base">
            {entries.length}
          </span>{" "}
          of{" "}
          <span className="px-1 rounded text-red-700 text-base">
            {entries.length}
          </span>{" "}
          comments (
          <a href="#add-comment-form" className="underline hover:text-red-700">
            Add Comment
          </a>
          {` / `}
          <a href="#" className="underline hover:no-underline">
            View/Edit All Comments
          </a>
          )
        </b>
      </p>

      {/* Comments “table” */}
      <ul className="w-full border border-white divide-y divide-white">
        {entries.length === 0 && (
          <li className="p-4 text-sm opacity-80 bg-orange-400 text-white">
            No comments yet. Be the first! ✍️
          </li>
        )}

        {entries.map((e) => (
          <li
            key={e.id}
            className="grid grid-cols-[110px_1fr] gap-0 bg-orange-300 text-white"
          >
            {/* Left: profile column */}
            <div className="p-2 flex flex-col items-center justify-start">
              <figure className="text-center">
                <figcaption className="mb-1 text-xs font-bold underline">
                  <a href="#" aria-label={`${e.name}'s profile`}>
                    {e.name}
                  </a>
                </figcaption>

                {/* Emoji-as-avatar tile */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center text-5xl">
                  <span className="text-black" aria-hidden="true">
                    {e.icon ?? initialsFromName(e.name)}
                  </span>
                </div>
              </figure>
            </div>

            {/* Right: message column */}
            <div className="p-3 bg-orange-100 text-black">
              <p className="text-xs font-bold">{formatDate(e.createdAt)}</p>
              <p className="mt-1 whitespace-pre-wrap text-sm leading-5">
                {e.message}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* Form */}
      <form
        id="add-comment-form"
        onSubmit={onSubmit}
        className="mt-6 space-y-3 border-t border-black/10 pt-4"
      >
        <h5 className="text-base mb-0">Add a Comment</h5>
        <p className="text-sm opacity-80">
          Please be respectful and kind. Spam or inappropriate content will be removed! ✨
        </p>
        {/* Honeypot */}
        <input
          type="text"
          name="nickname"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Name + Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs opacity-80">
              Name:
            </label>
            <input
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={40}
              aria-label="Your name"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="icon" className="mb-1 block opacity-80">
              Choose an icon:
            </label>
            <select
              id="icon"
              value={icon}
              onChange={(e) => setIcon(e.target.value as Icon)}
              className="block"
            >
              {ICONS.map((ic) => (
                <option key={ic} value={ic}>
                  {ic}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Message */}
        <div>
          <label htmlFor="message" className="mb-1 block text-xs opacity-80">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a note like it’s 2005…"
            className="w-full min-h-[80px] rounded !border !border-[#7f9db9]"
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
              theme="light"
              size="invisible"
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
          {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>
    </section>
  );
}

/* Helpers */
function initialsFromName(name: string) {
  const initials =
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || ":)";
  return initials;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
