//Got help from a couple of alumnis
const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const port = 8000

const server = http.createServer(function(req,res){
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log('Location: '+ page)
    if(page == '/'){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          })
    }else if (page == '/api'){
        if('word' in params){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
            word : (params['word']).replace(/\s/g, '').toLowerCase(),
            answer : '',
            inputCheck(){
                let reverse = this.word.toLowerCase().split('').reverse().join('')
                console.log(reverse)
                console.log(objToJson.word)
                if(reverse === this.word){
                    this.answer = `${this.word} is a palindrome`
                }else{
                    this.answer = `${this.word} is not a palindrome`
                }
            }
        }
        objToJson.inputCheck()
        res.end(JSON.stringify(objToJson))
        } 
    }else if (page == '/css/normalize.css'){
        fs.readFile('css/normalize.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/css/reset.css'){
        fs.readFile('css/reset.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/css/style.css'){
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
    }
})


server.listen(port, function(err){
    if (err){
        console.log('Bad things happened', err)
    }else {
        console.log('Server is listening from port ' + port)
    }
})