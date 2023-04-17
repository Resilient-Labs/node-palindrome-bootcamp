const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }else if (page == '/api') {
        if ('name' in params) {
            const name = params['name'];
            if (name === name.toLowerCase().split('').reverse().join('')) {    
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    success: true,
                    result: 'Yes! your name is a palindrome'
                }
                res.end(JSON.stringify(objToJson));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    success: true,
                    result: 'No! your name is not a palindrome'
                }
                res.end(JSON.stringify(objToJson));
            }
        }
    


    }else if (page == '/style.css') {
    fs.readFile('style.css', function (err, data) {
        res.write(data);
        res.end();
    });
} else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
    });
}
    // else {
    //     figlet('404!!', function (err, data) {
    //         if (err) {
    //             console.log('Something went wrong...');
    //             console.dir(err);
    //             return;
    //         }
    //         res.write(data);
    //         res.end();
    //     });
    // }
});

server.listen(8000);