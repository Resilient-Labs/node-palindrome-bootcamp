const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if ('palindrome' in params) {
      const word = params['palindrome'].toLowerCase();
      const checkPalindrome = word.split('').reverse().join('');

      let yesOrNo;

      if (word === checkPalindrome) {
        yesOrNo = 'yes';
      } else {
        yesOrNo = 'no';
      }

      const objToJson = {
        yesOrNo: yesOrNo
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(objToJson));
    }
  }

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('CSS file not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('JavaScript file not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else {
    figlet('404!!', function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        res.writeHead(500);
        res.end('Server error');
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
