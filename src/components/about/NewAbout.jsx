"use client";

import { aboutGlitterText, meetGlitterText } from "./data/glitterText";

export default function NewAbout() {
  return (
    <div className="text-sm space-y-4">
      <div className="heading bg-pink-200 text-pink-500 text-sm font-bold px-2 py-1">
        <h5>Mary Bruff's Blurbs</h5>
      </div>
      <div>
        <a
          href="https://www.glitter-graphics.com/myspace/text_generator.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          {aboutGlitterText.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.alt}
              width={item.width ?? undefined}
              className="inline-block"
              style={{ border: 0, height: "48px" }}
            />
          ))}
        </a>
        <p>
          Hey, I'm Mary! I'm here to share my creative journey and connect with
          awesome people. Drop me a message if you want to chat about music,
          tech, or anything fun! Check out my portfolio to see what I'm all
          about.
        </p>
      </div>
      <div>
        <a
          href="https://www.glitter-graphics.com/myspace/text_generator.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          {meetGlitterText.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.alt}
              width={item.width ?? undefined}
              className="inline-block"
              style={{ border: 0, height: "48px" }}
            />
          ))}
        </a>
        <p>Tom from MySpace</p>
      </div>
    </div>
  );
}
