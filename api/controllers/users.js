const { User } = require("../models/UserSchema")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")

const { generateToken } = require("./auth");


const createUser = async (req, res) => {
    const {username, password} = req.body    

    const userExists = await User.findOne({ username });
    
    if(userExists){
        res.status(403).json({ message: "Username already exists" })
    } else {
        const user = new User ({username, password})
        await user.save()
        res.json(username)
    }

}

const loginUser = async (req, res) => {
    const {username, password} = req.body 

    const userExists = await User.findOne({ username })

    if (userExists) {
        const validPassword = await bcrypt.compare(password, userExists.password)

        if(validPassword){
            //vi skapar en jwt token med sign()
            const token = await generateToken(userExists)
            res.status(200).json({ token })
        } else {
            res.status(403).json({ message: "Wrong password" })
        }
    } else {
        res.status(403).json({ message: "Username does not exist" })
    }
}

const getUser = async (req, res) => {
    const user = req.user

    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(403).json({ error  })
    }    
}

module.exports = { createUser, loginUser, getUser }