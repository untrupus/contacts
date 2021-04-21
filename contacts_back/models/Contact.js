const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    address: String,
    image: String,
    email: String,
    website: String,
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;