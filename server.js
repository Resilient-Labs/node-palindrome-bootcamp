const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const { loadEnvFile } = require('process');

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
  // If page matches what fetch is, call this else if
  else if (page == '/api') {

    let userInput = params.palindrome
    let cleanUser = userInput.toLowerCase().replace(/[^a-z0-9]/g,"")
    let reverseUser = cleanUser.split('').reverse().join('');
    if(reverseUser === cleanUser ){
     res.write('YOU GOT A PALINDROM')
    // user = leon noel
    // clean = leonnoel
    // reverse =le
    // 
      // Split user input into an array
      // Reverse the array
      // If reverse array is equal to user input
      // it is a PALINDROMEEE
    }
    else{
      res.write("It's not a palindrome")
    }
    res.end()
  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else{
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8000);