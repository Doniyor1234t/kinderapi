const {Schema, model} = require("mongoose");


const Worker = new Schema({
    name: String,
    phone: String,
    salary: Number,
    who: {
        type: Number,
        default:0
    },
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

module.exports = model("Worker", Worker)  