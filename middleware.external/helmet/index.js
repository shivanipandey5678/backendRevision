const express=require("express");
const helmet=require("helmet");
const app=express();
const port=8001;
const bodyParse=require("body-parser")

//  app.use(helmet({
//     xDownloadOptions:false
//  }));

app.use(bodyParse.json());

app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.get("/",(req,res)=>{
    res.send("let see your strength");
})

app.listen(8002,()=>{
    console.log("at 8002 dude")
})