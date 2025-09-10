import Window from "@/components/Window";

export default function MyJams() {
  return (
    <Window title="My Jams">
      <div className="flex items-center justify-between bg-accent border border-foreground p-2 rounded-lg">
        <iframe
          src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=novatorem&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
          height={100}
        />
      </div>
    </Window>
  );
}