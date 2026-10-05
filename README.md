

### Goal
Create a simple web application that uses the `fs` and `http` modules to validate whether a string is a palindrome on the server side.

### Project overview
This app is a  Node.js server that serves a static HTML page and checks palindrome input through a custom `/api` endpoint. The browser sends the user’s text as a query string, the server normalizes it, and then compares it to its reversed version. If the values match, the app responds with a success message; otherwise, it marks the input as not being a palindrome.

The server is configured to serve:
- `/` for the main page
- `/api` for palindrome validation
- `/css/style.css` for styling
- `/js/main.js` for the client-side logic

The front end includes a text input and button, and it updates the page with the server’s JSON response using `fetch()`.

### Demo

![Palindrome checker demo](image/palindrome.png)



### How it works
- The server creates an HTTP listener with `http.createServer()`
- It reads and serves `index.html` from disk using `fs.readFile()`
- The client submits the value from the input field to `/api?palindrome=...`
- The server lowercases the input before reversing it
- It compares the normalized value to the reversed version
- The result is returned as JSON and displayed in the UI

