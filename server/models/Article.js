const mongoose=require('mongoose')
const articlerSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
body:{
    type:String,
},
active:{
    type:Boolean,
    default:false
}
},
{
    timestamps:true
})
module.exports=mongoose.model('Article',articlerSchema)