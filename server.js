const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const MAX_LENGTH = 1000;

// Only these files can be requested from the browser. Using a fixed list
// keeps users from asking for other files on the computer (e.g. "../server.js").
const staticFiles = {
  '/': { file: 'index.html', type: 'text/html' },
  '/index.html': { file: 'index.html', type: 'text/html' },
  '/main.js': { file: 'main.js', type: 'text/javascript' },
  '/style.css': { file: 'style.css', type: 'text/css' },
};

// Lowercase the text and remove everything that is not a letter or number,
// so "Race car!" is checked as "racecar".
function cleanText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isPalindrome(text) {
  const cleaned = cleanText(text);
  return cleaned === cleaned.split('').reverse().join('');
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function serveFile(res, fileInfo) {
  const filePath = path.join(__dirname, 'public', fileInfo.file);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': fileInfo.type });
    res.end(content);
  });
}

function handleCheck(res, searchParams) {
  const words = searchParams.getAll('word');
  const word = words[0];

  if (words.length === 0) {
    console.log('  -> 400: "word" parameter is missing');
    return sendJson(res, 400, { error: 'Please provide a word, e.g. /api/check?word=racecar' });
  }
  // e.g. ?word=a&word=b
  if (words.length > 1) {
    console.log('  -> 400: "word" was sent more than once');
    return sendJson(res, 400, { error: 'Please provide only one word.' });
  }
  if (word.trim() === '') {
    console.log('  -> 400: "word" is empty');
    return sendJson(res, 400, { error: 'Please enter a word or phrase.' });
  }
  if (word.length > MAX_LENGTH) {
    console.log(`  -> 400: "word" is longer than ${MAX_LENGTH} characters`);
    return sendJson(res, 400, { error: `Please enter ${MAX_LENGTH} characters or fewer.` });
  }
  if (cleanText(word) === '') {
    console.log('  -> 400: "word" has no letters or numbers');
    return sendJson(res, 400, { error: 'Please enter at least one letter or number.' });
  }

  const result = isPalindrome(word);
  console.log(`  -> 200: "${word}" is ${result ? '' : 'NOT '}a palindrome`);
  sendJson(res, 200, { word: word, isPalindrome: result });
}

const server = http.createServer((req, res) => {
  // req.url is only the path (e.g. "/api/check?word=abc"), so give URL a base to parse it
  const parsedUrl = new URL(req.url, 'http://localhost');
  const pathname = parsedUrl.pathname;

  // Shorten very long URLs so they don't flood the console
  const shownUrl = req.url.length > 100 ? req.url.slice(0, 100) + '...' : req.url;
  console.log(`${new Date().toISOString()} ${req.method} ${shownUrl}`);

  if (req.method !== 'GET') {
    console.log('  -> 405: method not allowed');
    res.writeHead(405, { 'Content-Type': 'text/plain', Allow: 'GET' });
    res.end('405 - Method not allowed');
    return;
  }

  if (pathname === '/api/check') {
    handleCheck(res, parsedUrl.searchParams);
  } else if (staticFiles[pathname]) {
    serveFile(res, staticFiles[pathname]);
  } else {
    console.log('  -> 404: not found');
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page not found');
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the other program or run with a different PORT.`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

// Only start listening when this file is run directly (node server.js),
// not when it is loaded by the tests.
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Palindrome checker running at http://localhost:${PORT}`);
  });
}

module.exports = { server, isPalindrome };
