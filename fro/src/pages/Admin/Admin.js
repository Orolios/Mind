import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Api from "../../services/api";




class Admin extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await Api.get("users");
    this.setState({ users: response.data.data });
    console.log(response.data.data);
  }

  render() {
    const { users } = this.state;

    return (
        <React.Fragment>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>

                <TableCell>Name</TableCell>
                <TableCell>email</TableCell>

              </TableRow>
            </TableHead>
            <TableBody size="small">
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>                 
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>

                </TableRow>
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"

              >
                Editar
              </Button>
            </TableBody>
          </Table>
        </React.Fragment>
    );
  }
}

export default Admin;
