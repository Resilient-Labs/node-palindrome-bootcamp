const http = require('http');//telling server to get access to network
const fs = require('fs')// is giving server access to your local files
const url = require('url'); // the url is the url
const querystring = require('querystring');// is the paramater of the url
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


else if (page == '/api') { // this is what we will use for the fetch call
  
  function check (userString){
    let reverse = userString.split("").reverse().join("")
    console.log(userString,'reverse',reverse)
      if(userString === reverse) {
        return true
      }
        else {
          return false
        }
    }

    if('stringFromUser' in params){
       let answer = check(params['stringFromUser'])
       if (answer === true ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: true,         
        }
        res.end(JSON.stringify(resultForServer));
      }
      else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: false,  
        }
        res.end(JSON.stringify(resultForServer));
      }  
    }
  }
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });}
else if (page == '/main.js'){
  fs.readFile("main.js", function (err, data) {
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
server.listen(7000);