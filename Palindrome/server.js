const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page)

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/namegame') {
    if('palindrome' in params){
      const reverse = params['palindrome'].split('').reverse().join('')
      if(params['palindrome'] === reverse){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          display: true
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == '/js/app.js'){
    fs.readFile('js/app.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else {
    console.log('404!!')
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 Not Found')
    res.end()
  }
});

server.listen(7777);
