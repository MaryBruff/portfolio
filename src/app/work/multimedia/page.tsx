"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import { useState } from 'react';

export default function Multimedia() {
  const projects = [
    {
      title: 'Adobe After Effects Motion Graphics Reel',
      description: '(Compilation of motion graphics projects, demonstrating technical proficiency in Adobe After Effects.)',
      slug: 'adobe-after-effects-motion-graphics-reel',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/adobe-after-effects-reel.png', // Replace with actual thumbnail path
    },
    {
      title: 'Riverside Cemetery Soundscape',
      description: '(Created an immersive audio-visual project for YouTube, showcasing storytelling through multimedia.)',
      slug: 'riverside-cemetery-soundscape',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/riverside-cemetery.png', // Replace with actual thumbnail path
    },
    {
      title: 'Denver Metro Caring On-Site Training Video',
      description: '(Produced and starred in a training video for Metro Caring, demonstrating leadership and multimedia production.)',
      slug: 'denver-metro-caring-training-video',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/denver-metro-caring.png', // Replace with actual thumbnail path
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Multimedia & Motion" className="myspace-window">
          <p className="text-myspace-text mb-4">
            This category showcases skills in multimedia and motion graphics.
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