const Worker = require("../models/worker");


const getWorkers = async (req, res) => {
    try {
        let worker = await Worker.find().sort({_id:-1}).lean()
        res.status(200).send(worker)
    } catch(e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
        
}

const create = async (req, res) => {
    try {
        let { name, phone, salary, who, status } = req.body
        status = status || 0
        let createdAt = new Date()
        const worker = new Worker({ name, phone, salary, who, status, createdAt })
        await worker.save()
        return res.json(worker)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let { name, phone, salary, who, status } = req.body
        let updatedAt = new Date()
        await Worker.findByIdAndUpdate(_id,{ name, phone, salary, who, updatedAt, status })

        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let worker = await Worker.findOne({_id}).lean()
        res.send(worker)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await Worker.findByIdAndDelete(req.params.id)
    res.status(200).send({message:'Uchirildi!'})
}


module.exports = { getWorkers, create, update, edit, del }