const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const parsedURL = url.parse(req.url);
  const page =parsedURL.pathname;
  const params = querystring.parse(parsedURL.query);
  console.log(params, 'params');
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } 
  
  else if (page == '/api') {
    if('word' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      checkParam = params['word'].toLowerCase().split('').reverse().join('')
      console.log(checkParam)

      if(params['word'].toLowerCase() == checkParam){
        yesOrNo = "Yes!"
      }else{
        yesOrNo = "No!"
      }
        const objToJson = {
          success: 'okay',
          result: `${yesOrNo}`
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

server.listen(8000);


  


 