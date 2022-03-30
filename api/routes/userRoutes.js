// Declaring what dependency I want.
const express = require("express");
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const { User } = require("../models/UserSchema")
const bcrypt = require("bcryptjs")

// Created a new user.
router.post("/user/create", async (req, res) => {
    const {username, password} = req.body    
    const user = new User ({username, password})
    await user.save()
    res.json(username)
});




// // Handles the registration of the new user.
// router.post("/user/create", async (req, res, next) => {
//     const username = req.body.username.trim()
//     const password = req.body.password

//     const payload = req.body

//     if(username && password){
//         // This will go into the database and check for user.
//         const user = await User.findOne({ username: username})
//         .catch((error) => {
//             console.log(error)
//             payload.errorMessage = "Something went wrong."
//             res.status(200).render("register", payload)
//         })
 
//         // No user found.
//         // If we didn't find a user, a new user will be created.
//         if(user == null){
//             const data = req.body
//             // We salt the password 2 raised to 10 times.
//             data.password = await bcrypt.hash(password, 10)

//             User.create(data)
//             .then((user) => {
//                 // We store newly created user in the session of the user property.
//                 req.session.user = user
//                 return res.redirect("/")
//             })

//         // User found.
//         // If we did find a user, we output error message.
//         } else {
//             payload.errorMessage = "Username already exists."
//             res.status(200).render("register", payload)
//         }
//     } else {
//         payload.errorMessage = "Make sure each field is filled in."
//         res.status(200).render("register", payload)
//     }
    
// })

// Export it so we can use this file in other places.
module.exports = router