const express=require('express');
const app=express();

const  personRoute=express.Router();
personRoute.get("/person",(req,res)=>{
    res.send("welcome to person");
})
module.exports=personRoute;

