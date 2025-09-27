"use client";
import * as React from "react";
import Turnstile from "react-turnstile";
import Image from "next/image";
import { ICONS, type Icon } from "@/lib/icons";

type Entry = {
  id: string;
  name: string;
  message: string;
  icon?: string;
  createdAt: string;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const PAGE_SIZE = 5;

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
  const [isLoading, setIsLoading] = React.useState(true);

  // PAGINATION state
  const [page, setPage] = React.useState(1);

  const load = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      const data = await res.json();
      setEntries(data.entries || []);
    } catch {
      // noop
    } finally {
      setIsLoading(false);
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
          nickname: "",
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

      setPage(1); // PAGINATION: jump to first page to show newest
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  // ===== PAGINATION DERIVED DATA =====
  const sorted = React.useMemo(
    () =>
      [...entries].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [entries]
  );
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const startIdx = (clampedPage - 1) * PAGE_SIZE;
  const pageEntries = sorted.slice(startIdx, startIdx + PAGE_SIZE);
  const from = total === 0 ? 0 : startIdx + 1;
  const to = Math.min(startIdx + pageEntries.length, total);

  function goto(p: number) {
    const np = Math.min(Math.max(1, p), totalPages);
    setPage(np);
    document
      .getElementById("guestbook-top")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="comment-wall">
      <div id="guestbook-top" />
      {/* Header */}
      <header className="bg-pink-200 text-pink-500 text-sm font-bold px-2 py-1 mb-3">
        <h5>Mary&apos;s Friend&apos;s Comments</h5>
      </header>

      {/* Counter + Add link */}
      <p className="mb-4 text-sm">
        <b>
          Displaying{" "}
          <span className="px-1 rounded text-purple-700 text-base">{from}</span>–
          <span className="px-1 rounded text-purple-700 text-base">{to}</span> of{" "}
          <span className="px-1 rounded text-purple-700 text-base">{total}</span>{" "}
          comments (
          <span className="hidden md:inline">
            <a
              href="#add-comment-form"
              className="underline hover:text-red-700"
            >
              Add Comment
            </a>
            {` / `}
          </span>
          <a href="#" className="underline hover:no-underline">
            View/Edit All Comments
          </a>
          )
        </b>
      </p>

      {/* Spinner or Comments list */}
      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <ul className="w-full border border-white divide-y divide-white">
          {total === 0 && (
            <li className="p-4 text-sm opacity-80 bg-purple-400 text-white">
              No comments yet. Be the first! ✍️
            </li>
          )}

          {pageEntries.map((e) => (
            <li
              key={e.id}
              className="grid grid-cols-[110px_1fr] gap-0 bg-pink-300 text-white"
            >
              {/* Left: profile */}
              <div className="p-2 flex flex-col items-center justify-start">
                <figure className="text-center">
                  <figcaption className="mb-1 text-xs font-bold underline">
                    <a href="#" aria-label={`${e.name}'s profile`}>
                      {e.name}
                    </a>
                  </figcaption>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center text-5xl">
                    <span className="text-black" aria-hidden="true">
                      {e.icon ?? initialsFromName(e.name)}
                    </span>
                  </div>
                </figure>
              </div>

              {/* Right: message */}
              <div className="p-3 bg-pink-100 text-black">
                <p className="text-xs font-bold">{formatDate(e.createdAt)}</p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-5">
                  {e.message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ===== PAGINATION CONTROLS ===== */}
      {total > PAGE_SIZE && (
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          <button
            onClick={() => goto(clampedPage - 1)}
            disabled={clampedPage <= 1}
            className="rounded border border-black/20 bg-neutral-100 px-3 py-1 disabled:opacity-50"
          >
            ‹ Prev
          </button>

          <div className="flex items-center gap-2">
            <span>Page</span>
            <span className="font-semibold">{clampedPage}</span>
            <span>of</span>
            <span className="font-semibold">{totalPages}</span>
          </div>

          <button
            onClick={() => goto(clampedPage + 1)}
            disabled={clampedPage >= totalPages}
            className="rounded border border-black/20 bg-neutral-100 px-3 py-1 disabled:opacity-50"
          >
            Next ›
          </button>
        </div>
      )}

      {/* Mobile message and form */}
      <div className="mt-2">
        <div className="mb-2 flex items-end justify-center">
          <p className="block md:hidden text-sm text-pink-600">
            Adding Comments disabled on mobile. <b>Visit on your desktop!</b> ✨
          </p>
          <Image
            src="/2008/pikachoo.gif"
            alt="Come back on your desktop!"
            width={40}
            height={100}
            className="block md:hidden"
          />
        </div>
        <form
          id="add-comment-form"
          onSubmit={onSubmit}
          className="hidden md:block space-y-3 border-t border-black/10 pt-4"
        >
          <h5 className="text-base mb-0">Add a Comment</h5>
          <p className="text-sm opacity-80">
            Please be respectful and kind. Spam or inappropriate content will be
            removed! ✨
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
            {error && <span className="text-pink-600 text-sm">{error}</span>}
          </div>
        </form>
      </div>
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
  let formatted = d.toLocaleString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  // replace the 3rd digit of the year with "0" to make it Myspace-core
  formatted = formatted.replace(
    /(\d{2})(\d)(\d)/,
    (_, a, _b, c) => `${a}0${c}`
  );

  return formatted;
}
