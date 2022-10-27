// Recieved help from Victor
const http = require('http');
const fs = require('fs')
const url = require('url'); // See what they were requesting
const querystring = require('querystring');
const figlet = require('figlet')




const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if ('student' in params) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      parameter = params['student'].toLowerCase().split('').reverse('').join('')
      if (parameter === params['student'].toLowerCase()) {
        const objToJson = {
          result: 'This is a palindrome!'
        }
        res.end(JSON.stringify(objToJson));
        // result = 'This is a palindrome!'
      } else {
         const objToJson = {
           result: 'Not a palindrome! Try again'
         }
          
        
        res.end(JSON.stringify(objToJson));

      }


    }


  }






  //student = leon
  // else if(params['student'] != 'leon'){
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   const objToJson = {
  //     name: "unknown",
  //     status: "unknown",
  //     currentOccupation: "unknown"
  //   }
  // res.end(JSON.stringify(objToJson));
  //student != leon
  //student if
  //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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
