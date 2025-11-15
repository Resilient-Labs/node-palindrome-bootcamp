const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
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
  }  else if (page == '/api') {
    if('word' in params){
      let strText = params['word']
      let newString = strText.split('').reverse().join('')
      res.writeHead(200, {'Content-Type': 'application/json'});
      if(newString === strText){
        res.write("trueeee")
       }else{
        res.write("wowwwwww")
       }
       res.end()
      } 
    }
  }).listen(4000);


  // fetch(`/api?word=${word}`)
	// .then(res => res.json)
	// .then((data )=> console.log(data))
	// .catch((err) => console.error(err));


  // let newString = strText.split('').reverse().join('')
    
  // if(newString === strText){
  //  alert("trueeee")
  // }else{
  //  alert("wowwwwww")
  // }