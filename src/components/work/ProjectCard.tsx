import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getYouTubeThumbnail } from "./utils";

interface Project {
  title: string;
  description: string;
  url: string;
  github?: string | null;
  githubBE?: string | null;
  thumbnail: string;
  isVideo?: boolean;
}

interface ProjectCardProps {
  project: Project;
  isDev?: boolean;
}

export default function ProjectCard({ project, isDev = false }: ProjectCardProps) {
  const { title, description, url, github, githubBE, thumbnail, isVideo = false } = project;
  const effectiveThumbnail = isVideo ? getYouTubeThumbnail(url) || thumbnail : thumbnail;
  const mainButtonText = isVideo ? "View Video" : "View Project";
  const hasMainButton = !!url && !isDev; // Only show main button for non-dev projects or videos
  const hasGithub = !!github;
  const hasGithubBE = !!githubBE;
  const githubLabel = isDev ? "GitHub (FE)" : "View GitHub";
  const githubBELabel = "GitHub (BE)";

  return (
    <fieldset className="px-2">
        <legend>
          <Link href={url} target="_blank" className="text-lg hover:underline">
            {title}
          </Link>
        </legend>
      <CardContent className="px-2">
        <Link href={url} target="_blank">
          <div className="relative w-full h-48 overflow-hidden rounded-lg border-2 border-chart-2 mb-4">
            <Image src={effectiveThumbnail} alt={title} fill className="object-cover" />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-chart-2 opacity-80 hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>
        </Link>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 px-2 pb-4">
        {hasMainButton && (
          <Button>
            <Link href={url} target="_blank">
              {mainButtonText}
            </Link>
          </Button>
        )}
        {hasGithub && (
          <Button>
            <Link href={github} target="_blank">
              {githubLabel}
            </Link>
          </Button>
        )}
        {hasGithubBE && (
          <Button>
            <Link href={githubBE} target="_blank">
              {githubBELabel}
            </Link>
          </Button>
        )}
      </CardFooter>
    </fieldset>
  );
}