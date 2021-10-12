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
  
  else if (page == '/api') {
        
        let lowParam = params['student'].toLowerCase()
        const checker = lowParam.split('').reverse().join('')
        let isItPalindrome = lowParam == checker ? 'Yes, it is!' : 'No, it is not!'
        if('student' in params){
       if(params['student']){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          isPalindrome: isItPalindrome,
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
    }//student if
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if(page == '/pic/back.jpg'){
    fs.readFile('pic/back.jpg', function(err, data){
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
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
})

server.listen(8000);