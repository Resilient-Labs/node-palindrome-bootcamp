const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/palindrome') {
    const userInput = params['word'].toLowerCase().trim()
    const strReverse = userInput.split('').reverse().join('')
    const status = userInput === strReverse ? 'Palindrome' : 'Not a palindrome' //? if userInput is true then return pal ELSE return not

    res.writeHead(200, { 'Content-Type': 'application/json' }); //send content to client side that is json 
    const objToJson = {
      status: status //dynamic. the second status is from the tern operator 
    }
    res.end(JSON.stringify(objToJson)); //end response but send my json file as a string to client side 
  }

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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