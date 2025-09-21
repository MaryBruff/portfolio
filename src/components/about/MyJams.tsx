import Window from "@/components/Window";

export default function MyJams() {
  return (
    <div>
      <div className="border-2 border-blue-500 bg-white text-sm h-[134px]">
        <div className="heading bg-blue-500 text-white text-sm font-bold px-2 py-1">
          <h5>Currently Listening To</h5>
        </div>
        <div className="w-full max-w-xl mx-auto aspect-[350/100] overflow-hidden rounded-md">
          <iframe
            className="w-full h-full"
            src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=novatorem&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
            title="Spotify Now Playing"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
