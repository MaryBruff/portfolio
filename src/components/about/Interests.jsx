import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Interests() {
  return (
    <Window
      title="Mary's Interests"
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-ring whitespace-normal break-words">
              Soft Skills
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
              Leadership, Collaboration & Teamwork, Data Analysis & Quality
              Management, Technical Communication & Documentation
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-ring whitespace-normal break-words">
              Tech Skills
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-ring whitespace-normal break-words">
              Music
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
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
            <TableCell className="font-bold bg-ring whitespace-normal break-words">
              Movies
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
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
            <TableCell className="font-bold bg-ring whitespace-normal break-words">
              Activities
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
              Music, Films, Video Games, Always Learning
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-ring whitespace-normal break-words">
              Books
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words">
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Currently Reading
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <Image
                      src="/Unicorn.png"
                      alt="Currently Reading Book Cover"
                      width={80}
                      height={120}
                      className="object-cover"
                    />
                    <div>
                      <p className="font-medium">
                        The Killing of the Unicorn: Dorothy Stratten
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
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
                      <p className="font-medium">Harpo Speaks!</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-ring whitespace-normal break-words">
              Heroes
            </TableCell>
            <TableCell className="whitespace-normal bg-accent break-words"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Window>
  );
}
