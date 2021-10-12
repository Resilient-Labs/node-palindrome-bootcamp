const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
// function checkPalindrome(word) {
//   console.log('checking word', word, 'backwards', backwardsWord);
//   if (word === backwardsWord) {
//     return true
//   } else {
//     return false
//   }
// }
// let p = checkPalindrome('mom')
// console.log(p);
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
        if('student' in params){
          res.writeHead(200, {'Content-Type': 'application/json'});
          let answer = ''
          let word = params['student'].toLowerCase();
          let backwardsWord = word.split('').reverse().join('')
          if (word === backwardsWord) {
            answer = 'yes this is a palindrome'
          } else {
            answer = 'no this is not a palindrome. try again'
          } const objToJson = {
            finalanswer: answer
          }
          res.end(JSON.stringify(objToJson));
        }
    



    }
    //student = leon
    //   else if(params['student'] != 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }

  //student != leon
  //student if
  //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/JS/main.js') {
    fs.readFile('JS/main.js', function (err, data) {
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