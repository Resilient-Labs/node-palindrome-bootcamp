
//create server
    //what is the request for? 
        //css? or palindrome 

//receive request 
    //parse url for params
        //request for / ?
        // request for palindrome?

//respond with some JSON

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {

function reverseString(str){
    return str.split("").reverse().join("")
}

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
      if(params['palindrome'] == reverseString(params['palindrome'])){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "This is a palindrome!"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "This is not a palindrome"
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

server.listen(8000);
