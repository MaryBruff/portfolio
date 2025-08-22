
"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import { useState } from 'react';

export default function UIUX() {
  const projects = [
    {
      title: 'Writing Interactive Media Product',
      description: '(Fits here due to its focus on user personas, audience analysis, and multi-device interface design, which align with UI/UX design principles.)',
      slug: 'writing-interactive-media-product',
    },
    {
      title: 'Pitch Deck for "The Queen"',
      description: '(This project showcases storytelling, visual organization, and design, making it an excellent fit for a content strategy or design-focused section.)',
      slug: 'pitch-deck-for-the-queen',
    },
    {
      title: 'Clay Script Look Book',
      description: '(Created a visually engaging look book using Adobe Photoshop, Illustrator, and Spark, applying design principles and research.)',
      slug: 'clay-script-look-book',
    },
    {
      title: 'Content Strategy for NoAgenda Podcast',
      description: '(Developed a content strategy for a popular podcast, showing skills in user engagement and strategic planning.)',
      slug: 'content-strategy-for-noagenda-podcast',
    },
    {
      title: 'Video Marketing Strategy Guide (Ebook)',
      description: '(Detailed guide for companies on creating a video marketing campaign, showing expertise in communication and strategic thinking.)',
      slug: 'video-marketing-strategy-guide-ebook',
    },
  ];

  type Project = { title: string; description: string; slug: string };
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="UI/UX & Content Strategy" className="myspace-window">
          <p className="text-myspace-text mb-4">
            This category showcases skills in user experience, research, and strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="border border-myspace-accent p-4 rounded text-myspace-text cursor-pointer hover:opacity-90"
                onClick={() => setSelected(project)}
              >
                <Image
                  src="/placeholder.png" // Replace with actual thumbnail URL
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-auto mb-2"
                />
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Window>
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-myspace-bg p-4 rounded max-w-4xl w-full h-4/5 overflow-auto border border-myspace-accent">
            <button
              onClick={() => setSelected(null)}
              className="float-right text-myspace-text hover:underline"
            >
              Close
            </button>
            <iframe
              src={`https://portfolium.com/entry/${selected.slug}`}
              className="w-full h-[90%]"
              title={selected.title}
            />
          </div>
        </div>
      )}
    </main>
  );
}