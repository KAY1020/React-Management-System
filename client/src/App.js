import React, {Component} from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Customer from './Components/Customer';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20); //0.02초 마다 progress
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

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
          this.state.customers ? this.state.customers.map(c => {
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
          }):
        <TableRow>
          <TableCell colSpan = "6" align = "center">
            <CircularProgress className = {classes.progress} variant = "determinate" value = {this.state.completed}/>
          </TableCell>
        </TableRow>
        }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
