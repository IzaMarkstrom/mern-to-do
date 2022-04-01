// Declaring what dependency I want.
const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router()
const bodyParser = require("body-parser")
const { User } = require("../models/UserSchema")
const bcrypt = require("bcryptjs")

// Created a new user.
router.post("/user/create", async (req, res) => {
    const {username, password} = req.body    

    const userExists = await User.findOne({ username });
    
    if(userExists){
        res.status(403).json({ message: "Username already exists" })
    }

    const user = new User ({username, password})
    await user.save()
    res.json(username)
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body 

    const userExists = await User.findOne({ username })

    if (userExists) {
        const validPassword = await bcrypt.compare(password, userExists.password)

        if(validPassword){
            jwt.sign({ username, id: userExists._id.toString() }, process.env.JWT_SECRET, (err, token) => {

                if (err) {
                    res.status(401).json(err)
                } else {
                    res.status(200).json({ token })
                }
            })
        } else {
            res.status(403).json({ message: "Wrong password" })
        }
    } else {
        res.status(403).json({ message: "Username does not exist" })
    }

})


module.exports = router