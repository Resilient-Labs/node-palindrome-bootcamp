const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')

function isItPalindrome(theName){
  if (theName.toLowerCase() == theName.toLowerCase().split('').reverse().join('')){
    return true

  } else {

    return false
  }
}


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
    checkPal = params[`drome`].toLowerCase().split('').reverse().join('')
    if('drome' in params){
      //let checkIt = ''
      if((isItPalindrome(params['drome']))){
        res.writeHead(200, {'Content-Type': 'application/json'});
        if (params['drome'] == checkPal){
           checkIt = 'yes, it is a palindrome!'
        } else {
          checkIt == 'aww, no it is not a palindrome!'
        }
        const objToJson = {
          status: `${checkIt}`
        
        }
        res.end(JSON.stringify(objToJson));
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
         status: "aww, no it is not a palindrome!"
        }

        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
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
  }//else{
    // figlet('404!!', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...');
    //       console.dir(err);
    //       return;
    //   }
    //   res.write(data);
    //   res.end();
    //});
  //}
});

server.listen(2000);
