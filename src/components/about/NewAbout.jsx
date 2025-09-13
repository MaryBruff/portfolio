"use client";

import Window from "@/components/Window";

export default function NewAbout() {
  return (
    <Window title="About Me">
      <div className="text-sm space-y-4">
        <div>
            <a href="https://www.glitter-graphics.com/myspace/text_generator.php" target="_blank" rel="noopener noreferrer">
            <img src="https://text.glitter-graphics.net/mixed/a.gif" alt="a" className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/b.gif" alt="b" className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/o.gif" alt="o" className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/u.gif" alt="u" className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/t.gif" alt="t" className="inline-block" style={{ border: 0 }} />
            <img src="https://dl3.glitter-graphics.net/empty.gif" alt="space" width={20} className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/m.gif" alt="m" className="inline-block" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/mixed/e.gif" alt="e" className="inline-block" style={{ border: 0 }} />
          </a>
          <p>
            Hey, I'm Mary! I'm here to share my creative journey and connect with awesome people. Drop me a message if you want to chat about music, tech, or anything fun! Check out my portfolio to see what I'm all about.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-base">Who I'd Like to Meet:</h3>
          <p>Ur mom</p>
        </div>
      </div>
    </Window>
  );
}