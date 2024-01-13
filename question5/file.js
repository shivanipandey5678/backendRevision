const fs=require("fs");
//sync..
fs.writeFileSync("fileform.txt","practicing node module");


//async...
fs.writeFile("fileform.txt","working on async ",(err)=>{
    console.log(err)
})

let ans=fs.readFileSync("./fileform.js","utf-8");
console.log(ans)


