import superagent from 'superagent';

const createTodo = title => {
    return superagent.post('http://localhost:8080/todo/').send({title}).then(res =>{
        return res.body.data;
    }).catch(err=>{
        console.log(err)
        throw new Error(err.message);
    })
}

const getTodos = id =>{
    const displayId = id?id:"";
    return superagent.get(`http://localhost:8080/todo/${displayId}`).then(res =>{
        return res.body.data;
    }).catch(err=>{
        console.log(err)
        throw new Error(err.message);
    })
}

const removeTodo = id =>{
    if (id===0){
        id='';
    }
    return superagent.delete(`http://localhost:8080/todo/${id}`).then(res =>{
        return res.body.data;
    }).catch(err=>{
        console.log(err)
        throw new Error(err.message);
    })
}

const updateTodo = (taskId, task) =>{
    return superagent.put(`http://localhost:8080/todo/${taskId}`).send(task).then(res =>{
        return res.body.data;
    }).catch(err=>{
        console.log(err)
        throw new Error(err.message);
    })
}

export {createTodo, getTodos, removeTodo, updateTodo}

