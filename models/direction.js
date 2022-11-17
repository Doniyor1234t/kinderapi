const {Schema, model} = require("mongoose");


const Direction = new Schema({
    title: String,
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    },
    status: {
        type: Number,
        default:0
    },
})

module.exports = model("Direction", Direction)    