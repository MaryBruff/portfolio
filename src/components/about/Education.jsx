import Window from "@/components/Window";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Education() {
  return (
    <Window title="My Education">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Degree:</TableCell>
            <TableCell>Bachelor of Science</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Major:</TableCell>
            <TableCell>Technical Communication</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Minor:</TableCell>
            <TableCell>Digital Art</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Graduation:</TableCell>
            <TableCell>2021</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Window>
  );
}