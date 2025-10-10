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
      title: "Website Concept & Design",
      description: "A user-focused website design with personas, audience analysis, and multi-device interfaces.",
      url: "https://docs.google.com/document/d/1Kp6Bu1cDbxMPF4FqlaqBMHhZYx1hAyG8/edit?usp=sharing&ouid=104937312066702883336&rtpof=true&sd=true",
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