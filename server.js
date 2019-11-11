const http = require('http');
//retrieves files from the http
const fs = require('fs');
//retrieves files from the file system
const url = require('url');
const querystring = require('querystring');
//retrieves the url link
const figlet = require('figlet');


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
    if('test' in params){
      if(params['test'].trim().toLowerCase()== params['test'].trim().toLowerCase().split("").reverse().join("")){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj = {
          result: "This is a palindrome"
        }
        res.end(JSON.stringify(obj));
      }//student = leon
      else if(params['test'].trim().toLowerCase()!== params['test'].trim().toLowerCase().split("").reverse().join("")){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj = {
          result: "This is not a palindrome"
        }
        }
        res.end(JSON.stringify(obj));
      }//student != leon
    }//student if
//else if
  else if (page == '/style/style.css'){
    fs.readFile('style/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
})
server.listen(3000);
