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
    <div className="font-sans">
      <h2 className="text-2xl font-bold mb-4">{windowTitle}</h2>
      <p className="mb-6 text-lg">{introText}</p>
      {githubProfile && (
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            asChild
          >
            <Link href={githubProfile} target="_blank">
              View My GitHub Profile
            </Link>
          </Button>
        </div>
      )}
      <div className={`grid ${isDev ? "p-2 grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2"} gap-6`}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isDev={isDev} />
        ))}
      </div>
    </div>
  );
}