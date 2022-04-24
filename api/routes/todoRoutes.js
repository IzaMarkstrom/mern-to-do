// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { authUser } = require("../controllers/auth")
const todos = require("../controllers/todos")


router.get("/homepage", authUser, todos.listAllTodos);
router.get("/homepage/notDone", authUser, todos.listNotDoneTodos);
router.post("/homepage", authUser, todos.createTodos);
router.get("/homepage/completedTodos", authUser, todos.listCompletedTodos);
router.put("/:id", authUser, todos.completeTodos);
router.delete("/:id", authUser, todos.deleteTodos);


module.exports = router