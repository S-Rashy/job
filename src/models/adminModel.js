const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    userName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
})

const Admin = new mongoose.model("Admins", adminSchema )

module.exports = Admin;