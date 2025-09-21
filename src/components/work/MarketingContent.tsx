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
      title: "Senior Citizens Marketing",
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
    {
      title: "NoAgenda Content Strategy",
      description: "A strategic content plan for a popular podcast, enhancing user engagement.",
      url: "https://portfolium.com/entry/content-strategy-for-noagenda-podcast",
      thumbnail: "/Content NoAgenda.png",
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