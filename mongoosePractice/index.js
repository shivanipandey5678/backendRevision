const express=require('express');
const app=express();
const connectDB=require("./config/db")
const port=8000;


app.get("/user",(req,res)=>{
    res.send("het")
})
app.listen(port,async()=>{
    await connectDB()
    console.log(listening)
})