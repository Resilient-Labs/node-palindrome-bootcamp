const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { join } = require('path');

// document.querySelector('#clickMe').addEventListener("click", flipCoin)
let results


// function flipCoin() {
  results = Math.floor(Math.random() * 2)
  console.log(results)
// }



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
    fs.readFile('otherpage.html', function(
      err, data) {
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
    //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    let userInput = params['word']
    splitWord = userInput.split("")
    reverseArray = splitWord.reverse()
    joinWord = reverseArray.join("")
    //tell user whether or not word is a palindrome
    let sameReverse 
    //just double checking
    console.log(joinWord)
    //compare user input vs reverse
    // if they are the same, sameReversed is true 
    if (userInput === joinWord) {
      sameReverse = true
    }
    //compare user input vs reverse
    // if they are NOT the same, sameReversed is false
    else if (userInput !== joinWord) {
      sameReverse = false
    }
    if('word' in params){
      if(params['word'] === params['word']) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          word: userInput,
          reverse: joinWord,
          match: sameReverse
        }
      
        res.end(JSON.stringify(objToJson));
      }//word = leon
      
    }//word if
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

server.listen(8000);
