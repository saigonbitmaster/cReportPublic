import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('F-7', 250, 150, 40, 50),
  createData('F-6', 190, 120, 46, 36),
  createData('F-5', 180, 90,38, 10),
  createData('F-4', 146, 86, 46, 5),
 
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell style={{fontWeight: "bold"}}>Fund </TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Audited proposals</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Proposal has product</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>{`Out standing`}</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Total products smart contracts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
