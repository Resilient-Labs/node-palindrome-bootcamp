const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log("url", req.url)
  const params = querystring.parse(url.parse(req.url).query);// input
  console.log("params", params)
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
 
  
  else if (page == '/api') {
    if('input' in params){
      if(params['input'] == params['input'].split('').reverse().join()){// basically declaring the value of the input.
        res.writeHead(200, {'Content-Type': 'application/json'});
        let result = 'yes' 
        res.end(JSON.stringify(result));
        
      }//student = leon
      
      else if(params['input'] != params['input'].split('').reverse().join()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let result = 'no'
        
        res.end(JSON.stringify(result));
      }//student != leon
    }//student if
  }//else if
  
  else if (page == '/css/style.css'){
    fs.readFile('/css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('/js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  

  else{
    figlet('404!!', function(err, data) { // 
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
