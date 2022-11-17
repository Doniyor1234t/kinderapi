const Group = require("../models/group");

const getGroups = async (req, res) => {
    try {
        let groups = await Group.find().populate(['direction','worker']).sort({_id:-1}).lean()
        res.status(200).send(groups)
    } catch(e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
        
}

const create = async (req, res) => {
    try {
        let {title, direction, worker, price, status } = req.body

        status = status || 0
        let createdAt = new Date()
        const group = new Group({title, direction, worker, price, status, createdAt })
        await group.save()
        return res.json(group)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let {title, direction, worker, price, status} = req.body
        let updatedAt = new Date()
        await Group.findByIdAndUpdate(_id,{ title, direction, worker, price, updatedAt, status })

        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let group = await Group.findOne({_id}).lean()
        res.send(group)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await Group.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getGroups, create, update, edit, del }