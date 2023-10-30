const http = require('http'); // http is an object which holds my module http
const fs = require('fs') // fs is an object which holds my module fs
const url = require('url'); // url is an object which holds my module url
const querystring = require('querystring'); // querystring an object which holds my module querystring
const figlet = require('figlet') // figlet is an object which holds my module figlet
      
const server = http.createServer(requestListener);   //this creates a server --> object.createServer(param1) which its used to specifically handle requests "requestListener"

function requestListener(req, res) { // this function handles the request to and from the sever 

  // create server that opens
  const page = url.parse(req.url).pathname; // this gets path name
  const params = querystring.parse(url.parse(req.url).query); // getting parameter and forms it into an object literal aka  key value pairs property: value to be able to access the values more easily

  if (page == "/") {
    //if we go to server, there is a slash there then read the file
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" }); // takes a param u want it to read
      res.write(data); // preparing to send data back and add status 200 to it and what data itll come back as for content type, like in this case html 
      res.end(); // ends http response
    });
  } else if (page == "/api") { // refere to the end point api

    const palindromeInput = params.palindrome; // variable stormes param which is what the user inputs

    if ("palindrome" in params) {// if it can find palindrome the object inside params then its true 
      

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

    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {

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
  //checks to see if one character is a palindrome which is true so return true if thats the case
  if (palindromeInput.length == 1) {
    return true;
  }

  // 'end' variable starts at very end of user input word
  let end = palindromeInput.length - 1;

  //created loop to go through all elements of index to compare both begining and end of string 
  for (let i = 0; i < palindromeInput.length - 1; i++) {

    //a checker to make sure that loop doesnt start going through same element of index again
    if (i > end) {
      return true;
      //else if it does go over the same iteration stop 
    } else if (palindromeInput.charAt(i) !== palindromeInput.charAt(end)) {

      return false;
    }

    end -= 1;
  }

  return true;
    
}
//server objct
server.listen(8000); // open on host
