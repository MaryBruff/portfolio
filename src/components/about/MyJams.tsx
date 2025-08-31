import Window from "@/components/Window";

export default function MyJams() {
  return (
    <Window title="My Jams">
      <div className="w-full h-[200px]">
        <iframe
          src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=natemoo-re&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Window>
  );
}