var express = require('express');
var router = express.Router();
var login=require("../models/loginSchema");


 router.get("/login",async(req,res,next)=>{

    try{
        const rec=await login.find({});
        // console.log(rec)
        if(rec)
        {
            return res.status(200).send(rec)
        }
        else
        {
            return res.status(200).send({'message':'Data not found'})
        }
    }
    catch(error)
    {
        return res.status(500).send(error)
    }
 })

 module.exports = router;