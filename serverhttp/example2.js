const http = require("http");

const server=http.createServer((req,res)=>{
    if(req.method==="GET"){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('GET request')
    }else if(req.mathod==='POST'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("POST request received");

    }

    server.listen(3001,()=>{
        console.log("Server is listening on port 3000");
    })
})