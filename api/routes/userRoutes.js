// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { createUser, loginUser } = require("../controllers/users")

// User routes
router.post("/", loginUser);
router.post("/create", createUser);


module.exports = router