const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

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
     getApi = "";
    if ("gotPali" in params) {

      for(let i = params["gotPali"].length - 1 ; i >= 0; i --){

        getApi += params["gotPali"][i].toLowerCase();
      }
      console.log("This is the Api")
      console.log(getApi)

      if (params["gotPali"].toLowerCase() == getApi.toLowerCase()) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
       
        const objecto = {
          resultado: "Its a palindrome!",
        }
        res.end(JSON.stringify(objecto))
      }
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        const objecto = {
          resultado: "N O P E",
      }
      res.end(JSON.stringify(objecto))
    }
  }}
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
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
    res.writeHead(404);
    res.end('Not found');
  }
});


server.listen(8000);
