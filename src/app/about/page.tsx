   import Window from "@/components/Window";
   import Image from "next/image";

   export default function About() {
   return (
      <main className="min-h-screen bg-myspace-bg relative">
         <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
         <div className="absolute top-4 left-4 z-10">
            <Window title="My Profile Pic" className="myspace-window w-64">
               <Image
               src="/Me_Toon.png"
               alt="Profile Picture"
               width={256}
               height={256}
               className="w-64 h-64 rounded-full border-[3px] border-myspace-accent mx-auto"
               />
            </Window>
         </div>

         {/* Content starts below profile pic with margin */}
         <div className="mt-72 md:mt-48"> {/* Adjust margin to avoid overlap */}
            <div className="grid grid-cols-1 md:grid-cols-[320px,1fr] gap-6 items-start">
               {/* Left Column (sidebar) */}
               <div className="space-y-6">
               <Window title="My Skills" className="myspace-window">
                  <ul className="list-disc pl-5 space-y-1 text-myspace-text">
                     <li className="text-lg">Leadership</li>
                     <li className="text-lg">Software Development</li>
                     <li className="text-lg">Collaboration & Teamwork</li>
                     <li className="text-lg">Data Analysis & Quality Management</li>
                     <li className="text-lg">Technical Communication & Documentation</li>
                  </ul>
                     <a
      href="https://www.glitter-graphics.com"
      target="_blank"
      rel="noopener noreferrer"
   >
      <img
         src="https://dl7.glitter-graphics.net/pub/570/570007a6azac7wdy.gif"
         alt="Glitter Graphics"
         width={90}
         height={90}
         style={{ border: 0 }}
      />
   </a>
                  {/* <p className="text-sm animate-blink text-myspace-text mt-2">
                     Mastering the art of retro vibes!
                  </p> */}
               </Window>

               <Window title="My Education" className="myspace-window">
                  <table className="w-full border-collapse text-myspace-text">
                     <tbody>
                     <tr>
                        <td className="border border-myspace-accent p-2">Degree:</td>
                        <td className="border border-myspace-accent p-2">Bachelor of Science </td>
                     </tr>
                     <tr>
                        <td className="border border-myspace-accent p-2">Major:</td>
                        <td className="border border-myspace-accent p-2">Technical Communication</td>
                     </tr>
                     <tr>
                        <td className="border border-myspace-accent p-2">Minor:</td>
                        <td className="border border-myspace-accent p-2">Digital Art</td>
                     </tr>
                           <tr>
                        <td className="border border-myspace-accent p-2">Graduation:</td>
                        <td className="border border-myspace-accent p-2">2021</td>
                     </tr>
                     </tbody>
                  </table>
               </Window>

               <Window title="My Activities" className="myspace-window">
                  <ul className="list-disc pl-5 space-y-1 mb-2 text-myspace-text">
                     <li className="text-lg">Music</li>
                     <li className="text-lg">Films</li>
                     <li className="text-lg">Video Games</li>
                     <li className="text-lg">Always Learning</li>
                  </ul>
               </Window>
               </div>

               {/* Right Column (main) */}
               <div className="space-y-6">
               <Window title="About Me" className="myspace-window">
                  <h1 className="text-2xl font-bold mb-3 animate-blink text-myspace-text">
                     Hey, I&apos;m Mary!
                  </h1>
                  <p className="mb-4 text-myspace-text">
                     Insert generic text here: Generic about me text goes here.
                  </p>
                  <table className="w-full border-collapse text-myspace-text">
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

               <Window title="My Jams" className="myspace-window">
                  <div className="w-full h-[360px]">
                     <iframe
                     src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=default&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
                     className="w-full h-full max-w-full"
                     allowFullScreen
                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     loading="lazy"
                     />
                  </div>
               </Window>
               </div>
            </div>
         </div>
         </div>
      </main>
   );
   }