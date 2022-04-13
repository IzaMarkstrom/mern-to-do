const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false},
},  { timestamps: true })


const createTodosDatabase = async (todoData) => {
    const todo = new Todo({text: todoData})
    await todo.save()
    return todo
}

const getAllTodosDatabse = async () => {
    const listTodos = await Todo.find()
    return listTodos ? listTodos : null
}

const completeTodosDatabse = async (todoId) => {
    const todo = await Todo.findOne({_id: todoId})

    if(todo.complete == false){
        await Todo.findByIdAndUpdate(todoId, { complete: true }, {new: true})
    } else {
        await Todo.findByIdAndUpdate(todoId, { complete: false }, {new: true})
    }
    return todo;
}


const deleteTodosDatabse = async (todoId) => {
    await Todo.findByIdAndDelete({_id: todoId})

    return `The todo is deleted`;
}


const Todo = mongoose.model("Todo", TodoSchema)

module.exports = {
    createTodosDatabase,
    getAllTodosDatabse,
    completeTodosDatabse,
    deleteTodosDatabse
}

exports.Todo = Todo