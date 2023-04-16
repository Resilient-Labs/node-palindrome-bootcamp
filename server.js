const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
 
  else if (page == '/api') {
    if('palindrome' in params){
      console.log(params)
      const word = params.palindrome
      if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          palindrome: "Well there's a palindrome!"
        }
        res.end(JSON.stringify(objToJson));
      }
     
      else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          palindrome: "try another word!"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  
});

server.listen(7020);


