const mongoose = require("mongoose")

class Database {
    constructor(){
        this.connect()
    }

    connect() {
        mongoose.connect("mongodb://127.0.0.1/TodoList")
        .then(() => {
            console.log("Database connection successful")
        })
        .catch((err) => {
            console.log(`Database connection error ${err}`)
        })
    }
}

module.exports = new Database()