import Window from "@/components/Window";

export default function MyJams() {
  return (
    <Window title="Currently Listenin' To" className="max-w-3xl mx-auto">
      <div className="bg-accent border border-foreground p-2 rounded-lg">
        <div className="w-full max-w-xl mx-auto aspect-[350/100] overflow-hidden rounded-md">
          <iframe
            className="w-full h-full"
            src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=novatorem&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
            title="Spotify Now Playing"
            loading="lazy"
          />
        </div>
      </div>
    </Window>
  );
}
