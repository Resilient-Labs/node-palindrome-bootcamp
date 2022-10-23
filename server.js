const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    console.log(params);

    // Function will be called based on the path. 
    const readWrite = (file, content) => {
        fs.readFile(file, function(err, data) {
          res.writeHead(200, {'Content-Type': content});
          res.write(data);
          res.end();
        });
    }

    switch(page) {

        case '/':
            readWrite("index.html", "text/html")
            break;
        case '/js/main.js':
            readWrite("js/main.js", "text/javascript")
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function(err, data) {
            res.write(data);
            res.end();
            });
            break;
    
        case '/css/normalize.css':
            fs.readFile('css/normalize.css', function(err, data) {
                res.write(data)
                res.end()
            });
            break;

        case '/api': 

            if('word' in params){

                // Get the query param
                let userValue = params['word']
                console.log(userValue)

                // Function check is a word is palindrome. Returns true or false
                const isPalindrome = (x) => {
                    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
                }

                // Pass in the query parameter the user passed in and check if the word is palindrome. Store the value in a variable to send back to the user
                let result = isPalindrome(userValue)

                // Create an object and respond back to the user
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    palindrome: result // Sends true or false
                }
                res.end(JSON.stringify(objToJson));
            } 
            break;
    }

}).listen(8000);