"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import { useState } from 'react';

export default function Marketing() {
  const projects = [
    {
      title: 'Marketing Strategy for Senior Citizens',
      description: '(Focused marketing strategy tailored to a specific demographic, demonstrating audience awareness.)',
      slug: 'marketing-strategy-for-senior-citizens',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/senior-citizens-marketing.png', // Replace with actual thumbnail path
    },
    {
      title: 'Video Marketing Strategy Guide',
      description: '(A guide showcasing expertise in planning and executing marketing campaigns.)',
      slug: 'video-marketing-strategy-guide',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/video-marketing-guide.png', // Replace with actual thumbnail path
    },
  ];

  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Marketing & Strategy" className="myspace-window">
          <p className="text-myspace-text mb-4">
            Projects that emphasize marketing, branding, and strategic planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="border border-myspace-accent p-4 rounded text-myspace-text cursor-pointer hover:opacity-90"
                onClick={() => setSelected(project)}
              >
                <Image
                  src={project.thumbnail}
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
              src={selected.portfoliumUrl}
              className="w-full h-[90%]"
              title={selected.title}
            />
          </div>
        </div>
      )}
    </main>
  );
}