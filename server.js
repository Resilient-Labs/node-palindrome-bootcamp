//this can all be cleaned up with express node.js

const http = require('http'); // what we're sending to grab, putting it into an object, network access module
const fs = require('fs') // accessing file system module
const url = require('url'); //
const querystring = require('querystring'); // query parameters - query string is a part of a URL (Uniform Resource Locator) that contains data to be passed to a web server. It usually appears at the end of the URL after a question mark "?" and consists of one or more key-value pairs separated by ampersands "&"
const figlet = require('figlet') // so the 404 looks cool - computer program that generates text banners in various typefaces, used for decorative, allowing users to create stylized art

const server = http.createServer(function(req, res) { // creating variables that have the objects running methods to request/respond
  const page = url.parse(req.url).pathname; // figure out what page we're on, what comes after the 8000
  const params = querystring.parse(url.parse(req.url).query); // show the query parameters in that page
  console.log(page); 
  if (page == '/') { // conditionals - if i'm on the root do this 
    fs.readFile('index.html', function(err, data) { // give them index.html
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') { // second page
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') { // third page
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // Palindromes are same spelling forward and backwards example: race car, leon noel
  // Grab a string,
  // Remove characters?
  // Turn lowercase
  // Get the length to split
  else if (page == '/api') { // an api exists
    if('userInput' in params){

      const userInput = params.userInput.toLowerCase().replace(/[^a-z]/g, '') // Clean and convert to lowercase 
      // Removing characters with (/[^a-z]/g, '')
      const isPalindrome = validatePalindrome(userInput)
      const response = {
        isPalindrome: isPalindrome
      }
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(response)) // debugging??

      function validatePalindrome(string) {
        // Find the length of a string
        const length = string.length
        // For loop through half the length of the string
        for (let i = 0; i < length / 2; i++) {
        // Check if first and last string are same
          if (string[i] !== string[length - 1 - i]) {
                return 'It is not a palindrome'
            }
        }
        return 'It is a palindrome'
      }
      const btn = document.getElementById('clickMe')
      btn.addEventListener('click', validatePalindrome)

      console.log(value);
      if(params['student']== 'leon'){ // accessing student array and leons name within array 
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = { // why are there multiple objToJson?? is this what appears?
          name: "leon",
          status: "Boss Man",
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
  else if (page == '/css/style.css'){ // if they request a style sheet here's the style sheet we're going to send them, so just by using index.html there are css stylesheets client side in there that is why on server side we handle it
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
    figlet('404!!', function(err, data) { //error handling with figlet which is text
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

// http://localhost:8000/ if we put that into browser we are now accessing our local server since we are hosting it
// into our terminal we cd into node-intro-demo to get in the file and the type demo.js and enter to send the request to our server, it hears it, and responds with a server
// backend - listening to requests and serving up files
// full stack web applications!
// YOU ARE NOW A SOFTWARE ENGINEER