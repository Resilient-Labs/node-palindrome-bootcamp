const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');



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

  else if (page == '/css/styles.css') {
    fs.readFile('css/styles.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    console.log(params)
    let input = params.palindrome
    //input.toLowercase().replace(/[^a-z0-9]/g, '');
    let result = {palindrome: `${input} is not a palindrome`}
    if ('palindrome' in params) {
      if (input === reverse(input)) {
        result.palindrome = `${input} is a palindrome`
        console.log(`${input} is a palindrome`)

      }
      res.write(JSON.stringify(result))
      res.end()
    }
  }
  else {
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

// returns a reversed string: 
function reverse(str) {
  return str.split('').reverse().join('');
}

server.listen(8000);