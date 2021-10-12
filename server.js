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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
  if('palindrome' in params){
  let result
  let word = params.palindrome
  let firstHalf = Math.floor(word.length / 2)
  let stringOne = word.substring(0, firstHalf)
  let stringTwo = word.substring(firstHalf, word.length)

  if (word.length % 2 !== 0) {
      stringTwo = word.substring(firstHalf + 1, word.length)
  }

  for (let i = 0; i < firstHalf; i++) {
      let firstLetter = stringOne.charAt(i)
      let lastLetter = stringTwo.charAt((stringTwo.length - 1) - i)
      if (firstLetter !== lastLetter) {
        result = 'Not a palindrome'
      } else {
      result = 'Yep, its a palindrome'
    }
  }




      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        result: result
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

server.listen(7000);
