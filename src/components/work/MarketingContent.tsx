import PortfolioCategory from "./ProjectCategory";

interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export default function MarketingContent() {
  const projects: Project[] = [
    {
      title: "Marketing Strategy for Senior Citizens",
      description: "A targeted marketing strategy tailored to senior citizens, emphasizing audience awareness and engagement.",
      url: "https://portfolium.com/entry/marketing-strategy-for-senior-citizens",
      thumbnail: "/senior_marketing.jpg",
    },
    {
      title: "Video Marketing Strategy Guide",
      description: "A comprehensive guide showcasing expertise in planning and executing impactful video marketing campaigns.",
      url: "https://portfolium.com/entry/video-marketing-strategy-guide",
      thumbnail: "/marketing_guide.png",
    },
  ];

  return (
    <PortfolioCategory
      windowTitle="Marketing & Strategy"
      introText="Showcasing expertise in marketing, branding, and strategic planning for targeted audience engagement."
      projects={projects}
    />
  );
}