import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    src: "/Harpo.jpg",
    alt: "Currently Reading Book Cover",
    label: "Currently Reading",
    title: "Harpo Speaks! — Harpo Marx",
  },
  {
    src: "/rebecca.jpg",
    alt: "Up Next Book Cover",
    label: "Up Next",
    title: "Rebecca — Daphne du Maurier",
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
              <img
                src="https://dl.glitter-graphics.com/pub/1073/1073019xvx8c2fyao.gif"
                alt="CD icon"
                className="inline-block w-6 h-6 mr-2 align-middle"
              />
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
                href="https://www.youtube.com/@MaryBruff"
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

          {/* Books Section */}
          <TableRow>
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Books
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-6 mt-1">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <p className="font-semibold text-pink-800 mb-1 text-xs sm:text-sm leading-tight">
                      {book.label}
                    </p>

                    {/* Flip card wrapper */}
                    <div className="group [perspective:800px]">
                      <div className="relative w-[90px] h-[135px] sm:w-[100px] sm:h-[150px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front (cover) */}
                        <div className="absolute inset-0 overflow-hidden border border-pink-300 rounded-sm shadow-sm bg-white [backface-visibility:hidden]">
                          <Image
                            src={book.src}
                            alt={book.alt}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                        </div>

                        {/* Back (title) */}
                        <div className="absolute inset-0 border border-pink-300 rounded-sm shadow-sm bg-white/90 backdrop-blur-sm flex items-center justify-center px-2 text-[10px] sm:text-xs font-medium text-pink-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <span className="leading-tight">{book.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TableCell>
          </TableRow>

          {/* Heroes Section with Marx Brothers Image */}
          <TableRow>
            <TableCell className="font-bold bg-pink-300 text-pink-800 whitespace-normal break-words">
              Heroes
            </TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words text-center">
              <p className="mb-3">
                Harpo, Groucho, Chico, and Zeppo
              </p>
              <div className="flex justify-center items-center">
                <a
                  href="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/11/groucho-marx-captain-jeffrey-spaulding-harpo-marx-the-professor-chico-marx-signor-emanuel-ravelli-zeppo-marx-horatio-jamison-animal-crackers.jpg?q=50&fit=crop&w=825&dpr=1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/11/groucho-marx-captain-jeffrey-spaulding-harpo-marx-the-professor-chico-marx-signor-emanuel-ravelli-zeppo-marx-horatio-jamison-animal-crackers.jpg?q=50&fit=crop&w=825&dpr=1.5"
                    alt="The Marx Brothers — Harpo, Zeppo, Chico, Groucho"
                    className="rounded-md border border-pink-300 shadow-md object-cover mx-auto w-[90%] sm:w-[100%] max-w-lg h-auto hover:scale-[1.02] hover:opacity-90 transition-all duration-300"
                  />
                </a>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
