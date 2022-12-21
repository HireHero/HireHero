import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  company: string,
  position: string,
  date_applied: any,
  date_of_interview: any,
  time_of_interview: any,
  notes_for_interview: any,
  interview_status: any
) {
  return { company, position, date_applied, date_of_interview, time_of_interview, notes_for_interview, interview_status };
}

const rows = [
  createData('Apple', 'Software Engineer 2', '2022-12-12', '2022-12-15', 4.0, 'went well', 'waiting'),
  createData('Google', 'Software Engineer 3', '2022-12-12', '2022-12-15', 4.3, 'went well', 'accepted'),
  createData('Amazon', 'Software Engineer 4', '2022-12-12', '2022-12-15', 6.0, 'went well', 'pending'),
  createData('Capitol One', 'Software Engineer 5', '2022-12-12', '2022-12-15', 4.3, 'went well', 'pending'),
  createData('Disney', 'Senior DevOp', '2022-12-12', '2022-12-15', 3.9, 'went well', 'accepted'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Date Applied</TableCell>
            <TableCell align="right">Date of Interview</TableCell>
            <TableCell align="right">Time of Interview</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Application Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.company}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.company}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.date_applied}</TableCell>
              <TableCell align="right">{row.date_of_interview}</TableCell>
              <TableCell align="right">{row.time_of_interview}</TableCell>
               <TableCell align="right">{row.notes_for_interview}</TableCell>
                <TableCell align="right">{row.interview_status}</TableCell>
     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
