
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    console.log(page);

    if (page == '/') {
        fs.readFile('palindrome.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/checkIfPalindrome') {
        let result = "";
        let input = params['input'];
        let reverseInput = input.split('').reverse().join('');
        if (input === reverseInput) {
            result = input + ` is a palindrome!`;
        } else {
            result = input + ` is not a palindrome.`;
        }

        res.writeHead(200, { 'Content-Type': 'text/text' });
        res.end(result);
    } else if (page == '/style.css') {
        fs.readFile('style.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (page == '/palindromeJS.js') {
        fs.readFile('palindromeJS.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});