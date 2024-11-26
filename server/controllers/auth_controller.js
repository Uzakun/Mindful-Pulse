const User = require("../models/user_model")
const bcrypt = require("bcryptjs")



const home = async (req, res) => {
    try {
        res.status(200).send("America yaaa: hallo hallo hallooo hallooooo ")
    } catch (error) {
        console.log(error);
    }
}

// User Registaration Logic
const register = async (req, res) => {
    try {
        const { UserName, Email, Phone, Password } = req.body;

        const userExist = await User.findOne({ Email })

        if (userExist) {
            return res.status(400).json({ message: "Email already exist" })
        }


        const userCreated = await User.create({ UserName, Email, Phone, Password })

        res.status(201).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        // res.status(500).json({ msg: "page not found" })
        next(error)
    }

}

//User Login Logic

const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const userExist = await User.findOne({ Email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const passwordMatch = await bcrypt.compare(Password, userExist.Password);

        if (passwordMatch) {
            res.status(200).json({ msg: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
};


//To send user data

const user = async(req, res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
        
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}


module.exports = { home, register, login, user };
