const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

function reverseString(str) {
  return str.split('').reverse().join('');
}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if ('palindrome' in params) {
      if (params['palindrome'] === reverseString(params['palindrome'])) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          response: "It's a palindrome"
        };
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          response: "Definitely not a palindrome"
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  }

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404!! Page not found');
  }
});

server.listen(8000);




// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');

// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
// }
//   else if (page == '/api') {
//     } if('palindrome' in params){
//        if(params['palindrome']== function reverseString(str){return str.split("").reverse().join("")}){
//      res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//         response: "It's a palindrome"
//       }
//        res.end(JSON.stringify(objToJson));
//      }
//      else if (params['palindrome'] != reverseString(params[palindrome])){
//     res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           response: "Defintiely not a palindrome"
//         }
//         res.end(JSON.stringify(objToJson));
//     //   }//student != leon
//     //student if
//   }//else if
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else ('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000);