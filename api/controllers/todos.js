const { createTodosDatabase, 
    getAllTodosDatabse, 
    completeTodosDatabse, 
    deleteTodosDatabse, 
    Todo } = require("../models/TodoSchema")

const listAllTodos = async (req, res) => {
    const todoData = await getAllTodosDatabse()

    if(todoData !== null){
        res.status(200).json({ todoData })
    } else {
        res.status(404).json({ message: "No list found" })
    }
    
}

const createTodos = async (req, res) => {
    const todoData = req.body.text

    const todo = await createTodosDatabase(todoData)
    res.status(200).json({ todo })
}

const completeTodos = async (req, res) => {
    const todoId = req.params.id
    const todo = await completeTodosDatabse(todoId)

    res.status(200).json({ todo })
}

const deleteTodos = async (req, res) => {
    const todoId = req.params.id
    const result = await deleteTodosDatabse(todoId)

    res.status(200).json(result)
}

module.exports = { listAllTodos, createTodos, completeTodos, deleteTodos }