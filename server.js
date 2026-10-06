// 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

function palindrome(word){
  // removes special characters, spaces, regular expression

  let letters = word.replace(/[^A-Z0-9]/ig,"").toLowerCase()

  let reverse = letters.split('').reverse().join('');

  if(letters === reverse){
        return `${word} is a Palindrome`
  } 
    else{
        return `${word} is not Palindrome` 


    }


}
const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
   
  })

  }

// game logic 

  else if (page == '/api') {
    if ('pali' in params) {
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      let userInput = params['pali']
      let outcome = palindrome(userInput)

      

        const objToJson = {
          isPaliOutcome: outcome,
        }


        res.end(JSON.stringify(objToJson));
      }
    }
     //student = leon
    //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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






