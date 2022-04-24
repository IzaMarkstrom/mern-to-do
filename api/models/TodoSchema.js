const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    text: {type: String, required: true},
    tagList: [{ type: String }],
    complete: {type: Boolean, default: false},
},  { timestamps: true })


const createTodosDatabase = async (todoData) => {
    const todo = new Todo({text: todoData.newTodo, tagList: todoData.tags})
    await todo.save()
    return todo
}

const getAllTodosDatabase = async () => {
    const listTodos = await Todo.find()
    .sort({ createdAt: -1 })
    return listTodos ? listTodos : null
}

const getTodosDatabase = async () => {
    const listTodos = await Todo.find({complete: false})
    .sort({ createdAt: -1 })
    return listTodos ? listTodos : null
}

const getCompletedTodosDatabase = async () => {
    const listTodos = await Todo.find({complete: true})
    .sort({ createdAt: -1 })
    return listTodos ? listTodos : null
}

const getTodosByTagDatabase = async (tag) => {
    const listTodos = await Todo.find({tagList: tag})
    .sort({ createdAt: -1 })
    return listTodos ? listTodos : null
}

const completeTodosDatabase = async (todoId) => {
    const todo = await Todo.findOne({_id: todoId})

    if(todo.complete == false){
        await Todo.findByIdAndUpdate(todoId, { complete: true }, {new: true})
    } else {
        await Todo.findByIdAndUpdate(todoId, { complete: false }, {new: true})
    }
    return todo;
}


const deleteTodosDatabase = async (todoId) => {
    await Todo.findByIdAndDelete({_id: todoId})

    return `The todo is deleted`;
}


const Todo = mongoose.model("Todo", TodoSchema)

module.exports = {
    createTodosDatabase,
    getAllTodosDatabase,
    getTodosDatabase,
    completeTodosDatabase,
    deleteTodosDatabase,
    getCompletedTodosDatabase,
    getTodosByTagDatabase
}

exports.Todo = Todo