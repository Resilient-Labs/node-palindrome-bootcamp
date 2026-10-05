
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


const checkIfPalindrome = (str) => {
    if (!str) return false;
    const shesAStringWhoIsHandled = str.toLowerCase().replace(/[^a-z0-9]/g, '');
return shesAStringWhoIsHandled === shesAStringWhoIsHandled.split('').reverse().join('')
};

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query); 
    console.log(page)

    if (page == '/') {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(data); 
            res.end()
        });
    } else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function (err, data){
            res.writeHead(200, {'Content-Type': 'text/css'}); 
            res.write(data), 
            res.end();
        });
    }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function (err, data){
            res.writeHead(200, {'Content-Type': 'text/javascript'}); 
            res.write(data);
            res.end();
        });

    }else if (page == '/api'){
        if('palindrome' in params){
            const word = params['palindrome']; 
            const isPal = checkIfPalindrome(word);
            res.writeHead(200, {'Content-Type': 'application/json'}); 
            res.end(JSON.stringify({ 
                word: word,
                isPalindrome: isPal
        }));
}}
}); 

server.listen(9000)


