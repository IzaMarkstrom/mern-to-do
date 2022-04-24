const express = require("express");
const mongoose = require("./database");
const cors = require("cors");
require("dotenv").config();

const app = express()
const PORT = 4000;

app.use(express.json())
app.use(cors())


// Api routes
const userRoutes = require("./routes/userRoutes")
const todoRoutes = require("./routes/todoRoutes")
const tagRoutes = require("./routes/tagRoutes")

app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes)
app.use("/api/tags", tagRoutes)


app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
