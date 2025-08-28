"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";

// Function to extract YouTube video ID from URL
const getYouTubeId = (url?: string) => {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url?: string) => {
  const videoId = getYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/placeholder.png";
};

export default function Creative() {
  const projects = [
    {
      title: "Out of Touch: COVID Performance Art Piece",
      description: "A performance art piece exploring isolation and social disconnect during COVID-19, reflecting on communication, self, and reality.",
      url: "https://youtu.be/bsOcefGbpsc?si=-I1DAyg4sqlZNObY",
      github: null, // Add GitHub link if available
      thumbnail: "/placeholder.png", // Use YouTube thumbnail; fallback provided
    },
    {
      title: "Cigarettes After Sex - Affection Music Video",
      description: "A creative reinterpretation of Jean-Luc Godard's 'Vivre sa vie,' blending music and cinematic storytelling.",
      url: "https://youtu.be/ZhWqYnR9Tlw?si=OGeigsQCzTQtH2hu",
      github: null, // Add GitHub link if available
      thumbnail: "/placeholder.png", // Use YouTube thumbnail; fallback provided
    },
    {
      title: "Human Cyborg",
      description: "Inspired by Nam June Paik, this piece blends 80s sci-fi anime nostalgia with modern news to comment on technology's impact on humanity.",
      url: "https://youtu.be/dvrLce76XOE?si=jsZIfZv4Cv10gcFc",
      github: null, // Add GitHub link if available
      thumbnail: "/placeholder.png", // Use YouTube thumbnail; fallback provided
    },
    {
      title: "1950’s Depression PSA for 2019",
      description: "A modern PSA on depression using reimagined 1950s footage to highlight its ongoing relevance and need for awareness.",
      url: "https://youtu.be/i3pcaunZCkM?si=sTSKR5kW-gfJHJ3J",
      github: null, // Add GitHub link if available
      thumbnail: "/placeholder.png", // Use YouTube thumbnail; fallback provided
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Creative & Performance">
          <p className="mb-6 portfolio-font text-lg">
            Showcasing artistic vision through performance art, cinematic storytelling, and socially conscious multimedia projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font transition-transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-pink-300 animate-blink">
                    <Link href={project.url} target="_blank" className="hover:underline">
                      {project.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={project.url} target="_blank">
                    <div className="relative">
                      <Image
                        src={getYouTubeThumbnail(project.url) || project.thumbnail}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-auto mb-4 rounded-lg border-2 border-pink-500"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-pink-500 opacity-80 hover:opacity-100"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
                    asChild
                  >
                    <Link href={project.url} target="_blank">
                      View Video
                    </Link>
                  </Button>
                  {project.github && (
                    <Button
                      variant="outline"
                      className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        View GitHub
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Window>
      </div>
    </main>
  );
}