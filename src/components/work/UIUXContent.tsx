import PortfolioCategory from "./ProjectCategory";

interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export default function UIUXContent() {
  const projects: Project[] = [
    {
      title: "Pitch Deck for 'The Queen'",
      description: "A storytelling-focused pitch deck with strong visual organization and design principles.",
      url: "https://portfolium.com/entry/pitch-deck-for-the-queen",
      thumbnail: "/the_queen.png",
    },
    {
      title: "Clay Script Look Book",
      description: "A visually engaging look book created using Adobe Photoshop, Illustrator, and Spark.",
      url: "https://portfolium.com/entry/clay-script-look-book",
      thumbnail: "/clay_script.png",
    },
    {
      title: "Skincare Website Concept & Design",
      description: "A user-focused website design with personas, audience analysis, and multi-device interfaces.",
      url: "https://portfolium.com/entry/skincare-website-concept-design",
      thumbnail: "/skincare_website.png",
    },
    {
      title: "Content Strategy for NoAgenda Podcast",
      description: "A strategic content plan for a popular podcast, enhancing user engagement.",
      url: "https://portfolium.com/entry/content-strategy-for-noagenda-podcast",
      thumbnail: "/placeholder.png",
    },
  ];

  return (
    <PortfolioCategory
      windowTitle="UI/UX & Content Strategy"
      introText="Showcasing skills in user experience, interface design, content strategy, and audience engagement."
      projects={projects}
    />
  );
}