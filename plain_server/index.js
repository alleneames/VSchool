let http = require("http");
const PORT = 8080;

//req = request, res = response
let server = http.createServer((req, res)=>{
    if(req.method === "GET") {
        res.writeHead(200, {"Content-type": "text/html"});
        if(req.url === "/"){
            res.write("<h1>this would be my index.html</h1>");
        } else if(req.url === "/blog") {
            res.write("This would be my blog html");
        }
        res.end();
    }
});

server.listen(PORT);