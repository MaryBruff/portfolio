import PortfolioCategory from "./ProjectCategory";

interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  isVideo?: boolean;
}

export default function CreativeContent() {
  const projects: Project[] = [
    {
      title: "Out of Touch: COVID Performance Art Piece",
      description: "A performance art piece exploring isolation and social disconnect during COVID-19, reflecting on communication, self, and reality.",
      url: "https://youtu.be/bsOcefGbpsc?si=-I1DAyg4sqlZNObY",
      thumbnail: "/placeholder.png",
      isVideo: true,
    },
    {
      title: "Cigarettes After Sex - Affection Music Video",
      description: "A creative reinterpretation of Jean-Luc Godard's 'Vivre sa vie,' blending music and cinematic storytelling.",
      url: "https://youtu.be/ZhWqYnR9Tlw?si=OGeigsQCzTQtH2hu",
      thumbnail: "/placeholder.png",
      isVideo: true,
    },
    {
      title: "Human Cyborg",
      description: "Inspired by Nam June Paik, this piece blends 80s sci-fi anime nostalgia with modern news to comment on technology's impact on humanity.",
      url: "https://youtu.be/dvrLce76XOE?si=jsZIfZv4Cv10gcFc",
      thumbnail: "/placeholder.png",
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
      windowTitle="Creative & Performance"
      introText="Showcasing artistic vision through performance art, cinematic storytelling, and socially conscious multimedia projects."
      projects={projects}
    />
  );
}