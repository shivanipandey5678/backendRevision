const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
