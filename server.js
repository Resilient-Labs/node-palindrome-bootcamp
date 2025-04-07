const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const server = http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url)
    const pathname = parsedUrl.pathname
    const params = querystring.parse(response.query)

    if (pathname === '/') {
        fs.readFile('index.html', function (error, data) {
            if (error) {
                res.writeHead(500)
            } else {
                res.writeHead(200, { 'Content-Type':'text/html' })
                res.end(data)
            }
        })
    } else if (pathname === '/check') {
        const word = params.word?.toLowerCase().replace(/'')
        const reversed = word.split('').reverse().join('')
        const palindrome = word === reversed

        res.writeHead(200, { 'Content-Type':'text/html' })
        res.end(`<h1>${params.word} is ${palindrome ? '' : 'not '}a palindrome!</h1>`)
    } else {
        res.writeHead(404)
        res.end("Page not found")
    }
})

server.listen(3000)
