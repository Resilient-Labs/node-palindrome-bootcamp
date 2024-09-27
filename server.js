const http = require('http');
const fs = require('fs')
const url = require('url');
const port = process.env.PORT || 8000
const querystring = require('querystring');
const figlet = require('figlet')

console.log('this is the port', port)

const server = http.createServer(function(req, res) {
  console.log('create server')
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log('This is the page for', page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    if('word' in params){
       let userInput = params['word']
       let reverseWord = ""
      console.log(userInput)
       for(let i = userInput.length - 1; i >= 0; i--){
          reverseWord += userInput[i]
       }

      if(params['word'] == reverseWord){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: reverseWord,
          status: `${params['word']} is ${reverseWord} backwards`,
          currentOccupation: "It's a Palindrome! Nice!"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['word'] != reverseWord){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: reverseWord,
          status: `${params['word']} is ${reverseWord} backwards`,
          currentOccupation: "It's not a Palindrome, silly!"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
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

console.log('About to listen on', port)

server.listen(port, '0.0.0.0');
