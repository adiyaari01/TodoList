const db = require("./config/db");

db.connect()
    .then(require('./model')) //initialize all models
    .then(()=>{
        const express = require("express");
        const cors = require("cors");
        const todoRoute = require('./routes/todo.routes');
        const app = express();
        // app.use is handler called by middleware 
        app.use(express.json())
        app.use(cors({ origin:['http://localhost:3000']}))
        // by default / route
        // we can put routes before handler
        app.use('/todo',todoRoute)
        //run server
        const PORT = process.env.PORT || 8080;
        app.listen(PORT,()=>{
            console.log(`server is listening to port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(`connection error: ${err}`)
        throw new Error(err.message)
    }); 