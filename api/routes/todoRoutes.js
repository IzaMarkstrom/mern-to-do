// Declaring what dependency I want.
const express = require("express");
const router = express.Router()
const { authUser } = require("../controllers/auth")

// User routes
router.post("/homepage", authUser);


module.exports = router