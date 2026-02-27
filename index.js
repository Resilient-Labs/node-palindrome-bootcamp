const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function(req,res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query); //gives an object from the fetch
    // console.log(params)
    console.log(page)
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if (page == '/palindrome') {
        if (params['word']) {   //what url would I expect to hit this part of the server?
            const pali = params['word'].split('').reverse().join('')    //  reverse the word
            
            const answer = params['word'] === pali ? 'yes' : 'no';      //return the answer based off the result

            res.writeHead(200, {'Content-Type': 'text/text'});
            res.end(answer)

            // res.end(params['word']===params['word'].split('').reverse().join('')? 'yes':'no')
        }
    }
    else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
        });
    }
    else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        })
    }
})

server.listen(8001);

//have an input on the html
//wait for button click
//collect the input as a query parameter
//split the string into an array

//if the arrays match? send yes : no
//update the DOM