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
      thumbnail: "/LookBook.png",
    },
    {
      title: "Skincare Website Concept & Design",
      description: "A user-focused website design with personas, audience analysis, and multi-device interfaces.",
      url: "https://portfolium.com/entry/skincare-website-concept-design",
      thumbnail: "/skincare_website.png",
    },
  ];

  return (
    <PortfolioCategory
      windowTitle="Visual Design"
      introText="Highlighting projects in visual storytelling, design principles, and creative communication across multiple mediums."
      projects={projects}
    />
  );
}