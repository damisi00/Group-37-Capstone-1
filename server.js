const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 5037;

const server = http.createServer((req, res) => {
    const urlPath = req.url;
    const os = require('os');
    const host = os.hostname();
    const pform = os.platform();
    const arch = os.arch();
    const cpus = os.cpus();
    const network = os.networkInterfaces();
    const uptime = os.uptime();
    const osinfo = JSON.stringify({
        hostname: host,
        platform: pform,
        architecture: arch,
        numberOfCPUS: cpus,
        networkInterfaces: network,
        uptime: uptime
    });
    if (urlPath === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./pages/index.html', function(err, data) {
            if (err){
                res.writeHead(err);    
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (urlPath === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./pages/about.html', function(err, data) {
            if (err){
                res.writeHead(err);    
            } else {
                res.write(data);
            }
            res.end();
        });
       
    } else if (urlPath === '/sys') {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        fs.writeFile('./osinfo.json', `${osinfo}`, function(err) {
            if (err){
                res.writeHead(err);
            } else {
                res.end('Your OS info has been saved successfully!');
            }
        });
        
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./pages/404.html', function(err, data) {
            if (err){
                res.writeHead(err);    
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});
server.listen(port, host, () => {
    console.log(`Running at ${host}:${port}`);
});