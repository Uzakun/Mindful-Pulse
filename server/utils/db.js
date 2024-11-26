const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern_admin"
// mongoose.connect(URI);

// const URI = process.env.MONGODB_URI     

const conncectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("connection successful to DB")
    } catch (error) {
        console.log("database Erorr")
        process.exit(0);
    }

}

module.exports = conncectDb;

