/* eslint-disable default-case */

import './App.css'
import React, {useState, useEffect} from 'react'
import {createTodo, getTodos, removeTodo, updateTodo} from './api'
import Create from './Todo/Create'
import TasksList from './Todo/TasksList'
import Features from './Todo/Features'
import Container from '@material-ui/core/Container';

const App = () => {
  // const [variablrName, variableFunction] = useState(initial type)
  // //variable - todos, function to change variable - setTodos
  const [todos, setTodos] = useState([]); 
  const [TodosLeft, setTodosLeft] = useState(0);
  const [FilterName, setFilter] = useState('All');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const leftTasks = (db_todos) => {
    const TodosLeft = db_todos.reduce((total,task)=>{
      total += task.complete?0:1;
      return total; 
    },0)
    setTodosLeft(TodosLeft)
}

// eslint-disable-next-line react-hooks/exhaustive-deps
const switchFunc = (db_todos) =>{
  switch (FilterName){
    case 'Completed':
      const newTodos1 = db_todos.filter(task => task.complete)
      return setTodos(newTodos1);
    case 'Left':
      const newTodos = db_todos.filter(task => !task.complete)
      return setTodos(newTodos);
    default:
      return setTodos(db_todos);
  }
}

  useEffect(()=>{
    return getTodos()
      .then(db_todos => { 
        leftTasks(db_todos);
        switchFunc(db_todos);
      })
      .catch(error => console.log(error))
  },[todos,leftTasks,switchFunc])

  const addTodo = async (event) =>{
    //2. change this function only enter
    // event 
    if(event.key === 'Enter') {
      const title = event.target.value;
      const todo = await createTodo(title);
      const newTodos = [...todos, todo];
      setTodos(newTodos);
    }
  }

  const deleteAll = async =>{
    return removeTodo(0).then(()=>{
      const newTodos = todos.filter(task => task.complete===0)
      setTodos(newTodos);
    })
  }

  const deleteTodo = async (taskId) =>{
    return removeTodo(taskId).then(()=>{
      const newTodos = todos.filter(task => taskId!==task._id)
      setTodos(newTodos);
    })
  }

  const setComplete = async (taskId, isCompleted) =>{
    // const task = todos.find(todo => todo._id === taskId)
    // task.complete = isCompleted;
    const task = {complete : isCompleted} 
    return updateTodo(taskId, task).then(()=>{
      const newTodos = todos.map(task => {
        if (task._id === taskId)
          task.compete = isCompleted
          return task;
      })
      setTodos(newTodos);
    })
  }

  const changeFilter = async (filter) => {
            setFilter(filter);
    }
 
  return (
    <Container maxWidth='md'>
    {/* <componentName propsName={propValue} .../> */}
    {/* <ComponentName>
      <Components/>
    </ComponentName> */}
    <h1>Todos</h1>
    <Features left={TodosLeft} filter={changeFilter} clearAll={deleteAll} name={FilterName} className="features"/>
    <Create add={addTodo} />
    <TasksList tasks={todos} remove={deleteTodo} update={setComplete} />
    </Container>
  );
}

export default App;

