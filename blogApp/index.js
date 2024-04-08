const mongoose=require("mongoose");
const connection=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/blogApp")
    .then(()=>{console.log("Connected to db bro")})
    .catch(()=>{console.log("Error in connection")});
}

const express=require("express");
const app=express();
require('dotenv').config()
const PORT=process.env.PORT;


app.get("/health",(req,res)=>{
    res.send("connnected")
})
app.listen(PORT,async()=>{
    await connection()
    console.log(`listening to port : ${PORT}`)
})
