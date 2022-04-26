const { createTodosDatabase, 
    getAllTodosDatabase, 
    getTodosDatabase,
    completeTodosDatabase, 
    deleteTodosDatabase,
    getCompletedTodosDatabase,
    getTodosByTagDatabase } = require("../models/TodoSchema")

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

const listTodosByTag = async (req, res) => {
    const tag = req.params.tag
    const todoData = await getTodosByTagDatabase(tag)

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

    try {
        const todo = await completeTodosDatabase(todoId)
        res.status(200).json({ todo })
    } catch (error) {
        res.status(404).json({ message: "No todo found", error })
    }
    

    
}

const deleteTodos = async (req, res) => {
    const todoId = req.params.id
    await deleteTodosDatabase(todoId)

    res.status(200).json({message: "Todo deleted"})
}

module.exports = { 
    listAllTodos, 
    listNotDoneTodos,
    createTodos, 
    completeTodos, 
    deleteTodos, 
    listCompletedTodos,
    listTodosByTag
}