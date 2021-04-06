import React from 'react'
import Task from './Task'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});


const TasksList = ({tasks, remove, update}) =>{
    const classes = useStyles();

    return (
      <TableContainer component={Paper} style={{backgroundColor:'#f8f5f1'}}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {
                tasks.length>0 && tasks.map(todo => 
                    <Task key={todo._id} task={todo} remove={remove} update={update}/>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    )}

export default TasksList;

