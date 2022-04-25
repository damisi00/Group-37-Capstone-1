const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;
    
    if (urlPath === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('');
    } else if (urlPath === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('');
    } else if (urlPath === '/sys') {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Your OS info has been saved successfully!');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end()
    }
});
server.listen(port, host, () => {
    console.log(`Running at ${host}:${port}`);
});