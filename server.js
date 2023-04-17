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
    if('palindrome' in params){
        res.writeHead(200, {'Content-Type': 'application/json'});
        reversed = params['palindrome'].toLowerCase().split('').reverse().join('');

if (params['palindrome'] === "" || params['palindrome'] === null){
        results = "Please enter a word >:("
}
      else if(params['palindrome'].toLowerCase() == reversed){
        results = "It is a Palindrome! :D"
      } else if(params['palindrome'].toLowerCase() != reversed){
        results = "Oopsies, its not a Palindrome :("
      } 
        const objToJson = {
          word: `${results}`,
        
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
    } else if (page == '/css/style.css'){
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

server.listen(8000);
