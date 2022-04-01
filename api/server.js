const express = require("express");
const mongoose = require("./database")
const jwt = require("jsonwebtoken")
const { User } = require("./models/UserSchema")
const cors = require("cors")

const app = express()
const PORT = 3005;
const JWT_SECRET = "19298qw9fw78q923516bgdywqbd8"

app.use(express.json())
app.use(cors())


// Api routes
const userRoutes = require("./routes/userRoutes")

app.use("/api", userRoutes)



// Tillsatt middleware för att kolla att **** 15:22 på dagens inspelning
app.use((req, res, next) => {
    const authHeader = req.header("Authorization")
    if (authHeader){
        const token = authHeader.split(" ") [1]
        req.user = jwt.verify(token, JWT_SECRET)
    }
    next()
})


app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
