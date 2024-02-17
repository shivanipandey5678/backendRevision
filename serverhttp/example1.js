const http=require("http");

const server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  res.end("Hllo vishal bhai\n")
})

server.listen(3000,"127.0.0.1",()=>{
  console.log("Server running at http://127.0.0.1:3000/")
})

//It starts a server that listens on port 3000 on the local machine (IP: 127.0.0.1).
//You can access the server by opening http://127.0.0.1:3000/ (or http://localhost:3000/) in your browser.
//server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
// The server will bind to 0.0.0.0 by default, which means:
// The server will listen on all available network interfaces of your machine.
// The server will be accessible not only from your machine (localhost) but also from other devices on the same network (such as other computers, phones, etc.).
//It's not always necessary to specify "127.0.0.1" unless you specifically want to restrict access to only your local machine for security or testing purposes.