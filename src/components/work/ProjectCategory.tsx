import { Button } from "@/components/ui/button";
import Link from "next/link";
import Window from "@/components/Window";
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
    <Window title={windowTitle}>
      <p className="mb-6 portfolio-font text-lg">{introText}</p>
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
      <div className={`grid ${isDev ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} gap-6`}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isDev={isDev} />
        ))}
      </div>
    </Window>
  );
}