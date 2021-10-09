const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const server = http.createServer(function(request, response) {
	const page = url.parse(request.url).pathname // parses requested URL to their pathname/route
	const params = querystring.parse(url.parse(request.url).query)
	if (page == "/"){
		fs.readFile('index.html', function(err, data) {
			response.writeHead(200, {'Content-Type': 'text/html'}) // send 200 status code response
			response.write(data)
			response.end()
		})
	} else if (page == '/api'){
		if('string' in params){ // api?string=
      response.writeHead(200, {'Content-Type': 'application/json'})
      
      let word = params['string']
      let reverse = [...word].reverse().join('')

      let result = word === reverse ? true : false
      console.log(result)
      const objToJSON = {
        isPalindrome: result,
        reversed: reverse
      }
      response.end(JSON.stringify(objToJSON))
		}
	} else if (page == '/js/main.js'){
		fs.readFile('js/main.js', function(err, data) {
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(data);
			response.end();
		})
	} else {
		function fourOFour(err, data){
			if (err) {
				console.log('Something went wrong...')
				console.dir(err)
				return
			}
			response.write(data)
			response.end()
		}
		
	}
})
server.listen(8000)