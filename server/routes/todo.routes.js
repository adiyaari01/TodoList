const {Router} = require('express')
const router = Router();
const todoController = require('../controller/todo.controller');

//one route with all http methodes options
// router.route("/:id?").get((req,res)=>{

// }).put((req,res)=>{

// }).post((req,res)=>{

// }).delete((req,res)=>{

// });
router.route("/:id").get(todoController.readTodos).delete(todoController.removeTodo).put(todoController.updateTodo)

router.route("/").post(todoController.createTodo).get(todoController.readTodos).delete(todoController.removeTodo)

module.exports = router;
