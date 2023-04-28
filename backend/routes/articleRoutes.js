var express = require('express');
var router = express.Router();
var article=require("../models/articleSchema");

router.get("/article-list",async(req,res,next)=>{

    try{
        const rec=await article.find({});
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


 module.exports=router;