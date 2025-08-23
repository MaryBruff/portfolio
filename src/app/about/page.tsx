import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Window from "@/components/Window";
import Image from "next/image";
import Link from "next/link";
import EmailCopy from "@/components/EmailCopy";
import Guestbook from "@/components/Guestbook";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-700 to-pink-900 text-white relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <Window title="About Me">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h1 className="text-2xl font-bold animate-blink text-pink-300 font-comic-sans mb-4">
                    Mary Bruff
                  </h1>
                  <Image
                    src="/Me_Toon.png"
                    alt="Profile Picture"
                    width={256}
                    height={256}
                    className="w-full max-w-64 h-auto mx-auto rounded-lg shadow-md border-2 border-pink-500"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="https://dl.glitter-graphics.com/pub/745/745455rvacxjsot2.gif"
                    alt="Online Now"
                    width={90}
                    height={90}
                    unoptimized
                    className="mx-auto"
                  />
                  <div className="text-sm space-y-2 font-comic-sans">
                    <p>&quot;lala&quot;</p>
                    <p>United States</p>
                    <p>
                      Last active: <br />
                      <time className="opacity-80">4 months ago</time>
                    </p>
                  </div>
                  <p className="text-sm font-comic-sans">
                    <b>Mood:</b> Groovy :-)
                  </p>
                </div>
              </div>
            </Window>

            <Window title="My Jams">
              <div className="w-full h-[200px]">
                <iframe
                  src="https://spotify-github-profile.kittinanx.com/api/view?uid=poptartmarbear&cover_image=true&theme=default&show_offline=false&background_color=ff69b4&interchange=false&bar_color=ff64da"
                  className="w-full h-full rounded-lg border-2 border-pink-500"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </Window>

            <Window title="Mary's Interests">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold w-1/4 font-comic-sans">Skills</TableCell>
                    <TableCell className="font-comic-sans">
                      Leadership, Software Development, Collaboration & Teamwork, Data Analysis & Quality Management, Technical Communication & Documentation
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Music</TableCell>
                    <TableCell className="font-comic-sans">
                      Check out my tunes on{' '}
                      <Link
                        href="https://open.spotify.com/user/poptartmarbear"
                        target="_blank"
                        className="underline hover:text-pink-300 transition"
                      >
                        Spotify
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="https://www.youtube.com/@MarbearFM"
                        target="_blank"
                        className="underline hover:text-pink-300 transition"
                      >
                        YouTube
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Movies</TableCell>
                    <TableCell className="font-comic-sans">
                      See my favorite films on{' '}
                      <Link
                        href="https://letterboxd.com/Poptartmarbear/"
                        target="_blank"
                        className="underline hover:text-pink-300 transition"
                      >
                        Letterboxd
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Activities</TableCell>
                    <TableCell className="font-comic-sans">Music, Films, Video Games, Always Learning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Books</TableCell>
                    <TableCell className="font-comic-sans"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Heroes</TableCell>
                    <TableCell className="font-comic-sans"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Window>

            <Window title="MySpace Top 3 (Links)">
              <ul className="space-y-3">
                <li className="flex items-center justify-between border border-pink-500 p-2 rounded-lg">
                  <span className="flex items-center gap-2 font-comic-sans"><span>💼</span>LinkedIn</span>
                  <Link
                    href="https://www.linkedin.com/in/mary-bruff/"
                    target="_blank"
                    className="underline hover:text-pink-300 transition font-comic-sans"
                  >
                    /marybruff
                  </Link>
                </li>
                <li className="flex items-center justify-between border border-pink-500 p-2 rounded-lg">
                  <span className="flex items-center gap-2 font-comic-sans"><span>💻</span>GitHub</span>
                  <Link
                    href="https://github.com/MaryBruff"
                    target="_blank"
                    className="underline hover:text-pink-300 transition font-comic-sans"
                  >
                    @MaryBruff
                  </Link>
                </li>
                <li className="flex items-center justify-between border border-pink-500 p-2 rounded-lg">
                  <span className="flex items-center gap-2 font-comic-sans"><span>📮</span>Email</span>
                  <EmailCopy email="marybruff5@gmail.com" />
                </li>
              </ul>
            </Window>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Window title="Work">
              <p className="mb-4 font-comic-sans">Explore selected work by category.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work/software">Software Development</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work/ui-ux">UI/UX & Content Strategy</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work/multimedia">Multimedia & Motion</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work/creative">Creative & Performance</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work/marketing">Marketing & Strategy</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/resume">Resume</Link>
                </Button>
                <Button variant="outline" className="border-pink-500 hover:bg-pink-300 hover:text-pink-950 font-comic-sans">
                  <Link href="/work">View All Work</Link>
                </Button>
              </div>
            </Window>

            <Window title="Latest Blog Entries">
              <div className="space-y-2">
                <h4 className="text-lg font-bold font-comic-sans">
                  Mary&apos;s Latest Blog Entries [
                  <Link
                    href="https://mbruff.wixsite.com/letstalkabooutmusic"
                    target="_blank"
                    className="underline hover:text-pink-300 transition"
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
                      className="underline hover:text-pink-300 transition font-comic-sans"
                    >
                      6 Albums to Get You into Jazz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mbruff.wixsite.com/letstalkabooutmusic/post/not-your-cliché-jangle-pop-song-recommendation-pt-1"
                      target="_blank"
                      className="underline hover:text-pink-300 transition font-comic-sans"
                    >
                      Not Your Cliché Jangle Pop Song Recommendation (Pt. 1)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mbruff.wixsite.com/letstalkabooutmusic/post/5-underrated-alternative-albums-from-the-90s"
                      target="_blank"
                      className="underline hover:text-pink-300 transition font-comic-sans"
                    >
                      5 Underrated Alternative Albums from the 90s
                    </Link>
                  </li>
                </ul>
              </div>
            </Window>

            <Window title="My Education">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Degree:</TableCell>
                    <TableCell className="font-comic-sans">Bachelor of Science</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Major:</TableCell>
                    <TableCell className="font-comic-sans">Technical Communication</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Minor:</TableCell>
                    <TableCell className="font-comic-sans">Digital Art</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold font-comic-sans">Graduation:</TableCell>
                    <TableCell className="font-comic-sans">2021</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Window>

            <Window title="Guestbook">
              <Guestbook />
            </Window>
          </div>
        </div>
      </div>
    </main>
  );
}