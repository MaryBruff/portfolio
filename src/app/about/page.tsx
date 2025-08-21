import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";
import EmailCopy from "@/components/EmailCopy";
import Guestbook from "@/components/Guestbook";

export default function About() {
  return (
    <main className="min-h-screen bg-myspace-bg relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <div className="grid grid-cols-2 gap-6 items-start">
          {/* Left Column (profile pic, music, and interests) */}
          <div className="space-y-6 col-span-2 sm:col-span-1">
            <Window title="About Me" className="myspace-window">
              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  <h1 className="text-2xl font-bold mb-3 animate-blink text-myspace-text">
                    Mary Bruff
                  </h1>
                  <Image
                    src="/Me_Toon.png"
                    alt="Profile Picture"
                    width={256}
                    height={256}
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                <div className="my-auto grid grid-cols-1 gap-4">
                  <Image
                    src="https://dl.glitter-graphics.com/pub/745/745455rvacxjsot2.gif"
                    alt="Online Now"
                    width={90}
                    height={90}
                    unoptimized
                  />
                  <div className="details text-myspace-text">
                    <p>&quot;lala&quot;</p>
                    <p>United States</p>
                    <p>Last active: <br />
                      <time className="ago" data-timestamp="1744433186" style={{ opacity: 1 }}>
                        4 months ago
                      </time>
                    </p>
                  </div>
                  <div className="mood text-myspace-text">
                    <p><b>Mood:</b> Groovy :-)</p>
                  </div>
                </div>
              </div>
            </Window>
            <Window title="My Jams" className="myspace-window">
              <div className="w-full h-[200px]">
                <iframe
                  src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=default&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
                  className="w-full h-full max-w-full"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />   
              </div>
            </Window>
            <Window title="Mary's Interests" className="myspace-window">
              <div className="table-section">
                <table className="w-full border-collapse text-myspace-text" cellSpacing="3" cellPadding="3">
                  <tbody>
                    <tr>
                      <td className="border border-myspace-accent p-2 w-1/4">
                        <p><b>Skills</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p>
                          Leadership, Software Development, Collaboration & Teamwork, Data Analysis & Quality Management, Technical Communication & Documentation
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-myspace-accent p-2">
                        <p><b>Music</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p>
                          Check out my tunes on{' '}
                          <Link
                            href="https://open.spotify.com/user/poptartmarbear"
                            target="_blank"
                            className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                          >
                            Spotify
                          </Link>{' '}
                          and{' '}
                          <Link
                            href="https://www.youtube.com/@MarbearFM"
                            target="_blank"
                            className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                          >
                            YouTube
                          </Link>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-myspace-accent p-2">
                        <p><b>Movies</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p>
                          See my favorite films on{' '}
                          <Link
                            href="https://letterboxd.com/Poptartmarbear/"
                            target="_blank"
                            className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                          >
                            Letterboxd
                          </Link>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-myspace-accent p-2">
                        <p><b>Activities</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p>
                          Music, Films, Video Games, Always Learning
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-myspace-accent p-2">
                        <p><b>Books</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-myspace-accent p-2">
                        <p><b>Heroes</b></p>
                      </td>
                      <td className="border border-myspace-accent p-2">
                        <p></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Window>
            <Window title="MySpace Top 3 (Links)" className="myspace-window h-full">
              <ul className="space-y-3 text-myspace-text">
                <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                  <span className="flex items-center gap-2"><span>💼</span>LinkedIn</span>
                  <Link href="https://www.linkedin.com/in/mary-bruff/" target="_blank"
                    className="underline decoration-dashed underline-offset-4 hover:opacity-90">
                    /marybruff
                  </Link>
                </li>
                <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                  <span className="flex items-center gap-2"><span>💻</span>GitHub</span>
                  <Link href="https://github.com/MaryBruff" target="_blank"
                    className="underline decoration-dashed underline-offset-4 hover:opacity-90">
                    @MaryBruff
                  </Link>
                </li>
                <li className="flex items-center justify-between border border-myspace-accent p-2 rounded">
                  <span className="flex items-center gap-2"><span>📮</span>Email</span>
                  <EmailCopy email="marybruff5@gmail.com" />
                </li>
              </ul>
            </Window>
          </div>

          {/* Right Column (main content) */}
          <div className="space-y-6 col-span-2 sm:col-span-1">
            <Window title="Latest Blog Entries" className="myspace-window">
              <div className="blog-preview text-myspace-text">
                <h4 className="text-lg font-bold mb-2">
                  Mary&apos;s Latest Blog Entries [
                  <Link
                    href="https://mbruff.wixsite.com/letstalkabooutmusic"
                    target="_blank"
                    className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                  >
                    View Blog
                  </Link>
                  ]
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Link
                      href="https://mbruff.wixsite.com/letstalkabooutmusic/post/6-albums-to-get-you-into-jazz"
                      target="_blank"
                      className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                    >
                      6 Albums to Get You into Jazz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mbruff.wixsite.com/letstalkabooutmusic/post/not-your-cliché-jangle-pop-song-recommendation-pt-1"
                      target="_blank"
                      className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                    >
                      Not Your Cliché Jangle Pop Song Recommendation (Pt. 1)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mbruff.wixsite.com/letstalkabooutmusic/post/5-underrated-alternative-albums-from-the-90s"
                      target="_blank"
                      className="underline decoration-dashed underline-offset-4 hover:opacity-90"
                    >
                      5 Underrated Alternative Albums from the 90s
                    </Link>
                  </li>
                </ul>
              </div>
            </Window>
            <Window title="My Education" className="myspace-window">
              <table className="w-full border-collapse text-myspace-text">
                <tbody>
                  <tr>
                    <td className="border border-myspace-accent p-2">Degree:</td>
                    <td className="border border-myspace-accent p-2">Bachelor of Science</td>
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
            <Window title="Guestbook" className="myspace-window">
              <Guestbook />
            </Window>
          </div>
        </div>
      </div>
    </main>
  );
}