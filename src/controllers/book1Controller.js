const book1Model= require("../models/book1Models")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await book1Model.create(data)
    res.send({msg: savedData})
}

const getAuthorBook= async function (req, res) {
    let allUsers= await book1Model.find()
    res.send({msg: allUsers})
}

module.exports.createBooks= createBooks
module.exports.getAuthorBook= getAuthorBook