const {Schema, model} = require('mongoose')

const Spending = new Schema({
    summa: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    },
})


module.exports = model('Spending',Spending)