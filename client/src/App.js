import React, {Component} from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Customer from './Components/Customer';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': (1),
  'image': 'https://placeimg.com/64/64/1',
  'name': 'bryan tan',
  'birthday': '961221',
  'gender': 'female',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Tang Ong',
  'birthday': '990111',
  'gender': 'male',
  'job': 'engineer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Shui Wen',
  'birthday': '981121',
  'gender': 'female',
  'job': 'doctor'
}
]

class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}> 
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {
          customers.map(c => {
            return (
              <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                gender = {c.gender}
                job = {c.job}
                birthday = {c.birthday}
              />
            );
          })
        }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
