const { getAllTodosDatabase } = require("../models/TodoSchema")

const getTags = async (req, res) => {

const todos = await getAllTodosDatabase()
let todosTag = []

for (const element of todos) {
    let newList = todosTag.concat(element.tagList)
    todosTag = newList       
}

const filterdTags = todosTag.filter(element => {
    return element !== undefined
})

let tags = [... new Set(filterdTags)]


res.json( tags );
}


module.exports = { getTags }