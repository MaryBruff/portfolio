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
      title: "Riverside Cemetery Soundscape",
      description: "An immersive soundscape artwork created with the Adobe Suite, blending original Riverside Cemetery footage and layered audio design to evoke its haunting stillness.",
      url: "https://youtu.be/fL0-xu3VKuk?si=xdPa0foJDiqlfGsx",
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