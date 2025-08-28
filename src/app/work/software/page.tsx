"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";

export default function SoftwareDevelopment() {
  const projects = [
    {
      title: "GenreQ",
      description: "A music genre exploration app, showcasing front-end development and API integration.",
      url: "https://genre-q.vercel.app/",
      github: "https://github.com/MaryBruff/genre-q",
      thumbnail: "/genre_q.gif",
    },
    {
      title: "DoughFin",
      description: "A financial tracking application, demonstrating full-stack development skills.",
      url: "https://dough-fin-fe-part-2.vercel.app/",
      github: "https://github.com/MaryBruff/DoughFin_FE",
      githubBE: "https://github.com/DoughFin/DoughFin_BE",
      thumbnail: "/doughfin_image.png",
    },
    {
      title: "Rock Paper Scissors Solo",
      description: "A solo game implementation, showcasing JavaScript logic and interactive UI.",
      url: "https://github.com/MaryBruff/Rock-Paper-Scissors-Solo",
      github: "https://github.com/MaryBruff/Rock-Paper-Scissors-Solo",
      thumbnail: "/Matrix_Rock_Paper_Scissors.gif",
    },
    {
      title: "What's Cookin",
      description: "A recipe management app, highlighting front-end development and data handling.",
      url: "https://github.com/MaryBruff/whats-cookin",
      github: "https://github.com/MaryBruff/whats-cookin",
      thumbnail: "/Whats_cookin.gif",
    },
    {
      title: "Self Care Center",
      description: "A wellness app, demonstrating user-focused design and interactivity.",
      url: "https://github.com/MaryBruff/self-care-center",
      github: "https://github.com/MaryBruff/self-care-center",
      thumbnail: "/Self_Care_Center.gif",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <Window title="Software Development">
          <p className="mb-4 portfolio-font">
            Projects showcasing skills in software development, including front-end, full-stack, and interactive applications.
          </p>
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
              asChild
            >
              <Link href="https://github.com/MaryBruff" target="_blank">
                View My GitHub Profile
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font"
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
                      className="w-full h-auto mb-2 rounded-lg border-2 border-pink-500"
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
                    <Link href={project.github} target="_blank">
                      GitHub (FE)
                    </Link>
                  </Button>
                  {project.githubBE && (
                    <Button
                      variant="outline"
                      className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
                      asChild
                    >
                      <Link href={project.githubBE} target="_blank">
                        GitHub (BE)
                      </Link>
                    </Button>
                  )}
                  {project.url.includes("vercel") && (
                    <Button
                      variant="outline"
                      className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 portfolio-font"
                      asChild
                    >
                      <Link href={project.url} target="_blank">
                        Open Live Demo
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