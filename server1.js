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
    fs.readFile('index1.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  }else if (page == '/css/style1.css'){
      fs.readFile('css/style1.css', function(err, data) {
        res.write(data);
        res.end();
      })
    }else if (page == '/js/main1.js'){
      fs.readFile('js/main1.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
  }

  else if (page == '/api') {
    if ('word' in params) {
     const original = params['word'].toLowerCase().replace(/[^A-Za-z0–9]/g, '');
     const reversed = original.split('').reverse().join('');
     const isPalindrome = original === reversed;
     
     const message = isPalindrome
     ? `"${params['word']}" is a palindrome!`
     : `"${params['word']}" is NOT a palindrome. Sorry try again lol`;


      // Use JSON response creation from example file
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({palindrome: isPalindrome, message}));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing word needed' }));
    }

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

server.listen(1001); //lol I chose server 1001 since it is a palindrome as well
  

//old attempt 2 from coin toss, use this as reference to edit for palindrome approach, had to change, w server1.js, get rid of main js functions and statements in node, will crash it!  
//   else if (page == '/api') {
//     console.log(req)
//     if ('choice' in params) {
//     let playerScore = ''
//     let botScore = ''
//     let coin = ''
//     let outcomeMessage = ''
//     let numberRandom = Math.random()
//     if (numberRandom < 0.5){
//       coin = 'head'
//     }
//     else if (numberRandom > 0.5){
//       coin = 'tail'
//     }
//     if (params['choice'] == coin) {
//       outcomeMessage = 'Winna Winna Chicken Dinna'
//       playerScore += 1;
//     }
//     else {
//       outcomeMessage = 'Big Fat Loser'
//       botScore += 1;
//     }
//     res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           user: params['choice'],
//           computer: coin,
//           outcome: outcomeMessage
//     }
//             res.end(JSON.stringify(objToJson));
//     }
//   }
//   else if (page == '/css/style1.css'){
//     fs.readFile('css/style1.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main1.js'){
//     fs.readFile('js/main1.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
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
// server.listen(8001);
//end attempt 2 w server1.js  