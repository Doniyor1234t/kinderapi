const Direction = require("../models/direction");

const getDirections = async (req, res) => {
    try {
        let directions = await Direction.find().sort({_id:-1}).lean()
        res.status(200).send(directions)
    } catch(e) {
        
    }
    
}

const create = async (req, res) => {
    try {
        let {title, status} = req.body
        status = status || 0
        let createdAt = new Date()
        const direction = new Direction({title, createdAt, status})
        await direction.save()
        return res.json(direction)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let { title, status } = req.body
        status = status || 0
        let updatedAt = new Date()
        const direction = await Direction.findByIdAndUpdate(_id,{ title, status,updatedAt })
        await direction.save()
        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let direction = await Direction.findOne({_id}).lean()
        res.send(direction)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await Direction.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getDirections, create, update, edit, del }