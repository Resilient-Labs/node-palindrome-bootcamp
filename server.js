const http = require('http');
const fs = require('fs')
const url = require('url');
const queryString = require('querystring')
const figlet = require('figlet')

const server = http.createServer(function (req, res) {

const page = url.parse(req.url).pathname;
const params = queryString.parse(url.parse(req.url).query)

console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if('text' in params){
        if(params['text'].toLowerCase().split('').join('') == params['text'].toLowerCase().split('').reverse().join('') ){
            res.writeHead(200, { 'Content-Type': 'application/json' });
             const objToJson = {
                result: "true",
                outcome: params['text']  
               }
             res.end(JSON.stringify(objToJson));
        }
        else{
            res.writeHead(200, { 'Content-Type': 'application/json' });
             const objToJson = {
                result: "false",
                outcome: params['text'] 
               }
             res.end(JSON.stringify(objToJson));
        }//if-else
    }//text in params
  }//api page
  else if (page == '/css/main.css') {
    fs.readFile('css/main.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
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

server.listen(8000);
