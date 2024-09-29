const express=require("express");
const fs=require("fs");
const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    fs.readFile("./db.json","utf8",(err,data)=>{
        if(err){
            res.status(500).json({message:"Server Error"});
            return;
        }
        const users = JSON.parse(data).users;
        res.json(users);
    })
})

app.post("/users",(req,res)=>{
    fs.readFile("./db.json","utf8",(err,data)=>{
        if(err){
            res.status(500).json({message:"reading issue"});
            return;
        }
        const users=JSON.parse(data).users;
        const newUser=({id:Date.now(),...req.body});
        users.push(newUser);
    fs.writeFile("./db.json",JSON.stringify({users}),(err)=>{
        if(err){
            res.status(500).json({message:"writing issue"});
            return;
        }
        res.status(201).json(newUser);
    })
    })
})

app.put("/user/:id",(req,res)=>{
    fs.readFile("./db.json","utf8",(err,data)=>{
        
    }
})
