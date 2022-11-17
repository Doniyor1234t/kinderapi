const {Schema, model} = require("mongoose");


const Pupil = new Schema({
    name: String,
    phone: String,
    group:{
        type: Schema.Types.ObjectId,
        ref:'Group'
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

module.exports = model("Pupil", Pupil)  