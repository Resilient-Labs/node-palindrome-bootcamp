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
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    if ('palindrome' in params){
      const textCheck = params['palindrome'];

      function palindrome(){
        //1. turn string back to regualr ones - remove all the special char, space etc 
        const removeChar = textCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const textReverse = removeChar.split('').reverse().join('');

        if (removeChar === '') {
          return `please enter something`
        }else if(removeChar == textReverse) {
          return `${textCheck} is a palindrome!`
        }else if(removeChar !== textReverse){
          return `${textCheck} is not a palindrome!`
        }
        
      }
      const result = palindrome(textCheck);
      const objToJson = {
        result:result
      }
    res.end(JSON.stringify(objToJson));
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

server.listen(8000);
