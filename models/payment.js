const {Schema, model} = require('mongoose')

const Payment = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    pupil: {
        type: Schema.Types.ObjectId,
        ref: 'Pupil'
    },
    summaEnd: Number,
    allsumma: Number,
    historysumma: [
        {
            summa: Number,
            data: Date,
            typepayment:String,
            comment:String,
        }
        
    ],
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


module.exports = model('Payment',Payment)