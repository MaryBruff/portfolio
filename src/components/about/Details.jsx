  import Window from "@/components/Window";
  import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

  export default function Details() {
    return (
      <div>
        <div className="heading bg-pink-400 text-white text-sm font-bold px-2 py-1">
          <h5>Mary Bruff's Details</h5>
        </div>
        <Table>
          <TableBody>
            {/* Here For */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Here For:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                Networking, Work, Collaboration, Creative Projects
              </TableCell>
            </TableRow>
            {/* Pronouns */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Pronouns:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                She/Her
              </TableCell>
            </TableRow>
            {/* Currently Based */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Currently Based:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                Remote · Pacific Time • Mountain Time
              </TableCell>
            </TableRow>
            {/* Preferred Work Environment */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Preferred Setting:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                Remote
              </TableCell>
            </TableRow>
            {/* Hometown */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Hometown:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                Denver, Colorado
              </TableCell>
            </TableRow>
            {/* Zodiac Sign */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Zodiac Sign:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words text-center">
                <img
                  src="https://dl.glitter-graphics.com/pub/596/596731c2bdvnziy9.gif"
                  alt="Libra Glitter Banner"
                  className="mx-auto mb-3 w-full max-w-[360px] max-h-40 object-contain sm:max-h-none"
                />
              </TableCell>
            </TableRow>
            {/* Coffee Order */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Coffee Order:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                Yes, please. 
              </TableCell>
            </TableRow>
            {/* Fun Fact */}
            <TableRow>
              <TableCell className="font-bold w-1/4 bg-pink-300 text-pink-800 whitespace-normal break-words">
                Fun Fact:
              </TableCell>
              <TableCell className="whitespace-normal bg-pink-200 break-words">
                I finished 1001 Albums to Listen to Before You Die
                  <img
              src="https://dl.glitter-graphics.com/pub/1134/1134087bc5z04t2jd.jpg"
              alt="Stacks of albums"
              className="mx-auto mb-3 w-full max-w-[150px] max-h-40 object-contain sm:max-h-none"
            />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
