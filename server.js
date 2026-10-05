const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  console.log(page);

  if (page == '/') {
    // Read and send the HTML page
    fs.readFile('index.html', function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end('Could not load the HTML file.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });

  } else if (page == '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Get the text sent from the browser
    const text = params['text'] || '';

    // Ignore capitalization, spaces, and punctuation
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned text
    const reversed = cleaned.split('').reverse().join('');

    let message = '';

    // Compare the cleaned text with its reverse
    if (cleaned == '') {
      message = 'Please enter a word or phrase.';
    } else if (cleaned == reversed) {
      message = 'It is a palindrome!';
    } else {
      message = 'It is not a palindrome.';
    }

    // Put the result into an object
    const objToJson = {
      text: text,
      message: message
    };

    // Send the object to the browser as JSON
    res.end(JSON.stringify(objToJson));

  } else if (page == '/CSS/palindrome.css') {
    // Load the CSS file
    fs.readFile('CSS/palindrome.css', function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end('CSS file not found.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (page == '/JS/palindrome.js') {
    // Load the JavaScript file
    fs.readFile('JS/palindrome.js', function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end('JavaScript file not found.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    // Handle an address that does not exist
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found.');
  }
});

// Start the server
server.listen(8001);