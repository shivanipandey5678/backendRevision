const mongoose=require("mongoose");
const connectDB=require("./config/db");
const express=require("express");
const app=express();
app.use(express.json());
require('dotenv').config()
const PORT=process.env.PORT;
const userController=require("./controllers/user.controller");
// const blogController=require("./controllers/blog.controller");



app.get("/health",(req,res)=>{
    res.send("connnected")
})
app.use("/user",userController);
// app.use("/blog",blogController);
app.listen(PORT,async()=>{
    await connectDB().then(()=>{console.log("connected bro")}).catch(()=>{console.log("errr in conncrtion buddy")})
    console.log(`listening to port : ${PORT}`)
})
