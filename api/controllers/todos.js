const { createTodosDatabase, 
    getAllTodosDatabase, 
    getTodosDatabase,
    completeTodosDatabase, 
    deleteTodosDatabase,
    getCompletedTodosDatabase } = require("../models/TodoSchema")

const listAllTodos = async (req, res) => {
    const todoData = await getAllTodosDatabase()
    if(todoData !== null){
        res.status(200).json({ todoData })
    } else {
        res.status(404).json({ message: "No list found" })
    }
    
}

const listNotDoneTodos = async (req, res) => {
    const todoData = await getTodosDatabase()

    if(todoData !== null){
        res.status(200).json({ todoData })
    } else {
        res.status(404).json({ message: "No list found" })
    }
}

const listCompletedTodos = async (req, res) => {
    const todoData = await getCompletedTodosDatabase()

    if(todoData !== null){
        res.status(200).json({ todoData })
    } else {
        res.status(404).json({ message: "No list found" })
    }
}

const createTodos = async (req, res) => {
    const todoData = req.body
    console.log(todoData)
    const todo = await createTodosDatabase(todoData)
    res.status(200).json({ todo })
}

const completeTodos = async (req, res) => {
    const todoId = req.params.id
    const todo = await completeTodosDatabase(todoId)

    res.status(200).json({ todo })
}

const deleteTodos = async (req, res) => {
    const todoId = req.params.id
    const result = await deleteTodosDatabase(todoId)

    res.status(200).json(result)
}

module.exports = { 
    listAllTodos, 
    listNotDoneTodos,
    createTodos, 
    completeTodos, 
    deleteTodos, 
    listCompletedTodos 
}