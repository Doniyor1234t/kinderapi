const {Schema, model} = require("mongoose");


const Group = new Schema({
    title: String,
    direction:{
        type: Schema.Types.ObjectId,
        ref:'Direction'
    },
    worker:{
        type: Schema.Types.ObjectId,
        ref:'Worker'
    },
    price: Number,
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

module.exports = model("Group", Group)    