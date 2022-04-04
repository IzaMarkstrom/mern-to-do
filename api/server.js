const express = require("express");
const mongoose = require("./database");
const jwt = require("jsonwebtoken");
const { User } = require("./models/UserSchema");
const cors = require("cors");
require("dotenv").config();

const app = express()
const PORT = 3005;
const JWT_SECRET = "19298qw9fw78q923516bgdywqbd8"

app.use(express.json())
app.use(cors())


// Api routes
const userRoutes = require("./routes/userRoutes")
const todoRoutes = require("./routes/todoRoutes")

app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes)


app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
