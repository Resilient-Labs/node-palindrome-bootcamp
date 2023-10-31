const http = require('http'); //request to http to access internet
const fs = require('fs') //request to file system
const url = require('url'); //url returns an object
const querystring = require('querystring'); //look at query params
const figlet = require('figlet') //fun package to create scii art

//making first request to local server
const server = http.createServer(function(req, res) { //simple create server that opens and closes at end
  const page = url.parse(req.url).pathname; // what page we are on after 8000
  const params = querystring.parse(url.parse(req.url).query); //query params in the url
  console.log(page); // console log each page to see what's going on
  //home page/root
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  //The api below is what will be fetched from client side
  // TASK when user submits a string it needs to be reversed
    //Create variables for the future obj in the API:
      //Grab the user input from the client side and put it in the server side... 
      //Take said user input and reverse it: string to array (split())), reverse array (reverse()), and array to string (join()) 
      //Compare reg input and reversed of input to return boolean value
  else if (page == '/api') {
    if('palindrome' in params){
      let name = params['palindrome']
      let reversedName = name.split('').reverse().join('')
      let palindrome = name === reversedName ? 'true' : 'false'
      console.log(palindrome)
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: name,
        reversedName: reversedName,
        result: palindrome
      }
      res.end(JSON.stringify(objToJson));
    }//palindrome if
  }//else if

  //css file
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });

  //js file
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  //asking something that doesn't exist
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

server.listen(8000);

// Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
  // User enters an input that could be a palindrome (on user side)
    //input/params for palindrome is "username" changed to userInput 
    //true or false will print to the screen if it is a palindrome...
  // Server side
    // TASK when user submits a string it needs to be reversed
      //need to somehow grab the string from the user side and put it in the client side... can you use doc query selector
      //Turn string into array with split
      //Reverse the string
      //Join the string
      //Check the reversed string against user input and see if the match?
    //return boolean: if palindrome submit true // else return false
