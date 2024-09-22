const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// the server
const server = http.createServer((req, res) => {
  
        const filePath = path.join(__dirname, 'pages', 'index.html');
        
        // Reading the HTML file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
 
});
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
