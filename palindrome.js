const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('word' in params){
      if( params['word'].toLowerCase() == params['word'].toLowerCase().split('').reverse().join('') ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          palindrome: "Is a palindrome"
        }
        res.end(JSON.stringify(objToJson));
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          palindrome: "Is not a palindrome"
        }
        res.end(JSON.stringify(objToJson));
      }
    }//word if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main02.js'){
    fs.readFile('main02.js', 'utf8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/images/waldemar-brandt-U3Ptj3jafX8-unsplash.jpg') {
    fs.readFile('css/images/waldemar-brandt-U3Ptj3jafX8-unsplash.jpg', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(data);
    res.end();
    });
  }
});

server.listen(8000);
