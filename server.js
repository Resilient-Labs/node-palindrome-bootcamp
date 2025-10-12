const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page, params);
  if (page == '/') {
    console.log("index page")
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    console.log("index page")

    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    console.log("other other")
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  /************ API ************/
  if (page === '/api') {
    console.log('API endpoint reached');
    
    // clean user input
    const userInput = (params.choice || '').toLowerCase().trim();
    console.log(`User input: ${userInput}`);

    // create the palindrome
    const palidrome = userInput.split('').reverse().join('');
    console.log(`Reversed input: ${palidrome}`);

    // compare userinput and palindrome
    const result = userInput === palidrome;

    // create JSON response
    const objToJson = {
      userInput: userInput,
      palidrome: palidrome,
      result: result ? "a palindrome" : "not a palidrome"
    };

    // send JSON response to main js
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(objToJson));
  }

  /**********CSS, main.js & 404 page**************/
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

server.listen(8001, () => console.log('Server listening on http://localhost:8001'));