//http to create server
//fs to read index.html file
//if statement to check if word is a palindrome (reverse string)
//send json back? res.end?

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res){
    const parsedUrl = url.parse(req.url);
    const page = parsedUrl.pathname;
    const query = querystring.parse(parsedUrl.query); 
    // const params = querystring.parse(url.parse(req.url).query)
    // console.log(page);
    if(page === '/'){
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, function(err, data){
            if(err){
                res.writeHead(500);
                res.end('Error loading HTML file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end()
            }
        });
    }else if (page === '/css/style.css') {
        const filePath = path.join(__dirname, 'css/style.css');

        fs.readFile(filePath, function(err, data){
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        })
    }else if(page === '/js/main.js') {
        const filePath = path.join(__dirname, 'js/main.js');

        fs.readFile(filePath, function(err, data){
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        })
    }else if(page === '/palindrome'){

        let word = undefined;
        if(query.word){
            word = query.word.trim().toLowerCase();
        } //check to see if query.word is truthy and is lowercase and no spaces

        let isPalindrome = false;
        if(word){
            isPalindrome = word === word.split('').reverse().join('');
        } //reverses string

        let objToJson = {
            word: word,
            isPalindrome: isPalindrome
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(objToJson));
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
})

server.listen(8000);