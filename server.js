//Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
const http = require('http'); 
const fs = require('fs')
const url = require('url');
const querystring = require('querystring'); 

//method to setup the server - request + response
const server = http.createServer(function(req, res){ 

    //gets the url path that was requested by the browser
    const page = url.parse(req.url).pathname; 
    const params = querystring.parse(url.parse(req.url).query); 
    console.log(page); 
    if (page == '/') { 
      fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });//______________________________________________________________________
      //
    }
    else if (page == '/css/style.css') { 
      fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });//______________________________________________________________________
      //
    }
     else if (page == '/js/main.js') { 
      fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });//______________________________________________________________________
      //
    }
     else if (page == '/api') {
      if('palindrome' in params){
        let ogInput = params.palindrome;
        let compareInput = ogInput.toLowerCase();
        let reversedInput = compareInput.split('').reverse().join('');

        if (compareInput === reversedInput) { //is a palindrome
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({ 
            palindrome: true
        })); 

        } else { //is NOT a palindrome
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({ 
            palindrome: false
          }));
        }
        } else { //no input
          res.writeHead(400, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({
            error: 'No palindrome'
          }));
      }
    } else { //error page
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();
    } 
}); 
server.listen(3000);

//user enters a word to check if is a palindrome
//request is sent to /api?palindrome=
//gets palindrome from params
//reverse the string 
//compare the OG input to the REVERSED input
//check if input is a palindrome or not


//take the user input as a string and convert it into an array
//if reverse array is the array