const http = require('http');
const fs = require('fs')
// tells me what page im on
const url = require('url');
// the last bit of the url (like a query [api] in an api url)
const querystring = require('querystring');

const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  // the forward slash represents the main page's root
  if (page == '/') {
    fs.readFile('palindrome.html', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }
  // conditional logic leads to another page using node
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // everything below built an api
  else if (page == '/funStuff') {
    if ('input' in params) {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      let str = params['input']

      const splitString = str.split('')
      const reverseString = splitString.reverse('')
      const joinString = reverseString.join('')

      let string = null
      if (joinString === str) {
        string = "is a Palindrome!"
      } else {
        string = "is NOT a Palindrome!"
      }
      const objToJson = {
        isPalindrome: string
      }
      res.end(JSON.stringify(objToJson));
      // query parameters on the url
      // if(params['student']== 'leon'){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   const objToJson = {
      //     name: "leon",
      //     status: "Boss Man",
      //     currentOccupation: "Baller"
      //   }
      //   res.end(JSON.stringify(objToJson));
      // }//student = leon
      // else if(params['student'] != 'leon'){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   const objToJson = {
      //     name: "unknown",
      //     status: "unknown",
      //     currentOccupation: "unknown"
      //   }
      //   res.end(JSON.stringify(objToJson));
      // }//student != leon
    } //student if
  } //else if
  else if (page == '/style.css') {
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/palindrome.js') {
    fs.readFile('palindrome.js', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
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
});

server.listen(8000);
