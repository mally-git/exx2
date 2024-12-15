const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)

    }catch (arr){
        console.error("****error"+arr)
    }
}
module.exports=connectDB