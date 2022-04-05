const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false},
},  { timestamps: true })


const createNewTodo = async (todoData) => {
    const todo = new Todo({text: todoData})
    await todo.save()
    return todo
}

const getAllTodos = async () => {
    const listTodos = await Todo.find()
    return listTodos ? listTodos : null
}

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = {
    createNewTodo,
    getAllTodos
}

exports.Todo = Todo