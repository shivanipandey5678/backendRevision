const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        const filepath=path.join('serverhttp','example2.js');
        fs.readFile(filepath,(err,data)=>{
            if(err){
                res.statusCode=500;
                res.setHeader('Content-Type',"text/plain");
                res.end('Server Error')
            }else{
                res.statusCode=200;
                res.setHeader('Content-Type',"text/plain");
                res.end(data);
            }
        })

    }else{
        res.statusCode=404;
        res.setHeader('Content-Type',"text/plain");
        res.end('NOT FOUND');

    }
})

server.listen(3004,()=>{
    console.log("Server is listening on port 3004");
 
})