const jwt = require("jsonwebtoken")
const { User } = require("../models/UserSchema")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const JWT_SECRET = process.env.JWT_SECRET;


const createUser = async (req, res) => {
    const {username, password} = req.body    

    const userExists = await User.findOne({ username });
    
    if(userExists){
        res.status(403).json({ message: "Username already exists" })
    }

    const user = new User ({username, password})
    await user.save()
    res.json(username)
}

const loginUser = async (req, res) => {
    const {username, password} = req.body 

    const userExists = await User.findOne({ username })

    if (userExists) {
        const validPassword = await bcrypt.compare(password, userExists.password)

        if(validPassword){
            // om vi får tillbaka användaren från vår authentication i user.js
            const userId = userExists._id.toString();
            //vi skapar en jwt token med sign()
            const token = jwt.sign({ userId, username: userExists.username }, JWT_SECRET, {
                expiresIn: 120, // livslängden på tokenen
                subject: userId, // ska vara unikt värde så userId går bra
            });
            res.status(200).json({ token })
        } else {
            res.status(403).json({ message: "Wrong password" })
        }
    } else {
        res.status(403).json({ message: "Username does not exist" })
    }
}

module.exports = { createUser, loginUser }