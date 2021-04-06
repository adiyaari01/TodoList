const {Schema, model} = require("mongoose"); 

//user: first-name, last-name, email
const UserSchema = new Schema({
    username:String,
    email:String,
    password:String,
    Todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
    // Todos: [TodoSchema]
},{versionKey:false})

const User = model("User",UserSchema);
module.exports = User;