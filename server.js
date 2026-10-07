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
  } else if (page == '/api') {
    console.log(params);
    const wordInput = params.palindrome;
    const rexWord = wordInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = rexWord.split('').reverse().join('');

    if (rexWord === reversedWord) {
      res.write('Is a palindrome');
    } else {
      res.write('Is not a palindrome');
    }

    res.end();
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});
 
 server.listen(8000); 


