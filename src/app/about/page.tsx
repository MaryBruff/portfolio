import Window from '@/components/Window';
import Image from 'next/image';
// import Button from '@/components/Button';

export default function About() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-myspace-bg">
         {/* Profile Picture Window */}
         <Window title="My Profile Pic" className="myspace-window">
         <Image
            src="/Me_Toon.png"
            alt="Profile Picture"
            width={288}
            height={288}
            className="w-72 h-72 rounded-full border-[3px] border-myspace-accent mx-auto"
         />
         </Window>

         {/* About Me Box Window */}
         <Window title="About Me" className="myspace-window">
         <h1 className="text-2xl font-bold mb-4 animate-blink">Hey, I&apos;m Mary!</h1>
         <p className="mb-4">
            Insert generic text here: Welcome to my space! I am a designer, creator, and retro web enthusiast. I love: UI/UX, multimedia, and blasting tunes. Fun fact: I once coded a site in Comic Sans just for laughs.
         </p>
         <table className="w-full border-collapse">
            <tbody>
               <tr>
               <td className="border border-myspace-accent p-2">Mood:</td>
               <td className="border border-myspace-accent p-2">Groovy 🎸</td>
               </tr>
               <tr>
               <td className="border border-myspace-accent p-2">Currently Listening To:</td>
               <td className="border border-myspace-accent p-2">Live below!</td>
               </tr>
            </tbody>
         </table>
         </Window>

         {/* Spotify Player Window */}
         <Window title="My Jams" className="myspace-window">
         <iframe
            src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=default&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-full"
         ></iframe>
         </Window>
      </main>
   );
   }