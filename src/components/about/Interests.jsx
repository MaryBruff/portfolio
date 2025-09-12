import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Interests() {
  return (
    <Window title="Mary's Interests" bodyClassName="max-h-[400px] overflow-y-auto overflow-x-hidden pr-2">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold w-1/4 portfolio-font">
              Soft Skills
            </TableCell>
            <TableCell className="portfolio-font">
              Leadership, Collaboration & Teamwork, Data
              Analysis & Quality Management, Technical Communication &
              Documentation
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 portfolio-font">
              Tech Skills
            </TableCell>
            <TableCell className="portfolio-font">
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold portfolio-font">Music</TableCell>
            <TableCell className="portfolio-font">
              Check out my tunes on{" "}
              <Link
                href="https://open.spotify.com/user/poptartmarbear"
                target="_blank"
                className="underline hover:text-accent transition"
              >
                Spotify
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.youtube.com/@MarbearFM"
                target="_blank"
                className="underline hover:text-accent transition"
              >
                YouTube
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold portfolio-font">Movies</TableCell>
            <TableCell className="portfolio-font">
              See my favorite films on{" "}
              <Link
                href="https://letterboxd.com/Poptartmarbear/"
                target="_blank"
                className="underline hover:text-accent transition"
              >
                Letterboxd
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Activities</TableCell>
            <TableCell>Music, Films, Video Games, Always Learning</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold portfolio-font">Books</TableCell>
            <TableCell>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="portfolio-font text-lg">
                      Currently Reading
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <Image
                      src="/Unicorn.png" // Replace with actual book cover image
                      alt="Currently Reading Book Cover"
                      width={80}
                      height={120}
                      className="object-cover"
                    />
                    <div>
                      <p className="portfolio-font font-medium">
                      The Killing of the Unicorn: Dorothy Stratten
                      </p>
                      {/* <p className="portfolio-font text-sm text-muted-foreground">
                        A sci-fi epic about politics, religion, and survival.
                      </p> */}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="portfolio-font text-lg">
                      Up Next
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <Image
                      src="/Harpo.jpg" 
                      alt="Up Next Book Cover"
                      width={80}
                      height={120}
                      className="object-cover"
                    />
                    <div>
                      <p className="portfolio-font font-medium">
                        Harpo Speaks!
                      </p>
                      {/* <p className="portfolio-font text-sm text-muted-foreground">
                        A thrilling tale of a lone astronaut's mission.
                      </p> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Heroes</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Window>
  );
}

