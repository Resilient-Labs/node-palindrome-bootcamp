const http = require('http');
const fs = require('fs');
const url = require('url');

const isItPalindrome = (str) => {
  const checked = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return checked === checked.split('').reverse().join('');
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (path === '/check') {
    const input = parsedUrl.query.text || '';
    const result = isItPalindrome(input);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      result,
      message: result
        ? `${input} def is a palindrome!`
        : `${input} ain't a palindrome.`,
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8000);