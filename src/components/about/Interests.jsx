import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    src: "/Unicorn.png",
    alt: "Currently Reading Book Cover",
  },
  {
    src: "/Harpo.jpg",
    alt: "Up Next Book Cover",
  },
];

export default function Interests() {
  return (
    <div>
      <div className="heading bg-pink-400 text-white text-sm font-bold px-2 py-1">
        <h5>Mary Bruff's Interests</h5>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
              Soft Skills
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              Leadership, Collaboration & Teamwork, Data Analysis & Quality
              Management, Technical Communication & Documentation
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
              Tech Skills
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Music
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
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
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Movies
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
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
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Activities
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              Music, Films, Video Games, Always Learning
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Books
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              <div className="grid grid-cols-2 gap-2">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
                      src={book.src}
                      alt={book.alt}
                      width={80}
                      height={120}
                      className="w-20 h-30 object-contain"
                    />
                  </div>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Heroes
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              Harpo, Groucho, Chico, Zeppo, and Gummo
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
