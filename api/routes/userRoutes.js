// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { createUser, loginUser, getUser } = require("../controllers/users")
const { authUser } = require("../controllers/auth")

// User routes
router.post("/", loginUser);
router.post("/create", createUser);
router.get("/getUser", authUser, getUser);


module.exports = router