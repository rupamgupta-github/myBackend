const authorsModel= require("../models/authorsModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorsModel.create(data)
    res.send({msg: savedData})
}

const getAuthoreData= async function (req, res) {
    let allUsers= await authorsModel.find()
    res.send({msg: allUsers})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthoreData= getAuthoreData