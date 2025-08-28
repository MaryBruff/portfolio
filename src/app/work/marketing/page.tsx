"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";

export default function Marketing() {
  const projects = [
    {
      title: "Marketing Strategy for Senior Citizens",
      description: "A targeted marketing strategy tailored to senior citizens, emphasizing audience awareness and engagement.",
      url: "https://portfolium.com/entry/marketing-strategy-for-senior-citizens",
      github: null, // Add GitHub link if available
      thumbnail: "/senior_marketing.jpg",
    },
    {
      title: "Video Marketing Strategy Guide",
      description: "A comprehensive guide showcasing expertise in planning and executing impactful video marketing campaigns.",
      url: "https://portfolium.com/entry/video-marketing-strategy-guide",
      github: null, // Add GitHub link if available
      thumbnail: "/marketing_guide.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Marketing & Strategy">
          <p className="mb-6 portfolio-font text-lg">
            Showcasing expertise in marketing, branding, and strategic planning for targeted audience engagement.
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
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4 rounded-lg border-2 border-pink-500"
                    />
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
                      View Project
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