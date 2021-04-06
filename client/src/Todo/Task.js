import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import '../App.css'
import '../index.css'

const Task = ({task, remove, update}) =>{
    return (
        <TableRow className="task-row-item MuiTableRow-hover">
            <TableCell>         
                {<Checkbox name="complete" checked={task.complete} onClick={(e)=>update(task._id, e.target.checked)}/>}
            </TableCell>
            <TableCell>
                <h3 className={task.complete?'complete':''} style={{textAlign:'center'}}>
                    {task.title}
                </h3>   
            </TableCell>
            <TableCell>
                <DeleteIcon className="task-deleted-icon" onClick={()=>remove(task._id)}/>
            </TableCell>
        </TableRow>
    )
}

export default Task;



