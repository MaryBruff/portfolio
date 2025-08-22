"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SoftwareDevelopment() {
  const projects = [
    {
      title: 'GenreQ',
      description: '(A music genre exploration app, showcasing front-end development and API integration.)',
      slug: 'genre-q',
      url: 'https://genre-q.vercel.app',
      thumbnail: '/thumbnails/genre-q.png', // Replace with actual thumbnail path
    },
    {
      title: 'DoughFin',
      description: '(A financial tracking application, demonstrating full-stack development skills.)',
      slug: 'dough-fin',
      url: 'https://dough-fin-fe-part-2.vercel.app',
      thumbnail: '/thumbnails/dough-fin.png', // Replace with actual thumbnail path
    },
    {
      title: 'Rock Paper Scissors Solo',
      description: '(A solo game implementation, showcasing JavaScript logic and interactive UI.)',
      slug: 'rock-paper-scissors-solo',
      url: 'https://github.com/MaryBruff/Rock-Paper-Scissors-Solo',
      thumbnail: '/thumbnails/rock-paper-scissors.png', // Replace with actual thumbnail path
    },
    {
      title: 'What\'s Cookin',
      description: '(A recipe management app, highlighting front-end development and data handling.)',
      slug: 'whats-cookin',
      url: 'https://github.com/MaryBruff/whats-cookin',
      thumbnail: '/thumbnails/whats-cookin.png', // Replace with actual thumbnail path
    },
    {
      title: 'Self Care Center',
      description: '(A wellness app, demonstrating user-focused design and interactivity.)',
      slug: 'self-care-center',
      url: 'https://github.com/MaryBruff/self-care-center',
      thumbnail: '/thumbnails/self-care-center.png', // Replace with actual thumbnail path
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Software Development" className="myspace-window">
          <p className="text-myspace-text mb-4">
            Projects showcasing skills in software development, including front-end, full-stack, and interactive applications.
          </p>
          <div className="flex justify-end mb-4">
            <Link
              href="https://github.com/MaryBruff"
              target="_blank"
              className="text-myspace-text underline decoration-dashed underline-offset-4 hover:opacity-90"
            >
              View My GitHub Profile
            </Link>
          </div>
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
              src={selected.url}
              className="w-full h-[90%]"
              title={selected.title}
            />
          </div>
        </div>
      )}
    </main>
  );
}