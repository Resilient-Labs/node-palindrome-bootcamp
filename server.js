//needed to run 

const http = require('http')//importing the http module
const fs = require('fs')//importing the fs module that enambles interacting with the file system
const url = require('url')//module for url parsing and resolution
const querystring = require('querystring')

//declare a variable with the value =  inputval of the string.
      //get rid of capitalization/uppercase and special characters RegEx
      //then assign it to a variable

//setting up the page
const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query)

  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });//
  }
  else if (page == '/api') {
      const str1 = params['palindrome']// this equals ${inputVal} on the client side
      console.log(str1)
      const regEx = str1.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
      const reverseStr = regEx.split('').reverse().join('')
    if ('palindrome' in params) {
    
      if (regEx === regEx.split('').reverse().join('')) {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const objToJson = {
          result: `${str1} is a palindrome.`
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
      }
      else {
        const objToJson = {
          result: `${str1} is not a palindrome`
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
        
      }
    }
    
    
  }
  
  else if (page == '/css/style.css') {
    
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, `Page not Found ${page}`)
    console.log('Something went wrong...');
    res.end();
  }
      })
    
server.listen(8000);
