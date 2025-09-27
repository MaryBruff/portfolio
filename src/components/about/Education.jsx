import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function Education() {
  return (
    <div>
      <div className="heading bg-pink-400 text-white text-sm font-bold px-2 py-1">
        <h5>Mary Bruff's Schools</h5>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">University:</TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">
              <Link href="https://www.msudenver.edu/" target="_blank" rel="noopener noreferrer" className="underline">
                MSU Denver
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">Degree:</TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">Bachelor of Science</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">Major:</TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">Technical Communication</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">Minor:</TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">Digital Art</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">Graduation:</TableCell>
            <TableCell className="whitespace-normal bg-pink-200 break-words">2021</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
