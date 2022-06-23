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
  createData('F-7', 300, 250, '5000,000', '3000,000'),
  createData('F-6', 200, 190, '4500,000', '3500,000'),
  createData('F-5', 189, 180,'2500,000', '2000,000'),
  createData('F-4', 150, 146, '1500,000', '100,000'),
 
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: "bold"}}>Fund </TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Funded proposals</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Audited proposals</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Total fund (Ada)</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Transferred amount (Ada)</TableCell>
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
