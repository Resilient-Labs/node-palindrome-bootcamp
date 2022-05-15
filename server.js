const http = require('http');
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    // make page and param variable
    console.log(page)
    // if statement for default page ('/'), respond with index.html file (CSS & JS will be referenced in HTML)
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
        // make sure to grab the images!!
    } else if (page == '/assets/images/yoda.png') {
        fs.readFile('assets/images/yoda.png', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.write(data)
            res.end()
        })
    } else if (page == '/assets/images/cryBaby.png') {
        fs.readFile('assets/images/cryBaby.png', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.write(data)
            res.end()
        })
    } else if (page == '/api'){
        if ('checkedPalindrome' in params) {
            res.writeHead(200, {'Content-Type': 'application/json'})
            const checker = {
                reg: /[\W_]/g,
                // reg expression filters the user's input. If they type something that has special characters when checking the letters for a palindrome.
                string: (params['checkedPalindrome']),
                result: '',
                srcURL: '',
                stringChecker(){
                    let lowerCase = this.string.toLowerCase().replace(this.reg, "")
                    // this variable turns the value to all lowercase letters
                    let reversed = lowerCase.split("").reverse().join("")
                    // this variable splits up the string, reverses the order, and puts it back together
                    if (this.string === ''){
                        this.result = "Please enter a word or sentence."
                    } else if (reversed === lowerCase) {
                        // if the word is the same reading from either direction, it's a palindrome!
                        this.result = `${this.string} is a Palindrome!`
                        console.log('This is a Palindrome!')
                        this.srcURL = "/assets/images/yoda.png"
                    } else {
                        this.result = `Sorry buddy, ${this.string} is not a Palindrome!`
                        this.srcURL = '/assets/images/cryBaby.png'
                    }
                }
            }
            checker.stringChecker()
            res.end(JSON.stringify(checker))
        }
    } else if (page == '/assets/stylesheets/style.css') {
        fs.readFile('assets/stylesheets/style.css', function (err, data) {
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
        fs.readFile('error.html', function (err, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000)