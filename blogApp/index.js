const mongoose=require("mongoose");
const connectDB=require("./config/db");
const express=require("express");
const app=express();
require('dotenv').config()
const PORT=process.env.PORT;



app.get("/health",(req,res)=>{
    res.send("connnected")
})
app.listen(PORT,async()=>{
    await connectDB().then(()=>{console.log("connected bro")}).catch(()=>{console.log("errr in conncrtion buddy")})
    console.log(`listening to port : ${PORT}`)
});
