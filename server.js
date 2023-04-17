const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5454;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/generate-palindrome') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const cleanInput = body.toLowerCase().replace(/[^a-z0-9]/g, '');
            const reversedInput = cleanInput.split('').reverse().join('');
            const palindrome = cleanInput + reversedInput;
            res.end(palindrome);
        });

        return;
    }

    let filePath;

    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url.startsWith('main.js')) {
        filePath = path.join(__dirname, 'js/main.js');
    } else if (req.url.startsWith('/styles.css')) {
        filePath = path.join(__dirname, 'css/styles.css');
    } else {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        res.setHeader('Content-Type', filePath.endsWith('.html') ? 'text/html' : (filePath.endsWith('.css') ? 'text/css' : 'text/javascript'));
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
