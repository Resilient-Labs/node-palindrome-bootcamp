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
 else if (page == '/api') {
 if(params['palindrome']){
  const reversedText = params['palindrome'].split("").reverse().join("");
  res.writeHead(200, {'Content-Type': 'text/text'}); //reversing the text
  res.end(reversedText)
 }

  
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/client.js'){
    fs.readFile('client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
 
  }
});

server.listen(8001);