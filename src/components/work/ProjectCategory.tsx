import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import * as React from "react";

interface Project {
  title: string;
  description: string;
  url: string;
  github?: string | null;
  githubBE?: string | null;
  thumbnail: string;
  isVideo?: boolean;
}

interface PortfolioCategoryProps {
  windowTitle: string;
  introText: string;
  projects: Project[];    
  githubProfile?: string;
  isDev?: boolean;
  children?: React.ReactNode; 
}

export default function PortfolioCategory({
  windowTitle,
  introText,
  projects,
  githubProfile,
  isDev = false,
  children,
}: PortfolioCategoryProps) {
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <div className="tabpanel w-full max-w-full min-w-0 px-2 sm:px-3 md:px-4 space-y-3 sm:space-y-4 overflow-x-hidden">
      <div className="flex sm:justify-start flex-wrap items-center gap-4 mb-2">
        <h4 className="font-bold break-words">{windowTitle}</h4>
        {githubProfile && (
          <div>
            <Link href={githubProfile} target="_blank">
              <button>View My GitHub Profile</button>
            </Link>
          </div>
        )}
      </div>

      {introText && <p className="mb-2">{introText}</p>}

      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isDev={isDev} />
          ))}
        </div>
      ) : (
        children ?? null
      )}
    </div>
  );
}
