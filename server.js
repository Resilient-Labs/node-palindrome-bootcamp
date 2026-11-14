const http = require('http'); //an app layer used to exchange data from client<--> server
const fs = require('fs') //file system built into node that provides methods to CRUD and manage files w/out external libraries
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');


//page == '/' is referencing the root homepage aka index.html
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname; //with every request comes a url method
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/css/styles.css') {
    fs.readFile('css/styles.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if ('palindrome' in params) {

      const wordCheck = params['palindrome'];

      function palindrome() {
        const removeChar = wordCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //this code removes special characters, spaces and makes the input lowercase. I googled it.
        const wordReverse = removeChar.split('').reverse().join(''); //this reverses the user input 
        //here we check if it's a palindrome with if conditionals and booleans
        if (removeChar === '') {
          return 'Please enter a word or phrase~'
        } else if (removeChar == wordReverse) {
          return `${wordCheck} is a palindrome!`
        } else {
          return `${wordCheck} is NOT a palindrome!`
        }
      }
      const result = palindrome(wordCheck);
      const objToJson = {
        message: result
      }
      res.end(JSON.stringify(objToJson));
    }
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
})
const PORT = process.env.PORT || 8080; 

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});