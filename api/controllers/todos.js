const { createTodosDatabase, 
    getAllTodosDatabase, 
    completeTodosDatabase, 
    deleteTodosDatabase,
    getCompletedTodosDatabase, 
    Todo } = require("../models/TodoSchema")

const listAllTodos = async (req, res) => {
    const completedTodos = req.query.completedTodos

    // if(completeTodos){
    //     const todoData = await getCompletedTodosDatabase()
    //     // VARFÖR GENERERAR DEN TVÄRTOM????
    //     // Fråga Zander
    //     if(todoData !== null){
    //         res.status(200).json({ todoData })
    //     } else {
    //         res.status(404).json({ message: "No list found" })
    //     }
    // }

    const todoData = await getAllTodosDatabase()
    // VARFÖR GENERERAR DEN TVÄRTOM????
    // Fråga Zander
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
    const todo = await completeTodosDatabase(todoId)

    res.status(200).json({ todo })
}

const deleteTodos = async (req, res) => {
    const todoId = req.params.id
    const result = await deleteTodosDatabase(todoId)

    res.status(200).json(result)
}

module.exports = { listAllTodos, createTodos, completeTodos, deleteTodos }