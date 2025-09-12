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
    {
      title: "Content Strategy for NoAgenda Podcast",
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
      bodyClassName="relative" // Enables absolute positioning in Window's CardContent
      footerContent={
        <div className="absolute bottom-4 right-4 pointer-events-none z-10">
          <img
            src="https://dl.glitter-graphics.com/pub/807/807829f9klyngz3q.gif"
            alt="Decorative sparkle graphic"
            className="w-20 h-20 md:w-24 md:h-24 opacity-80 animate-pulse" // Responsive size, subtle opacity, gentle pulse for extra flair
          />
        </div>
      }
    />
  );
}