"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

export default function Multimedia() {
  const projects = [
    {
      title: "Multimedia Project 1",
      description: "Broadcast-ready videos with visual effects, animated titles, and dynamic motion graphics using Adobe After Effects.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      github: null, // Add GitHub link if available
      thumbnail: "/thumbnails/multimedia-project-1.png",
    },
    {
      title: "Adobe After Effects Motion Graphics Reel",
      description: "Broadcast-ready videos featuring visual effects, animated titles, and dynamic motion graphics using Adobe After Effects.",
      url: "https://youtu.be/Vck7ggcrFyY?si=6wlzvhmTbe2M9Y4y",
      github: null, // Add GitHub link if available
      thumbnail: "/thumbnails/multimedia-project-2.png",
    },
    {
      title: "Metro Caring On-Site Training",
      description: "Engaging training videos for Metro Caring, focusing on community outreach and support.",
      url: "https://youtu.be/wXUrLi4q8es?si=zO3yn1rE1shgSkFS",
      github: null, // Add GitHub link if available
      thumbnail: "/thumbnails/multimedia-project-3.png",
    },
    {
      title: "Metro Caring Zoom Training Video",
      description: "Engaging training videos for Metro Caring, focusing on community outreach and support.",
      url: "https://youtu.be/OdmXvqIyn4c?si=QFPzf0SfPH5D18xT",
      github: null, // Add GitHub link if available
      thumbnail: "/thumbnails/multimedia-project-4.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Multimedia & Motion">
          <p className="mb-6 portfolio-font text-lg">
            Showcasing dynamic multimedia projects with visual effects, motion graphics, and engaging video content.
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