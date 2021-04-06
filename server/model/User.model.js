const {Schema, model} = require("mongoose"); 

const UserSchema = new Schema({
    username:{ type: String, required:true, unique:true},
    email: {type: String},
    password:{type: String, required: true},
    // Todos: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Todo"
    //     }
    // ]
    // Todos: [TodoSchema]
},{versionKey:false})

const User = model("User",UserSchema);
module.exports = User;