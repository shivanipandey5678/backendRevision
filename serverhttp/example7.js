const express=require('express');

let server=express();
server.get('/',(req,res)=>{
    res.send('Hello world')
})

server.listen(3005,()=>{
    console.log("Server is running on port 3005");
})