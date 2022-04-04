const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, require: true, trim: true, unique: true},
    password: {type: String, require: true},
}, { timestamps: true })
// This will give a timestamp on every document inserted in this collection.


// pre is a hook telling what to do first.
// Innebär att innan vi sparar löseordet ska den "saltas".
UserSchema.pre(
    "save", 
    async function(next){
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        next()
    }
)

const User = mongoose.model("User", UserSchema)

exports.User = User