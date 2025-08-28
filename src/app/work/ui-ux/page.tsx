"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";

export default function UIUX() {
  const projects = [
    {
      title: "Pitch Deck for 'The Queen'",
      description: "A storytelling-focused pitch deck with strong visual organization and design principles.",
      url: "https://portfolium.com/entry/pitch-deck-for-the-queen",
      github: null, // Add GitHub link if available
      thumbnail: "/the_queen.png",
    },
    {
      title: "Clay Script Look Book",
      description: "A visually engaging look book created using Adobe Photoshop, Illustrator, and Spark.",
      url: "https://portfolium.com/entry/clay-script-look-book",
      github: null, // Add GitHub link if available
      thumbnail: "/clay_script.png",
    },
    {
      title: "Skincare Website Concept & Design",
      description: "A user-focused website design with personas, audience analysis, and multi-device interfaces.",
      url: "https://portfolium.com/entry/skincare-website-concept-design",
      github: null, // Add GitHub link if available
      thumbnail: "/skincare_website.png",
    },
    {
      title: "Content Strategy for NoAgenda Podcast",
      description: "A strategic content plan for a popular podcast, enhancing user engagement.",
      url: "https://portfolium.com/entry/content-strategy-for-noagenda-podcast",
      github: null, // Add GitHub link if available
      thumbnail: "/placeholder.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="UI/UX & Content Strategy">
          <p className="mb-6 portfolio-font text-lg">
            Showcasing skills in user experience, interface design, content strategy, and audience engagement.
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