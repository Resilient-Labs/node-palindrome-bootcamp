const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
// let numberOfComparisons = 0;


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
  else if (page == '/api') {
    console.log(params)
    if ('name' in params) {
      if (params['name']) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          Input: {
            name: params['name'],
          }
        }
        let name = objToJson.Input.name
        let result = {}
        let isPalindrome = false;
        let check = name.split('')
        let reverse = check.reverse().join('')
        if (name.toLowerCase() === reverse.toLowerCase()) {
          isPalindrome = true;
        }

        result = {
          obj1: {
            name: objToJson.Input.name,
            status: isPalindrome
          }
        };

        console.log(result)
        res.end(JSON.stringify(result));

      }//student = leon
      else if (!params['p1'] || !params['p2']) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
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
  }  else {
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
}); server.listen(8000);
