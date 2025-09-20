export const ICONS = [
  "🌈", "⭐️", "🎀", "🦄", "☢️", "💿", "🪩", "🖤", "✨", "👾", "📼",
] as const;
export type Icon = (typeof ICONS)[number];