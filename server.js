// worked with Michael Kazin on this

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname; // req.url is the source of information or fetch in this case
  const params = querystring.parse(url.parse(req.url).query); // url parsing again -- taking the query string off the URL and passing that to querystring.parse
  console.log(page); // logging every page that the user gets into -- this would be seen within the terminal, if it wasn't there, the terminal would be empty
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } // 
  else if (page == '/api') {
    // did the user give us the information we need?
    if ('palindrome' in params) {
      console.log(params)
      // grab the value from the query string
      const stringInput = params.palindrome
      if (stringInput.toLowerCase() === stringInput.split('').reverse().join('').toLowerCase()) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          palindrome: "yes, it's a palindrome!",
        }
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          palindrome: "no, it's not a palindrome",
        }
        res.end(JSON.stringify(objToJson));
      }


    }//palindrome if
  }//else if
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

server.listen(8008);
