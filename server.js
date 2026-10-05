//  person needs an option
// options either head or tails(input)

// display is the client // 

// client side
// coin head or tail 
// testing head or tail 

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');



const server = http.createServer((req,res)=>{
  const page = url.parse(req.url).pathname; 
  console.log(page)
    const params = querystring.parse(url.parse(req.url).query);
    
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }

       
    else if (page == '/api') {
    if('palindrome' in params){
        
         namefromClient = params['palindrome']
         convertedName= namefromClient.toLowerCase().replace(" " ,"") // works for the words with spaces 
        if(convertedName!==""){
        res.writeHead(200,   {"Content-Type": "application/json"})
        
       namee = convertedName.split("").reverse().join("")
        
        if(convertedName === namee){
        message = "ITS PALINDROM "
        }

        else{
        message = "ITS NOT PALINDROM "
        }

        // object 
        const jawn = {
            name : namefromClient, 
            message : message
        }


        res.end(JSON.stringify(jawn));
    } 


} 
    } else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
}
    
    else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    } 
})
server.listen(8000) // starts the server 