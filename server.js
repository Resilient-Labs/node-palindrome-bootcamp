const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { reverse } = require('dns');

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);// if this wasn't there then the terminal will be empty
    if (page == '/') { 
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
    }
    else if(page == '/check'){
      if('palindrome' in params){
        // let backwards = params['palindrome'].split('').reverse().join('')
        if (params['palindrome'] === params['palindrome'].split('').reverse().join('')){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            result:'Its a Palindrome'
          }
          res.end(JSON.stringify(objToJson));
      }
      else if(params['palindrome'] !== params['palindrome'].split('').reverse().join('')) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result:'That aint it, try again'
      }
      res.end(JSON.stringify(objToJson));
        }
      }
    }
    else if (page == '/CSS/styles.css'){ //pathway file
        fs.readFile('CSS/styles.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }else if (page == '/JS/app.js'){
        fs.readFile('JS/app.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }else{
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
      }
    });
    
    server.listen(8000);
