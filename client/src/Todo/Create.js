import React from 'react'
import TextField from '@material-ui/core/TextField';

//import { Formik } from 'formik';

//const Create = (props)  => {
const Create = ({add})  => {     
    //1. build the component and on enter create new todo
    return <TextField id="standard-basic" label="Add Todo" onKeyPress={add} fullWidth='true'/>
    //<input type="text" name="title" onKeyPress={add} placeholder="Add Todo" className="text-field-style"/>
}

export default Create;