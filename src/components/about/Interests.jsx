import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function Interests() {
  return (
    <Window title="Mary's Interests">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold w-1/4 portfolio-font">
              Skills
            </TableCell>
            <TableCell className="portfolio-font">
              Leadership, Software Development, Collaboration & Teamwork, Data
              Analysis & Quality Management, Technical Communication &
              Documentation
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
            <TableCell>Books</TableCell>
            <TableCell></TableCell>
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