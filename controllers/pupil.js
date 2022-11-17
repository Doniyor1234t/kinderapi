const Pupil = require("../models/pupil");


const getPupils = async (req, res) => {
    try {
        let pupil = await Pupil.find().populate('group').sort({_id:-1}).lean()
        res.status(200).send(pupil)
    } catch(e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
        
}

const create = async (req, res) => {
    try {
        let { name, phone, group, status } = req.body
        status = status || 0
        let createdAt = new Date()
        const pupil = new Pupil({ name, phone, group, status, createdAt })
        await pupil.save()
        return res.json(pupil)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let { name, phone, group, status } = req.body
        let updatedAt = new Date()
        await Pupil.findByIdAndUpdate(_id,{name, phone, group, updatedAt, status })

        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let pupil = await Pupil.findOne({_id}).lean()
        res.send(pupil)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await Pupil.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getPupils, create, update, edit, del }