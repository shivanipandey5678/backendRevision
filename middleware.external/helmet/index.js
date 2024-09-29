const express=require("express");
const helmet=require("helmet");
const app=express();
const port=8001;
const bodyParse=require("body-parser")

//  app.use(helmet({
//     xDownloadOptions:false
//  }));

app.use(bodyParse.json({}));

app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.get("/",(req,res)=>{
    console.log("happy")
    res.send("let ");
    
})

app.listen(8002,()=>{
    console.log("at 8002 dude")
})