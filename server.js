// require means import  (http / fs/ querystring = moudules)
const http = require('http');  // var 
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
      res.write(data);   //data from request adding to the response object 
      res.end();
    });
  }
  
  else if (page == '/api') {

    if ('palindrome'in params){
     const userInput = params['palindrome'] 
     let firstHalf = Math.floor(userInput.length / 2)
     let stringOne = userInput.substring(0, firstHalf)       // 
     let stringTwo = userInput.substring(firstHalf, userInput.length)
    let result = " its a palindrome"
 
     if (userInput.length % 2 !== 0) {
         stringTwo = userInput.substring(firstHalf + 1, userInput.length)
     }
 
     for (let i = 0; i < firstHalf; i++) {
         let firstLetter = stringOne.charAt(i)
         let lastLetter = stringTwo.charAt((stringTwo.length - 1) - i)
         if (firstLetter !== lastLetter) {
             result = "not palindrome"
         }}
     res.writeHead(200, {'Content-Type': 'application/json'});
     const objToJson = {
      palindrome: result
      
      ///
    }

     res.end(JSON.stringify({objToJson}));
    }
    // There is a method three split""" reverse(fliparound) join(arraysmacktogetherj) want to use for plindrome combation compare word= 
  }//else if
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('main.js', function(err, data) {
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

server.listen(8000); // port listen any server  
