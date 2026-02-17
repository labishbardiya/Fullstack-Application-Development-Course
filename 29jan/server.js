const http = require('http');
const fs = require("fs");

const hs = fs.readFileSync("index.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.end(hs);
});

server.listen(11000, () => {
    console.log('Server is running at http://localhost:11000');
});

