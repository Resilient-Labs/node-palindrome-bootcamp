const http = require('http'); // http is an object which holds my module http
const fs = require('fs')
const url = require('url');
const querystring = require('querystring'); // query params after 8000, 
const figlet = require('figlet') // fun 
              //object.createServer(param1)
const server = http.createServer(requestListener);

function requestListener(req, res) {

  // create server that opens
  const page = url.parse(req.url).pathname; // this gets path name
  const params = querystring.parse(url.parse(req.url).query); // getting parameter and forms it into an object literal aka  key value pairs property: value to be able to access the values more easily

  if (page == "/") {
    //if we go to server, there is a slash there then read the file
    fs.readFile("index.html", function (err, data) {
      // takes a param u want it to read
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end(); // ends http response
    });
  } else if (page == "/api") {
    console.log('params: ');
    console.log(params) // { palindrome: 'poop' }
    const palindromeInput = params.palindrome;
    console.log(`plaindrome Input : ${palindromeInput}`);


   
    if ("palindrome" in params) {

      if (params["palindrome"] !== "") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          //this palindrome result holds the value of whether the user input was a palindrome  or not
          palindromeResult: palindromeChecker(palindromeInput),
        };
        res.end(JSON.stringify(objToJson));
      } 
    } 
  }
  else if (page == "/css/style.css") {
    console.log(`#3`);
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    console.log(`#4`);
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
} 

//checking to see if its a plaindrome which is its sole purpose
function palindromeChecker(palindromeInput){

  if (palindromeInput.length == 1) {
    console.log("palindrome is of length one");
    return true;
  }

  let end = palindromeInput.length - 1;

  for (let i = 0; i < palindromeInput.length - 1; i++) {

    console.log(`start(char): ${palindromeInput.charAt(i)}`);
    console.log(`end(char): ${palindromeInput.charAt(end)}`);
    if (i > end) {
      console.log(
        "reached all possibilities for checking all elemnts of index from start to end and looks good"
      );
      return true;
    } else if (palindromeInput.charAt(i) !== palindromeInput.charAt(end)) {
      console.log(
        "if the letters on start and end of string are not the same stop"
      );
      return false;
    }

    end -= 1;
  }

  return true;
    
}
//server objct
server.listen(8000); // open on host
