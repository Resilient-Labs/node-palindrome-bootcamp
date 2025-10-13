const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs')
const figlet = require('figlet')

// console.log('hello world!')

// <!-- Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side. -->

// enter in a word to see if the word is a palindrome

// let string = deed

function isPalindrome(str) {

    if (str === str.split('').toReversed().join(''))
        return 'true'
    else return 'false'
}
// const url = `/isPal?q=${string}`

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
        return
    } else if (page == '/isPal') {
    
            res.write(isPalindrome(params['q']));
            res.end();

        
    }
    else if (page == '/css/styles.css') {
        fs.readFile('css/styles.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }

    // console.log(page);
    // console.log('hello world!')
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('hello');
    // res.end();
});
server.listen(8000);





// console.log(isPal(string))

// completed with the help of Mentor Michael Kazin