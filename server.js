const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

 function checkPalindrome(str){
        // removes special characters, spaces and makes lowercase. regular expression
        let removeLetters = str.replace(/[^A-Z0-9]/ig,"").toLowerCase()
        //get the reversed word
        let reversedWord = removeLetters.split('').reverse().join('')

        if (removeLetters === reversedWord){

          return (`${str} is a Palindrome`)
   }else {
           return(`Boooooo ${str} is not a Palindrome`)
   }
  }

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
     userInput =  params['palindrome']// document.querySelector('#wordHere').value
         
  let result = checkPalindrome(userInput)
        const objToJson = {
          answer:result,
        }
        res.end(JSON.stringify(objToJson));
      }else {
        res.writeHead(400, {'Content-Type':'application/json'});
        res.end(JSON.stringify({error:'Missing palindrome param'}))
      }
    }
  
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    
  }else if (page == '/crossword.jpg'){
    fs.readFile('crossword.jpg', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  } else if (page == '/palindrome.js'){
    fs.readFile('palindrome.js', function(err, data) {
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
