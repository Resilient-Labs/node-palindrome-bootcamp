// Run with: npm test
// Uses Node's built-in test runner and fetch, so no packages are needed.
const test = require('node:test');
const assert = require('node:assert');
const { server, isPalindrome } = require('./server');

let baseUrl;

test.before(() => {
  return new Promise((resolve) => {
    // Port 0 lets the operating system pick any free port
    server.listen(0, () => {
      baseUrl = `http://localhost:${server.address().port}`;
      resolve();
    });
  });
});

test.after(() => {
  server.close();
});

test('isPalindrome works on its own', () => {
  assert.strictEqual(isPalindrome('racecar'), true);
  assert.strictEqual(isPalindrome('Racecar'), true);
  assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.strictEqual(isPalindrome('12321'), true);
  assert.strictEqual(isPalindrome('a'), true);
  assert.strictEqual(isPalindrome('hello'), false);
  assert.strictEqual(isPalindrome('12345'), false);
});

test('GET /api/check returns true for a palindrome', async () => {
  const res = await fetch(`${baseUrl}/api/check?word=racecar`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { word: 'racecar', isPalindrome: true });
});

test('GET /api/check handles phrases with spaces and punctuation', async () => {
  const word = 'A man, a plan, a canal: Panama';
  const res = await fetch(`${baseUrl}/api/check?word=${encodeURIComponent(word)}`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { word: word, isPalindrome: true });
});

test('GET /api/check returns false for a non-palindrome', async () => {
  const res = await fetch(`${baseUrl}/api/check?word=hello`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { word: 'hello', isPalindrome: false });
});

test('missing, empty, or invalid input returns 400', async () => {
  const badQueries = [
    '',                 // no word parameter at all
    '?word=',           // empty
    '?word=%20%20',     // only spaces
    '?word=!!!',        // no letters or numbers
    '?word=a&word=b',   // sent twice
    `?word=${'a'.repeat(1001)}`, // too long
  ];
  for (const query of badQueries) {
    const res = await fetch(`${baseUrl}/api/check${query}`);
    assert.strictEqual(res.status, 400, `expected 400 for "${query.slice(0, 30)}"`);
    const data = await res.json();
    assert.ok(data.error, 'response should include an error message');
  }
});

test('GET / serves the HTML page', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.strictEqual(res.status, 200);
  assert.match(res.headers.get('content-type'), /text\/html/);
  assert.match(await res.text(), /Palindrome Checker/);
});

test('GET /main.js and /style.css are served', async () => {
  const js = await fetch(`${baseUrl}/main.js`);
  assert.strictEqual(js.status, 200);
  assert.match(js.headers.get('content-type'), /javascript/);

  const css = await fetch(`${baseUrl}/style.css`);
  assert.strictEqual(css.status, 200);
  assert.match(css.headers.get('content-type'), /text\/css/);
});

test('unknown pages return 404', async () => {
  const res = await fetch(`${baseUrl}/does-not-exist`);
  assert.strictEqual(res.status, 404);
});

test('other files on disk cannot be requested', async () => {
  const res = await fetch(`${baseUrl}/server.js`);
  assert.strictEqual(res.status, 404);
});

test('POST requests return 405', async () => {
  const res = await fetch(`${baseUrl}/api/check?word=racecar`, { method: 'POST' });
  assert.strictEqual(res.status, 405);
});
