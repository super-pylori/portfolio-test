import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numbers3 from '../../data/numbers3.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductPage: React.FC = () => {
  const classes = useStyles();

  return (
    <GenericTemplate title="ナンバーズ3">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>回別</TableCell>
              <TableCell align="right">抽せん日</TableCell>
              <TableCell align="right">ナンバーズ3抽せん数字</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {numbers3.map((n3) => (
              <TableRow key={n3.no}>
                <TableCell component="th" scope="row">
                  {n3.no}
                </TableCell>
                <TableCell align="right">{n3.date}</TableCell>
                <TableCell align="right">{n3.number}</TableCell>
              </TableRow>
            ))}
          </TableBody>        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default ProductPage;