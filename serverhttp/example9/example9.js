const fs=require('fs');
const express=require('express');


const server=express();

server.get("/users",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){;
            
            res.statusCode=500;
            res.setHeader("Content-Type","text/plain");
            res.end("Server Error")
        }else{
            res.statusCode=200;
            res.setHeader("Content-Type","application/json");
         
                res.json(JSON.parse(data)); 
        }
    })
})

server.listen(3008,()=>{
    console.log("at 3008")
})


// const fs = require('fs');
// const express = require('express');

// const server = express();

// server.get("/users", (req, res) => {
//     fs.readFile("./db.json", "utf-8", (err, data) => {
//         if (err) {
//             res.statusCode = 500; // Internal Server Error
//             res.setHeader("Content-Type", "text/plain");
//             res.end("Server Error");
//         } else {
//             res.statusCode = 200; // OK
//             res.setHeader("Content-Type", "application/json");
//             res.json(JSON.parse(data)); // Send JSON response
//         }
//     });
// });

// server.listen(3007, () => {
//     console.log("Server is running on port 3007");
// });
