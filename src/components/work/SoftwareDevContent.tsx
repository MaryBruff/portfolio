import PortfolioCategory from "./ProjectCategory";

interface Project {
  title: string;
  description: string;
  url: string;
  github?: string | null;
  githubBE?: string | null;
  thumbnail: string;
}

export default function SoftwareDevContent() {
  const projects: Project[] = [
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
    <PortfolioCategory
      windowTitle="Software Development"
      introText="Projects showcasing skills in software development, including front-end, full-stack, and interactive applications."
      projects={projects}
      githubProfile="https://github.com/MaryBruff"
      isDev={true}
    />
  );
}