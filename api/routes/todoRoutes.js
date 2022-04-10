// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { authUser } = require("../controllers/auth")
const todos = require("../controllers/todos")


router.get("/homepage", authUser, todos.listAllTodos);
router.post("/homepage", authUser, todos.createTodos);
router.put("/:id", authUser, todos.completeTodos);
router.delete("/:id", authUser, todos.deleteTodos);


module.exports = router