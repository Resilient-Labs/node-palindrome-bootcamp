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
  }else if (page == '/api') {
    if('isPal' in params){
      if(params['ispal'] == 'true'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: "True", 
        }
        res.end(JSON.stringify(objToJson));
   
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: "False", 
        }
        res.end(JSON.stringify(objToJson));
      }
      } 
    }else if (page == '/style.css'){
    fs.readFile('/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
