const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const { json } = require('stream/consumers')

const server = http.createServer(function (req, res) {
  console.log('i got a request')
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query)
  console.log('params', params)
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    });
  } else if (page == '/main.js') {
    fs.readFile('main.js', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    });
  } else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'})

    const palindromeResult = {
      str: params['checkIfPalindrome'],
      result:"",

      checkPalindrome() {
        let wordArray = this.str.replace(' ', '').split('')
        console.log(wordArray)
        wordArray.reverse()
        console.log(wordArray)
        let reversedWord = wordArray.join('')
        if (reversedWord.toLowerCase() === this.str.replace(' ', '').toLowerCase()) {
          this.result = "Yuhh it's a palindrome!"
        } else {
          this.result = "Nope, this is just a word."
        }
      }
    }
    palindromeResult.checkPalindrome()
    res.end(JSON.stringify(palindromeResult))
  }
})

server.listen(8000)
