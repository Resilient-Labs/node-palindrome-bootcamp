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
  
  // Server receives the query parameter, converts it to lowercase, reverses it with split(), reverse(), and join(), compares the two strings, and sends the result back to JSON.

  else if (page == '/api') {
    if('palindrome' in params){
      const word = params['palindrome'].toLowerCase()
      const checkPalindrome = word.split('').reverse().join('')

      let yesOrNo

      if(word === checkPalindrome){
        yesOrNo = 'yes'
      }else{
        yesOrNo = 'no'
      }

      const objToJson = {
        yesOrNo: yesOrNo
      }

      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(objToJson))
      
      }
    }


  else if(page == '/css/normalize.css'){
    fs.readFile('css/normalize.css', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/css'})
      res.write(data)
      res.end()
    })
  }
    
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'})
      res.write(data)
      res.end()
    })
  }
  
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data)
      res.end()
    })
  }
  
  else if (page == '/img/mirror-background.jpg'){
    fs.readFile('img/mirror-background.jpg', function(err, data){
      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      res.write(data)
      res.end()
    })
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
