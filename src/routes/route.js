const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook",async (req,res)=>{
    let data=req.body;
    let saveData=await bookModel.create(data);
    res.send({msg:saveData})
  })
  
  router.get("/getbook",async (req,res)=>{
    let allBook=await bookModel.find()
    res.send({msg:allBook})
  })

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;
