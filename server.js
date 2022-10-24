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

  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/palindrome') {
    
    if('word' in params){
      console.log((params['word']))
      let checkedWord = (params['word'])
      if (params['word'] == checkedWord) {
        //https://medium.com/free-code-camp/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
        let re = /[\W_]/g
        let pure = checkedWord.toLowerCase().replace(re,'')
        
        function reverse(str) {  
          let reversedWord = str.split('').reverse().join('')
          return reversedWord
        }
        const objToJson = {
          word: pure,
          reversed: reverse(pure)
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
        }
       
}
  }

  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  
  else{
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
