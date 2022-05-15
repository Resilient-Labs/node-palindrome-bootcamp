//upload to server

const http = require("http"); //imports
const fs = require("fs"); //imports
const url = require("url");
const querystring = require("querystring");
const { json } = require("stream/consumers");

const server = http.createServer(function (req, res) {
  console.log(" i got a request");
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log("params", params);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/style.css") {
    fs.readFile("style.css", function (err, data) {
      // res.writeHead(200, {'Content-Type': 'text/stylesheet'})
      res.write(data);
      res.end();
    });
  } else if (page == "/main.js") {
    fs.readFile("main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    let isPalindrome = checkPalindrome(params.pPalindrome);
    console.log(`check to see if ${params.pPalindrome} is palindrome:`);
    const palindromeResult = {
      isPalindrome: isPalindrome,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(palindromeResult));
    res.end();
  }

  // else if (page== '/imgs/Heads.png'){
  //     fs.readFile("imgs/Heads.png", function (err, data){
  //       console.log(err)
  //      res.writeHead(200, {'Content-Type': 'image/png'})
  //       res.write(data)
  //       res.end()
  //     })

  //     }
  //     else if (page== '/imgs/Tails.png'){
  //       fs.readFile("imgs/Tails.png", function (err, data){
  //       console.log(err)
  //       res.writeHead(200, {'Content-Type': 'image/png'})
  //         res.write(data)
  //         res.end()
  //       })

  //       }
});
server.listen(8400);

function checkPalindrome(pPalindrome) {
  // return

  // l e o n n o e l
 // n-u-r-s-e-s r-u-n 
  let wordArray = pPalindrome.replace(" ", "" ).split("");
   // n-u-r-s-e-s-r-u-n 
  

  console.log(wordArray);

  //[ n-u-r-s-e-s-r-u-n ]
  wordArray.reverse();

  console.log(wordArray);

  //  = [ ]
  // .reverse()
  let reversedWord = wordArray.join("");
  //n-u-r-s-e-s-r-u-n 

  //use replace(" ","") method to account for spaces in word ex: nurses run 

  if(reversedWord.toLowerCase()=== pPalindrome.toLowerCase().replace(" ", "")){
    return true
  } else {
    return false
  }
}
console.log(checkPalindrome("nurses run"));
