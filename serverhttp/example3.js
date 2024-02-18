const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`
        <!DOCTYPE html>
          <html>
            <head>
              <title>Home Page</title>
            </head>
            <body>
              <h1>Welcome to the Home Page</h1>
            </body>
          </html>
        `)

})


server.listen(3002,()=>{
    console.log("Server is listening on port 3002");
})