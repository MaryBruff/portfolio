import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

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
}

export default function PortfolioCategory({
  windowTitle,
  introText,
  projects,
  githubProfile,
  isDev = false,
}: PortfolioCategoryProps) {
  return (
    <div className="tabpanel">
      <div className="flex justify-start items-center gap-4 mb-2">
        <h4 className="font-bold">{windowTitle}</h4>
        {githubProfile && (
          <div>
            <Link href={githubProfile} target="_blank">
              <button>View My GitHub Profile</button>
            </Link>
          </div>
        )}
      </div>
      <p className="mb-2">{introText}</p>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isDev={isDev} />
        ))}
      </div>
    </div>
  );
}
