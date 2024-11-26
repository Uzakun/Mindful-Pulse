const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
    UserName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Message: {
        type: String,
        require: true,
    },
})

const Contact = new model("Contact", contactSchema);
module.exports = Contact;