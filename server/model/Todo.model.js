const {Schema, model} = require("mongoose"); 

//user: first-name, last-name, email
const TodoSchema = new Schema({
    title:String,
    complete:{
        type:Boolean,
        default:false
    }
},{versionKey:false})

const Todo = model("Todo",TodoSchema);
module.exports = Todo;