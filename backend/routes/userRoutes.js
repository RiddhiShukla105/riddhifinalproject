var express = require('express');
var router = express.Router();
const path=require('path');
var sign=require("../models/signSchema");
const multer=require('multer');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require('jsonwebtoken');
const jwtsecret="9999777ggvv666nhhhhh";




//for upload 
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})


 router.get("/sign-list",async(req,res,next)=>{

    try{
        const rec=await sign.find({});
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
    // router.post("/sign-list",async(req,res,next)=>{
    //     // console.log(req.body);
    //     // console.log(req.body.f_email);
    //     const email=req.body.f_email;
    //     try {
    //         const sign_data=new sign({
                
    //             f_name:req.body.f_name,
    //             f_email:req.body.f_email,
    //             f_pass:req.body.f_pass,
    //         }) 
            
    //         const recData= await sign.findOne({'f_email':email});
    //         if(!recData)        
    //         {
    //             const rr=sign_data.save();   
    //             if(rr)
    //             {
    //                 return res.status(200).send({'message':'Sign Up Details Save SuccesfullY !','error':0})
    //             }
    //         }
    //         if(recData.f_email==email)
    //         {
    //             return res.status(200).send({'message':'Email Id all reday Exits !','err':1})
    //         }
    //     }
    //     catch(error)
    //     {
    //         return res.status(500).send(error)
    //     }
    
    // })


    router.post("/sign-list",(req,res,next)=>{
    // console.log(req.body);
    let upload=multer({storage:storage}).single('attach');
    upload(req,res,(err)=>{
        if(err){
            // res.json({'err':1,'msg':'Some Uploading Error'})
            console.log("Not Uploaded");
        }
        else {
            // console.log("uploaded");
            // console.log(req.body);
            let c_pass=req.body.f_pass;
            const hash = bcrypt.hashSync(c_pass, saltRounds);
            // console.log(hash);
            const sign_data=new sign({
                f_name:req.body.f_name,
                f_email:req.body.f_email,
                f_pass:hash,
                file:req.file.originalname



    }) 
    const recived=sign_data.save();

    if(recived)
            {
                return res.status(200).send({'message':'Sign SuccesfullY ','err':0})
            }
            else
            {
                return res.status(200).send({'message':'Sign Not Succesfully','err':1})
            }

        }
    })
    })

    // router.post("/login",async(req,res,next)=>{
    //     console.log(req.body);
    //     user=req.body.user_email;
    //     pass=req.body.user_pass

    //     try{
    //         const rec=await sign.findOne({f_email:user});
    //         console.log(rec)
    //         if(rec)
    //                {
    //                 console.log(rec.pass);
    //                     console.log("success");
    //                 if(bcrypt.compareSync(pass, rec.pass)){
    //                     console.log("hello");
    //                                 let payload={uid:user};
    //                                 console.log(payload)
    //                                 let token=jwt.sign(payload,jwtsecret,{expiresIn:360000});
    //                                res.json({"err":0,"msg":"Login Successfull","token":token})
    //                             }
    //                             else {
    //                                 res.json({"err":1,"msg":"email or password is not correct"});
    //                 }
    
    //                 }
    //     }
    //     catch(error)
    //     {
    //         return res.status(500).send(error)
    //     }
    // })

    router.post("/logindata",async(req,res,next)=>{
        // console.log(req.body);
        user=req.body.username;
        pass=req.body.password;
        try{
                    const rec=await sign.findOne({f_email:user});
                    // console.log(rec)
                    // console.log(rec.f_pass);
                    if(rec)
                           {
                            // console.log(rec.pass);
                                // console.log("success");
                            if(bcrypt.compareSync(pass, rec.f_pass)){
                                // console.log("hello");
                                            let payload={uid:user};
                                            // console.log(payload)
                                            let token=jwt.sign(payload,jwtsecret,{expiresIn:360000});
                                           return res.json({"err":0,"msg":"Login Successfull","token":token})
                                        }
                                        else {
                                            return res.json({"err":1,"msg":"email or password is not correct"});
                            }
            
                            }
                }
                catch(error)
                {
                    return res.status(500).send(error)
                }
    })

    router.delete("/sign-list/:id",async(req,res,next)=>{
        //    console.log(req.params.id)
        try{
            const rec=await sign.findByIdAndDelete({'_id':req.params.id});
            if(rec)
            {
                return res.status(200).send({'message':'record deleted succesfully','err':0})
            }
            else{
                return res.status(200).send({'message':'record not deleted succesfully','err':1})
            }
    
        }catch(err)
        {
            res.status(500).send(error)
        }
    })


module.exports = router;