const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

http.createServer(function( req, res ) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query);

if ( page == '/' ){
    fs.readFile('index.html', function ( err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }else if (page == '/api') {
        if('palindrome' in params){
          // set variables
          let conclusion = ''
          let input = params['palindrome'] // [another way to show object]
          let word = `${input}`
          let wordPal = word.toLowerCase().split('').reverse().join('')

          // conditionals for palindrome - if the input === wordPal variable the result is yes. If it does not it is no. 
          if (word.toLowerCase() === wordPal) {
            conclusion = 'Yes! This is a Palindrome'
          } else {
            conclusion = 'This is NOT what we want! Try again'
          }

          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            result: conclusion
          }
          res.end(JSON.stringify(objToJson));
        }
    }else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
    });
}
}).listen(1111)

// local host: 1111