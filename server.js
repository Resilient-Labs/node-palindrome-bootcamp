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
    if('student' in params){
      
        res.writeHead(200, {'Content-Type': 'application/json'});
        checkTheP = params['student'].toLowerCase().split('').reverse().join('');

        if(params['student'].toLowerCase() == checkTheP){
          yesOrNo = "Yes is a palindrome"
          } else {
            yesOrNo = "Not palindrome"
          }
        console.log('params ',params['student'])
        console.log('checkTheP ',checkTheP)

        const objToJson = {
          keepItP: `${yesOrNo}`
        }
        
        res.end(JSON.stringify(objToJson));
        }
      }//student = leon
    
    
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
})


server.listen(2228);

//It checks if the request was made to the '/api' endpoint and if the 'student' parameter is present in the query string of the request.
//If the 'student' parameter is present, it converts its value to lowercase, reverses the order of the characters, and checks if the resulting string is the same as the original string. If it is, it sets the value of the 'yesOrNo' variable to "Yes is a palindrome", otherwise, it sets it to "Not palindrome".
//It creates a JavaScript object objToJson that contains the yesOrNo value.
//It sets the content type of the response to application/json.
//work with baki, joyce, tenzin, victor, jessica