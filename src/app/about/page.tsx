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

   {/* Skills Section Window */}
         <Window title="My Skills" className="myspace-window">
         <ul className="list-disc pl-5 mb-4">
            <li className="text-lg">UI/UX Design</li>
            <li className="text-lg">Software Development</li>
            <li className="text-lg">Multimedia Editing</li>
            <li className="text-lg">Marketing Strategy</li>
            <li className="text-lg">Data Analytics</li>
         </ul>
         <p className="text-sm animate-blink">Mastering the art of retro vibes!</p>
         </Window>

   {/* Education Section Window */}
         <Window title="My Education" className="myspace-window">
         <table className="w-full border-collapse">
            <tbody>
               <tr>
               <td className="border border-myspace-accent p-2">Degree:</td>
               <td className="border border-myspace-accent p-2">B.S. in Design & Tech</td>
               </tr>
               <tr>
               <td className="border border-myspace-accent p-2">School:</td>
               <td className="border border-myspace-accent p-2">Retro University</td>
               </tr>
               <tr>
               <td className="border border-myspace-accent p-2">Grad Year:</td>
               <td className="border border-myspace-accent p-2">2023</td>
               </tr>
            </tbody>
         </table>
         </Window>

   {/* Activities Section Window */}
         <Window title="My Activities" className="myspace-window">
         <ul className="list-disc pl-5 mb-4">
            <li className="text-lg">Retro Web Design Club</li>
            <li className="text-lg">Multimedia Jam Sessions</li>
            <li className="text-lg">Coding Bootcamp Volunteer</li>
         </ul>
         <p className="text-sm animate-blink">Keeping it fun and funky!</p>
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