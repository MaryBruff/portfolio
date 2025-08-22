"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import { use, useState } from 'react';

export default function Creative() {
  const projects = [
    {
      title: 'Out of Touch: COVID Performance Art Piece',
      description: '(A thought-provoking YouTube project showing artistic interpretation of social themes.)',
      slug: 'out-of-touch-covid-performance-art-piece',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/out-of-touch-covid.png', // Replace with actual thumbnail path
    },
    {
      title: 'Cigarettes After Sex - Affection Music Video',
      description: '(A creative reinterpretation of Jean-Luc Godard\'s "Vivre sa vie," blending music and cinema.)',
      slug: 'cigarettes-after-sex-affection-music-video',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/affection-music-video.png', // Replace with actual thumbnail path
    },
    {
      title: '1950’s Depression PSA for 2019',
      description: '(Created a YouTube PSA blending retro aesthetic with contemporary relevance.)',
      slug: '1950s-depression-psa-for-2019',
      portfoliumUrl: 'https://portfolium.com/MaryBruff/portfolio', // Replace with actual Portfolium entry URL
      thumbnail: '/thumbnails/1950s-depression-psa.png', // Replace with actual thumbnail path
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Creative & Performance" className="myspace-window">
          <p className="text-myspace-text mb-4">
            For roles focused on creativity or storytelling, these projects highlight your artistic vision.
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