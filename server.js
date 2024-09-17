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
  //here we check if we are actually in the endpoint /api if so we proceed 
  else if (page == '/api') {

    //here we take the parameter that holds the input value and store it into a variable
    const input = params.input

    //This globally matches all non-word characters and underscores in a given string
    let global = /[\W_]/g;

    //we then covert the input to lowercase so its not case sensitive
    let cleanedStr = input.toLowerCase().replace(global, '');

    //here we take the lowRegStr variable split it into individual characters then reverse it and then join all the characters into one again
    //we then store that into the revereseStr variable
    let reverseStr = cleanedStr.split('').reverse().join(''); 

    //we then check if the string reversed is the same as the original user input then that is a palindrome 
    if(reverseStr === cleanedStr){
      result =  'This is a Palindrome'
    } else {
      //if it is not equal it is not a palindrome
      result = 'This is NOT a Palindrome'
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {
      output: result
    }
    res.end(JSON.stringify(objToJson));
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

