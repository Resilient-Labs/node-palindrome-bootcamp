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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student']== 'Mouna'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Mouna",
          status: "Boss Lady",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
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
  }
  else if (page == '/random'){ // checking to see if we are using the right api or query
    const random = Math.floor(Math.random() * 2) // math random is giving us a number between 0-1, The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
    const coin = random ? 'heads' : 'tails' // if random is truthy then heads, else if random is falsie then tails. ? mark is considered a ternary operator (search later)
    const guess = params ['guess'] // declaring a variable that will store value params
    console.log('Coin toss is', coin, 'User guess is', guess)
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      const objToJson = {
        random : coin, // coin comes from what comp decides as value (heads or tails) 
        winOrLose : coin === guess ? 'Win' : 'Lose' // similar to line 80
      }
      res.end(JSON.stringify(objToJson)); // search meaning of res.end
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

server.listen(8001);
