//create a server to create req and respond to those
const http = require('http');
//lets us grab files like index.html scc etc
const fs = require('fs')
//look at url
const url = require('url');
//look at any of the query params in the url
const querystring = require('querystring');

const parlinWord = require('./problem');
// console.log(parlinWord('race car'))


const server = http.createServer(function(req, res) {
    //parsing the path of the url let us know where the user is going
    const page = url.parse(req.url).pathname;
    // look for query params in the url
    const params = querystring.parse(url.parse(req.url).query);
    console.log(JSON.stringify(params, null, 2))
    // console.log(page);
    if (page == '/') {
      fs.readFile('index.html', function(err, data) {
        //generate and send the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    } else if (page == '/api') {
        if('reverseWord' in params){
      
        res.writeHead(200, {'Content-Type': 'application/json'});
        let word = params['reverseWord']
        let result = parlinWord(word)
          const objToJson = {
              result: result
            }
          console.log(result)
          console.log(word)
          res.end(JSON.stringify(objToJson));
        } 
    }else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
          res.end();
        });
      }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
    });

      server.listen(3000);