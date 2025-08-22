"use client";

import Window from '@/components/Window';
import Image from 'next/image';
import { useState } from 'react'; // Removed unused 'use' import

export default function Multimedia() {
  interface Project {
    title: string;
    description: string;
    slug: string;
    portfoliumUrl: string;
    thumbnail: string;
  }

  const projects: Project[] = [
    // Replace with your actual multimedia projects
    {
      title: 'Example Multimedia Project',
      description: '(Description of the multimedia project.)',
      slug: 'example-multimedia-project',
      portfoliumUrl: 'https://portfolium.com/example/portfolio',
      thumbnail: '/thumbnails/example-multimedia.png',
    },
    // Add more projects as needed
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Multimedia Projects" className="myspace-window">
          <p className="text-myspace-text mb-4">
            Showcase of multimedia projects highlighting technical and creative skills.
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
                  style={{ objectFit: 'cover' }}
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