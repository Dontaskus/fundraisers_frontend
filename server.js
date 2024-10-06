const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// the server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url.startsWith('/fundraisers/')) {
        const id = url.split('/')[2]; // Extracting the ID from the URL
        const filePath = path.join(__dirname, 'pages', 'fundraiser.html'); 
        
        // Reading the HTML file for a single fundraiser
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }else if (url.startsWith("/donate/")){
        const filePath = path.join(__dirname, 'pages', 'donate.html'); 
        
        // Reading the HTML file for the donate page
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });

    } else if(url === "/admin"){
        const filePath = path.join(__dirname, 'pages', 'admin.html'); 
        
        // Reading the HTML file for the admin page
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });


    }  else if (url === '/search') {
        const filePath = path.join(__dirname, 'pages', 'search.html'); 
        
        // Reading the HTML file for the search page
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        const filePath = path.join(__dirname, 'pages', 'index.html');
        
        // Reading the HTML file for the main page
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
});
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
