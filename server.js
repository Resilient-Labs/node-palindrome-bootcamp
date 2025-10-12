const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const figlet = require('figlet');

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url).path;
    const params = querystring.parse(url.parse(req.url).query);
    //Routing
    if (myUrl === '/') {
        fs.readFile("index.html", (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    } else if (myUrl === '/styles') {
        fs.readFile('css/style.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl === '/reset') {
        fs.readFile('css/reset.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl === '/main') {
        fs.readFile('js/main.js', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(data);
        })
    } else if (myUrl.startsWith('/palindrome')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        console.log(params.word);
        const result = {
            word: params.word,
            palindrome: isPalindrome(params.word)
        };
        res.end(JSON.stringify(result));
    }else {
        figlet('404!!', function (error, data) {
            if (error) {
                console.log('Something went wrong...');
                console.dir(error);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);

function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j])
            return false;
    }
    return true;
}