const mongoose=require('mongoose');
const signSchema=new mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    f_name: {
        type:String,
        required:true
    },
    f_email:{
        type:String,
        required:true,
        unique:true
    },
    f_pass:{
        type:String,
        reuired:true
    },
    file:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('user',signSchema);