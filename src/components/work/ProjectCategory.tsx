import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import Window from "../Window"; // Adjust path if needed (assuming Window is in a parent dir)

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
  bodyClassName?: string; // New: Pass to Window
  footerContent?: React.ReactNode; // New: Render at bottom
}

export default function PortfolioCategory({
  windowTitle,
  introText,
  projects,
  githubProfile,
  isDev = false,
  bodyClassName = "",
  footerContent,
}: PortfolioCategoryProps) {
  return (
    <Window title={windowTitle} bodyClassName={bodyClassName}>
      <div className="font-sans relative"> {/* relative here ensures positioning context if needed, but bodyClassName handles it */}
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
        {footerContent} {/* Render the image here—will be positioned absolutely via CSS */}
      </div>
    </Window>
  );
}