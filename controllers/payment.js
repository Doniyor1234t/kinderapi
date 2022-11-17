const Payment = require("../models/payment");

const getPayments = async (req, res) => {
    try {
        let payments = await Payment.find().populate('group').populate('pupil').sort({_id:-1}).lean()
        res.status(200).send(payments)
    } catch(e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
        
}

const create = async (req, res) => {
    try {
        let { group, pupil, data, summa, typepayment, comment, status } = req.body
        let checkPayment = await Payment.findOne({pupil,group})
        if (checkPayment){
            data = data || Date.now()
            
            checkPayment.historysumma.push({summa,data,typepayment,comment})
            checkPayment.allsumma += parseInt(summa)
            await Payment.findByIdAndUpdate(checkPayment._id,checkPayment)
            
            res.status(200).send({message: "Muvaffaqiyatli"})
            
        } else {
            data = data || Date.now()
            let allsumma = 0
            allsumma += summa
            allsumma = parseInt(allsumma)
            const payment = await new Payment({pupil,group,allsumma, status})
            payment.historysumma.push({summa,data,typepayment,comment})
                await payment.save()

                res.status(200).send({message: "Muvaffaqiyatli"})
        }
        return res.send("ok")
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

 

const payId = async (req, res) => {
    try {
        const _id = req.params.id
        const payment = await Payment.findOne({_id}).populate('pupil').populate('group').lean()
        payment.historysumma = payment.historysumma.map((pay, index) => {
            pay.index = index + 1
            pay.summa = pay.summa.toLocaleString('fr')
            let date  = new Date(pay.data)
            pay.data = `${date.getDate()}-${months[date.getMonth()]} ${date.getFullYear()} г`
            return pay
        })
        payment.pupil.mustprice = Math.round(payment.pupil.price / pricetype[payment.pupil.pricetype].rate)
        payment.pupil.pricetype = pricetype[payment.pupil.pricetype].title
        payment.historysumma = payment.historysumma.reverse()
        res.send(payment)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}


const del = async(req,res)=>{
    await Payment.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}

const delPayId = async(req,res)=>{
    let _id = req.params.id
    let index = req.params.index

    let payment = await Payment.findOne({_id})
    payment.historysumma.splice(index,1)
    await payment.save()
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getPayments, create, payId, del, delPayId }