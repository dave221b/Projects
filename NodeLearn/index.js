const http = require("http")
const fs = require("fs")

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./home.html", "utf-8")

console.log(__filename);

const server = http.createServer((req, res, next) => {
    console.log(req.url);
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }
    if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    if(req.url === "/Details"){
        res.end("<h1>Details Page</h1>")
    }
    if(req.url === "/"){
        res.end(home)
    }
    else{
        res.end("<h1> Error:404 Page Not Found")
    }
})

server.listen(2000, "localhost" , () => {
    console.log(`Server is running at http://${hostname}:${PORT}`)
})