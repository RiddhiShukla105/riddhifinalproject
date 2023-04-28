const mongoose=require('mongoose');
const articleSchema=new mongoose.Schema({
    ftopic:{
        type:String,
        required:true
    },
    fdesc:{
        type:String,
        required:true
    },
    farticle:{
        type:String,
        required:true,
        unique:true
    }
})
module.exports=mongoose.model('article',articleSchema);