const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Phone: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

//secure the password with bcrypt
userSchema.pre('save', async function (next) {
    const user = this;


    if (!user.isModified("Password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.Password, saltRound);
        user.Password = hash_password
    } catch (error) {
        next(error)
    }

})

//json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            Email: this.Email,
            isAdmin: this.isAdmin,

        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
        )
    } catch (error) {
        console.error(error)
    }
};


const User = new mongoose.model('User', userSchema)

module.exports = User;