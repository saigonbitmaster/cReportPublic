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
  createData('9465e7fcf21472090ee1cfa6d9a79d25ee7024bc73da0340e929a1aa07c33b73', 15900000000, "03/04/2022 12:35:54 PM"),
  createData('d82b3ed38dcee52658a018a022fc2aaad9c9c31734c66490d5b564d48ed028e5', 23700000000, "03/05/2022 17:35:54 PM"),
  createData('6bad2a2d1178e2a80244bd15796491004b7ccaa86fb0405e951bfbe35973a876', 2620000000, "03/08/2022 05:35:54 AM"),
  createData('f9730de5149d96cf41e3e524724eccf8c18d24252f8e2e899fc19cc72767841e', 3050000000, "03/08/2022 21:00:01 PM"),
  createData('b6fdb4b5aeeca8002978e4d5a747abe8852d837a049bf584c6941c7d957f9cbf', 35600000000, "03/08/2022 22:35:39 PM"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TxHash</TableCell>
            <TableCell align="right">Amount (lovelace)</TableCell>
            <TableCell align="right">Timestamp</TableCell>
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
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}