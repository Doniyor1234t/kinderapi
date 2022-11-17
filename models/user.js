const {Schema, model} = require("mongoose");

const User = new Schema({
    login: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    phone: {
        type: String,
    },
    avatar: {
        type: String
    },
    role:{
        type:Number,
        default:1
    }
})

module.exports = model("User", User)