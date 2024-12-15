require("dotenv").config()
const express=require("express")
const cors=require("cors")

const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT ||1000
const app=express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/tasks",require("./routes/task"))
app.use("/api/articlee",require("./routes/article"))
app.get("/",(req,res)=>{
    res.send("mally baran")
})

mongoose.connection.once('open',()=>{
    console.log("success")
    app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)})
})

mongoose.connection.on('error',arr=>{
    console.log("error")
})
