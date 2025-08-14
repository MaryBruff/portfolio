    "use client";
    import * as React from "react";


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
        <div className="text-myspace-text">
        <form onSubmit={onSubmit} className="space-y-3 mb-6">
            {/* Honeypot */}
            <input type="text" name="nickname" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="md:col-span-1 border-2 border-myspace-accent px-2 py-2 bg-win95-white text-black"
                maxLength={40}
                aria-label="Your name"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a note like it’s 2005…"
                className="md:col-span-3 border-2 border-myspace-accent px-2 py-2 bg-win95-white text-black min-h-[80px]"
                maxLength={280}
                aria-label="Your message"
            />
            </div>
            <div className="flex items-center gap-3">
            <button
                type="submit"
                disabled={submitting}
                className="bg-win95-gray border-2 border-win95-dark-gray shadow-win95-inset px-3 py-1 text-black active:translate-y-[1px]"
            >
                {submitting ? "Posting…" : "Post Comment"}
            </button>
            {error && <span className="text-red-200 text-sm">{error}</span>}
            </div>
        </form>

        <ul className="space-y-3">
            {entries.length === 0 && (
            <li className="opacity-80">No comments yet. Be the first! ✍️</li>
            )}
            {entries.map((e) => (
            <li key={e.id} className="border border-myspace-accent p-3 bg-[length:180px_180px]" style={{ backgroundImage: "var(--background-image-glitter)" }}>
                <div className="flex items-start gap-3">
                <Avatar name={e.name} />
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm opacity-90">
                    <strong>{e.name}</strong>
                    <time dateTime={e.createdAt}>{formatDate(e.createdAt)}</time>
                    </div>
                    <p className="mt-1 whitespace-pre-wrap">{e.message}</p>
                </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    function Avatar({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return (
        <div className="w-10 h-10 rounded-sm bg-win95-gray border-2 border-win95-dark-gray flex items-center justify-center text-black font-bold">
        {initials || ":)"}
        </div>
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