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
          // let conclusion = ''
          let input = params['palindrome']
          let word = `${input}`
          let wordPal = word.toLowerCase().split('').reverse().join('')
          // let conclusion = word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ? 'Yes! A Palindrome' : 'This is NOT what we want!'
          if ( word.toLowerCase() === wordPal) {
            conclusion = 'Yes! A Palindrome'
          } else {
            conclusion = 'This is NOT what we want!'
          }

          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            result: conclusion
          }
          res.end(JSON.stringify(objToJson));
        }//student if
    }//else if
  
    else if (page == '/style.css'){
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
}).listen(5000)
