
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page, params);
    if (page === '/') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (page === '/api') {
        if ('word' in params) {
            const userInput = params['word'];
            const flipIt = userInput.split('').reverse('').join('');
            let isPalindrome = false;
            if (userInput === flipIt) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                userInput: params['word'], isPalindrome 
            }));
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Missing palindrome parameter'
            }));
        }
    }
    else if (page === '/css/styles.css') {
        fs.readFile('css/styles.css', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }
    else if (page.indexOf('/img/') === 0) {
        fs.readFile('.' + page, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Image not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.write(data);
            res.end();
        });
    }
    else if (page === '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('JS not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.listen(8000);