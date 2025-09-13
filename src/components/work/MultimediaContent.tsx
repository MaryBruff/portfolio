import PortfolioCategory from "./ProjectCategory";

interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  isVideo?: boolean;
}

export default function MultimediaContent() {
  const projects: Project[] = [
    {
      title: "Adobe After Effects Motion Graphics Reel",
      description: "Broadcast-ready videos featuring visual effects, animated titles, and dynamic motion graphics using Adobe After Effects.",
      url: "https://youtu.be/Vck7ggcrFyY?si=6wlzvhmTbe2M9Y4y",
      thumbnail: "/thumbnails/multimedia-project-2.png",
      isVideo: true,
    },
    {
      title: "Metro Caring On-Site Training",
      description: "Engaging training videos for Metro Caring, focusing on community outreach and support.",
      url: "https://youtu.be/wXUrLi4q8es?si=zO3yn1rE1shgSkFS",
      thumbnail: "/thumbnails/multimedia-project-3.png",
      isVideo: true,
    },
    {
      title: "Metro Caring Zoom Training Video",
      description: "Engaging training videos for Metro Caring, focusing on community outreach and support.",
      url: "https://youtu.be/OdmXvqIyn4c?si=QFPzf0SfPH5D18xT",
      thumbnail: "/thumbnails/multimedia-project-4.png",
      isVideo: true,
    },
    {
      title: "1950’s Depression PSA for 2019",
      description: "A modern PSA on depression using reimagined 1950s footage to highlight its ongoing relevance and need for awareness.",
      url: "https://youtu.be/i3pcaunZCkM?si=sTSKR5kW-gfJHJ3J",
      thumbnail: "/placeholder.png",
      isVideo: true,
    },
  ];

  return (
    <PortfolioCategory
      windowTitle="Multimedia & Motion"
      introText="Showcasing dynamic multimedia projects with visual effects, motion graphics, and engaging video content."
      projects={projects}
    />
  );
}