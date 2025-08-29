"use client";
import * as React from "react";
import Window from "@/components/Window";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: string; // ISO
};

export default function Guestbook() {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    try {
      const res = await fetch("/api/guestbook");
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
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      if (!res.ok) throw new Error("Failed to post");
      setName("");
      setMessage("");
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Window title="Guestbook">
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
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a note like it’s 2005…"
            className="col-span-4 min-h-[80px]"
            maxLength={280}
            aria-label="Your message"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            disabled={submitting}
            variant="outline"
          >
            {submitting ? "Posting…" : "Post Comment"}
          </Button>
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
              <AvatarComponent name={e.name} />
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
    </Window>
  );
}

function AvatarComponent({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <Avatar className="w-10 h-10 border-2 border-pink-500 bg-pink-950/80">
      <AvatarFallback className="portfolio-font text-white">
        {initials || ":)"}
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
