//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
const PORT = process.env.PORT || 8000;
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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
    if('text' in params){
        res.writeHead(200, {'Content-Type': 'application/json'}); //200 is the HTTP response when it's good
        function palinCheck(str){
            if(!str){
                return {answer: "Oh no! Input is empty"};
            }else if(str.toLowerCase().split("").reverse().join("") == str.toLowerCase()){
                return {answer: "It IS a Palindrome"};
            }else{
                return {answer: "NOT a Palindrome"};
            }
        }
        res.end(JSON.stringify(palinCheck(params.text)));
      }
    }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
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
});

server.listen(PORT);
