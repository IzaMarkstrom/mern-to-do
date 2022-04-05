// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { authUser } = require("../controllers/auth")
const todos = require("../controllers/todos")

// User routes
router.get("/homepage", authUser, todos.listAllTodos);
router.post("/homepage", authUser, todos.createTodos);
router.get("/homepage", authUser, todos.getDoneTodos);


module.exports = router