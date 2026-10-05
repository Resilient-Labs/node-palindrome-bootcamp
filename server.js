const path = require('path');
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { reverse } = require('dns');
//crea el servidor
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
      console.log('entra al API')
      reverseCadena='';
      //verifica que el parametro sea palindrome 
          if('palindrome' in params){
            //reverse the word or phrase 
             for(let i=params['palindrome'].length-1; i>=0 ;i--){
              reverseCadena += params['palindrome'][i].toLowerCase();
            }
            //compare the input with the reverse
            if(params['palindrome'].toLowerCase() == reverseCadena){
              res.writeHead(200, {'Content-Type': 'application/json'});
            
              const objToJson = {
                results: `It's palindrome!`,
              }
              res.end(JSON.stringify(objToJson));
            }
            else{
              res.writeHead(200, {'Content-Type': 'application/json'});
              const objToJson = {
                results: `Not palindrome!`,
              
              }
              res.end(JSON.stringify(objToJson));
            }
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
      }else if (page.startsWith('/img')){
        const imagePath = '.' + page;
        const ext = path.extname(imagePath).toLowerCase();
        const mimeTypes = {
          '.gif': 'image/gif',
          '.png': 'image/png',
          '.jpg': 'image/jpeg'
        }
        fs.readFile(imagePath, function(err, data) {
          res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
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