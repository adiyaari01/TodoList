const {model} = require("mongoose");
const Todo = model("Todo");

const readTodos = async (req,res) =>{
    const filter = {};
    if (req.params.id){
        filter._id = req.params.id;
    }
    const todos = await Todo.find(filter).lean();
    return res.status(200).json({status:'success', data:todos});
}

const createTodo = async (req,res) =>{
    const newTodo = await Todo.create(req.body)
    // const newTodo = new Todo({
    //     title: req.body.title
    // })
    // await newTodo.save()
    return res.status(200).json({status:'success', data:newTodo} );
}

const removeTodo = async (req,res) =>{
    if (!req.params.id){
        await Todo.deleteMany({complete:1})
        return res.status(200).json({status:'success'});
        // return res.status(422).json({status:'failed',message:'id is require'});
    }
        await Todo.deleteOne({_id:req.params.id})
        return res.status(200).json({status:'success'});
}

const updateTodo = async (req,res) =>{
    if (!req.params.id){
        return res.status(422).json({status:'failed',message:'id is require'});
    }
    const filter = {};
    if (req.params.id){
        filter._id = req.params.id;
    }
    //{complete:true/false}
    await Todo.updateOne({_id:req.params.id},{$set:req.body});
    return res.status(200).json({status:'success'});
}

module.exports = {
    createTodo,
    readTodos,
    removeTodo,
    updateTodo
}