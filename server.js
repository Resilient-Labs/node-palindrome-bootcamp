const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/check-palindrome') {
        let requestBody = '';

        req.on('data', chunk => {
            requestBody += chunk;
        });

        req.on('end', () => {
            const inputString = requestBody.trim().toLowerCase();
            const reversedString = inputString.split('').reverse().join('');

            if (inputString === reversedString) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("Yes, this is a palindrome");
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('This is not a palindrome');
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});

