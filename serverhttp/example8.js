const express= require('express');

const server=express();
server.get('/users',(req,res)=>{
    res.json({message:"Get all users"})
});

server.post("/users",(req,res)=>{
    res.json({message:"Create a new user"})
})

server.listen(3006,()=>{
    console.log("Server is running on port 3006");
})