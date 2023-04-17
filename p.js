const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(url === '/') {
        fs.readFile('/index.html', (err, data) => {
            if(err) {
                res.writeHead(500, {'content-type': 'text/html'});
                res.end('<h1> server error</h1>');
            } else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/check-palindrome'){
        let requestBody = '';

        req.on('data', chunk => {requestBody += chunk;});

        req.on('end', () => {
            const inputString = requestBody.trim().toLowerCase();
            const reversedString = inputString.split('').reverse().join('');

            if ( inputString === reversedString ) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("Yes this is a palindrome");
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('this is not a palindrome');
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('<h1> PAGE NOT FOUND </h1>');
    }
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});

