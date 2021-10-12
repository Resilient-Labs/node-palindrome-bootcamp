const http = require('http');
const fs = require('fs') //module that allows you to read the fle system
const url = require('url'); //allows you to look at the url path to find what needs to be found
const querystring = require('querystring'); //enables us to look at query parameters in our url
const figlet = require('figlet') //allows your 404 to look  little fanciers

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
  }else if (page == '/api') {
    let lowParam = params['word'].toLowerCase()
    const checker = lowParam.split('').reverse().join('')
    let isItPalindrome = lowParam == checker ? 'Why yes: that is a palindrome, indeed is its!' : 'No....No, i\'m sorry but that\'s not a palindrome'
    if('word' in params){
      if(params['word']){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          isPalindrome: isItPalindrome,
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
