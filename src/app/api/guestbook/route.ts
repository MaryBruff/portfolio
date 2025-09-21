import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@prisma/lib/prisma";
import { ICONS } from "@/lib/icons";
import crypto from "crypto";

function sanitize(s: string) {
  const noTags = s.replace(/<[^>]*>/g, "");
  return noTags.replace(/\s+/g, " ").trim();
}

function hashIp(ip: string) {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

async function verifyTurnstile(token: string | null, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;

  try {
    const form = new URLSearchParams();
    form.append("secret", secret);
    form.append("response", token);
    if (ip) form.append("remoteip", ip);

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: form.toString(),
      }
    );

    const data = await res.json();
    if (!data?.success) {
      console.warn("Turnstile failed", { data }); // shows error-codes/hostname on dev
    }
    return !!data?.success;
  } catch (e) {
    console.error("Turnstile verify error", e);
    return false;
  }
}

export async function GET() {
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      name: true,
      message: true,
      icon: true,
      createdAt: true,
    },
  });

  return NextResponse.json({
    entries: (entries as GuestbookEntry[]).map(
      (e: GuestbookEntry): GuestbookEntryResponse => ({
        id: e.id,
        name: e.name,
        message: e.message,
        icon: e.icon,
        createdAt: e.createdAt.toISOString(),
      })
    ),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, message, icon, nickname, turnstileToken } = body || {};

    // Honeypot
    if (typeof nickname === "string" && nickname.trim().length > 0) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // Turnstile
    const captchaOK = await verifyTurnstile(turnstileToken ?? null);
    if (!captchaOK) {
      return NextResponse.json(
        { error: "Captcha failed. Please try again." },
        { status: 400 }
      );
    }

    // Validate/sanitize
    const cleanName = sanitize(String(name || "")).slice(0, 40);
    const cleanMessage = sanitize(String(message || "")).slice(0, 280);
    const chosenIcon = ICONS.includes(icon) ? icon : ICONS[0];

    if (!cleanName || !cleanMessage) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    // Optional: disallow links (reduce spam/phish)
    if (/\bhttps?:\/\//i.test(cleanMessage)) {
      return NextResponse.json(
        { error: "Links are not allowed in the guestbook." },
        { status: 400 }
      );
    }

    // Basic rate limiting: max 2 comments / 5 min per IP and per name
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
    const ipHash = hashIp(ip);
    const ua = req.headers.get("user-agent") || undefined;

    const since = new Date(Date.now() - 5 * 60 * 1000);

    const [byIp, byName] = await Promise.all([
      prisma.guestbookEntry.count({
        where: { ipHash, createdAt: { gt: since } },
      }),
      prisma.guestbookEntry.count({
        where: { name: cleanName, createdAt: { gt: since } },
      }),
    ]);

    if (byIp >= 2 || byName >= 2) {
      return NextResponse.json(
        { error: "Slow down a bit. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    await prisma.guestbookEntry.create({
      data: {
        name: cleanName,
        message: cleanMessage,
        icon: chosenIcon,
        ipHash,
        userAgent: ua,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  icon: (typeof ICONS)[number];
  createdAt: Date;
}

interface GuestbookEntryResponse {
  id: number;
  name: string;
  message: string;
  icon: (typeof ICONS)[number];
  createdAt: string;
}
