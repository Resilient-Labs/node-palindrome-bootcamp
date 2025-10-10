//  psuedo code
//  logic happens in server side so code or data does not get manipulated
//  Goal: get user guess (heads or tails), server result (heads or tails), and game outcome (win or lose)
//  get user guess by parsing it from url
//  get random tails or head result from server
//  check for win if user guess = server result and show as game outcome

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
  // Referenced and work together from House Cass
  // edit for palidrome
  // get user input
  // format the user input
    //removing space, lowercase, ect
    // reverse user input
    // checked formated version is equal to reverseWord string
    // send response back to then frontend
 else if (page == '/api/') {
   // {word: 'something'}
   console.log("hi");
   if ('word' in params ) {
     // get user input
     console.log(params); // {word:radar}
     const word = params['word'];
     const newWord = word.trim().toLowerCase();
     // split() splits a string into a list apple to [a,p,p,l,e]
     // reverse() reverse the order of elements
     // join() array or list into single string
     const reverseWord = newWord.split('').reverse().join('');
     // compare original and reverseWord
     let result='';
     if (newWord === '') {
       result = "Please enter a word before submitting";
     } else if (newWord === reverseWord) {
       result = "This is a palindrome!";
     } else {
       result = "This is not a palindrome!";
     }
     res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
       serverWord: newWord,
       serverReverse: reverseWord,
       serverConfirm: result
     }
     console.log(objToJson);
     res.end(JSON.stringify( objToJson ));
   }
 }
// end of edit
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
});

server.listen(3000);

console.log("The server is now working");

//Citations:
// Referenced from Resilient Coders Week 9 Matierial
// Use of House Cass, Google AI Overview, Chatgpt for debug and syntax reference