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



app.get("/secret", (req, res) => {
    if (req.user){
        res.json({message: `Hello ${req.user.username}`})
    } else {
        res.sendStatus(401)
    }
})

// Skapar ett token till kunden, signeras med vår kod och meta data (hur länge den räcker)
app.post("/tokens", async (req, res) => {
    const {username, password} = req.body
    const user = await User.login(username, password)
    if (user) {
        // user._id = ObjectId091he982he82 in MongoDB
        const userId = user._id.toString()
        const token = jwt.sign(
            {userId, username: user.username},
            JWT_SECRET,
            {expiresIn: 120, subject: userId}
        )
        // Skickar ut det i vår JSON response till client
        res.json(token)
    } else {
        res.sendStatus(401)
    }
})


app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
