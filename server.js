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
      console.log(data)
      res.end();
    });
  }
  else if (page == '/api') {
    // checks if input is in the URL parameter
    if('input' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});

      // assign input to variable named 'str', brack notation is used for special characters
      let str = params['input']
      // assign Reg Ex to variable named 're'. Regular expressions are a sequence of characters that are used for matching character combinations in strings for text matching/searching.
      let re = /[^A-Za-z0-9]/g;

      // if inputs are strings, set it to lowercase then replace all characters that match the Reg Ex, if there is a match, the character will be replaced with an empty string. Ex: original string = 'Chicken Tender' >>> new string = 'chickentender'
      let checkStr = str.toLowerCase().replace(re, '')

      // takes new value of checkStr and calls split('') method on it which turns each character in the string into individual elements in an array. Ex: original string = 'chickentender' >>> new string = ["c", "h", "i", "c", "k", "e", "n", "t", "e", "n", "d", "e", "r"]. Afterwards, reverse() method is then called, which reverse the order of elements in the array. Ex: ["r", "e", "d", "n", "e", "t", "n", "e", "k", "c", "i", "h", "c"]. Finally, join('') method is called to creates and return a new string by concatenating all of the elements in the array. Ex: "rednetnekcihc"
      const newStr = checkStr.split('').reverse().join('');

      // declare variable that holds boolean value, which will be used to print true/false to DOM
      let isTrue = null

      // run conditional that compares newStr ("rednetnekcihc") to checkStr ("chickentender"), if condition is true, value of isTrue becomes 'true', if condition is false, value of isTrue becomes 'false'
      if (newStr === checkStr){
        // document.getElementById('result').innerText= "it's a palindrome"
        isTrue = true
      }
      else{
        // document.getElementById('result').innerText="it's not a palindrome"
        isTrue = false
      }

      // value of isTrue is set as an object property for objToJson
      const objToJson = {
        isPali: isTrue,
        originalWord: checkStr,
        reverseWord: newStr

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

server.listen(4000);