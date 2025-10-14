const http = require('http')
const fs = require('fs') 
// fs standing for file system, it can do all of CRUD, read, write, delete and update
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

// start the server
const server = http.createServer(function(req, res){

//http://localhost:8000/api?word=racecar  
const page = url.parse(req.url).pathname //"api"
const params = querystring.parse(url.parse(req.url).query) //querystring is everything after the question mark and its parsing it so it's turning it into an object, so word=racecar so now word is a key and racecar is the value as that key {word:"racecar"}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// params is an object {word: "racecar"}


// index.html is always going to be the intial page, shown as '/' 
// readFile is going to search through folder and read html file specifically 
if(page === '/'){
  // 
  fs.readFile('index.html', function(error, data){
  res.writeHead(200, {'Content-Type': 'text/html'})
// here we are telling the browser that we are sending a 200 status code and we are sending a text content type file
  res.write(data)
// the data part or content of index.html is being sent to browser
  res.end()
  // here we are ending the response after the browser takes in the data
  })
  }
else if (page == '/styles.css'){
    fs.readFile('styles.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page === '/js/client.js'){
    fs.readFile('js/client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
else if (page === '/api'){
// if 'word' in params
if('word' in params){
  const userWord = params['word']
  // could also look like params.word
  // example would be racecar -> ['r', 'a', 'c', e c a r] -> 'racecar'
  const reversed = userWord.split('').reverse().join('')
  let isPalindrome = false 
  // if madam === madam
  if (userWord === reversed){
    isPalindrome = true
  } else{
    isPalindrome = false
  }
  // this line is being sent to client.js 
  const objToJson = {userInputWord : params['word'], isPalindrome}
  // going to put an ok status of 200 and the type of file i'm sending an object and json file
  res.writeHead(200, {'Content-Type': 'application/json'} )
        res.end(JSON.stringify(objToJson));
      }
    
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
console.log('server is running ✅');

// work completed with the help of Shawn and developer friend 