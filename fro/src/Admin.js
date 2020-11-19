import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


// Generate Order Data
function createData(id, data, name, email, Cpf, Hash) {
  return { id, data , name, email, Cpf, Hash};
}

const rows = [
  createData('0', '11 Mar, 2021', 'Name1', 'lala1@email.com', '23123213213', 'dasdasd'),
  createData('1', '12 Mar, 2021', 'Name2', 'lala2@email.com', '23123213213', 'asdascvv'),
  createData('2', '13 Mar, 2021', 'Name3', 'lala3@email.com', '23123213213', 'hajafdgda'),
  createData('3', '14 Mar, 2021', 'Name4', 'lala4@email.com', '23123213213', 'adsfxcvba'),
  createData('4', '15 Mar, 2021', 'Name5', 'lala5@email.com', '23123213213', 'asfdvsdaf'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
   submit: {
    margin: theme.spacing(3, 0, 2),
    },
    marginTop: theme.spacing(3),
  },
}));

export default function Admin() {
  const classes = useStyles();
  return (
    <React.Fragment>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>data</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Cpf</TableCell>
            <TableCell align="right">Hash</TableCell>

          </TableRow>
        </TableHead>
        <TableBody size="small">
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.Cpf}</TableCell>
              <TableCell align="right">{row.Hash}</TableCell>
            </TableRow>
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Editar
          </Button>
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
