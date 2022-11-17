const Spending = require("../models/spending");

const getSpending = async (req, res) => {
    try {
        let spending = await Spending.find().sort({_id:-1}).lean()
        res.status(200).send(spending)
    } catch(e) {
        
    }
    
}

const create = async (req, res) => {
    try {
        let {summa, comment} = req.body
        let createdAt = new Date()
        const spending = new Spending({summa, comment, createdAt })
        await spending.save()
        return res.json(spending)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let { summa, comment } = req.body
        let updatedAt = new Date()
        const spending = await Spending.findByIdAndUpdate(_id,{ summa, comment,updatedAt })
        await spending.save()
        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let spending = await Spending.findOne({_id}).lean()
        res.send(spending)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await Spending.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getSpending, create, update, edit, del }