const User = require("../models/user");

const getUsers = async (req, res) => {
    let users = await User.find({role:1}).sort({_id:-1}).lean()
    res.send(users)
}

const update = async (req, res) => {
    try {
        let _id = req.params.id
        let {login, password, phone, avatar} = req.body
        const user = await User.findByIdAndUpdate(_id,{login, password, phone, avatar})
        await user.save()
        res.send({message: "Muvaffaqiyatli o'zgartirildi"})
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
} 

const edit = async (req, res) => {
    try {
        const _id = req.params.id
        let user = await User.findOne({_id}).lean()
        res.send(user)
    } catch (e) {
        console.log(e)
        res.send({message: "Serverda xatolik"})
    }
}

const del = async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.send({message: "Muvaffaqiyatli o'chirildi"})
}


module.exports = { getUsers, update, edit, del }