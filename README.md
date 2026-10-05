# ↔️ Week08 Bootcamp2019a Project: Server-Side Palindrome Checker

## Project Preview
<img width="704" height="298" alt="Palindrome" src="https://github.com/user-attachments/assets/941e4cb0-8357-4add-aae1-e3f7f801819d" />



## My Palindrome Checker

A simple web application that checks whether a word or phrase reads the same forward and backward.

### Built With

- HTML for the page
- CSS for styling
- JavaScript for sending input and displaying results
- Node.js for checking palindromes on the server
- `http` for handling requests
- `fs` for reading the page files
- `url` and `querystring` for reading input from the request

### How to Run

1. Install Node.js.
2. Open a terminal in the project folder.
3. Run:

   ```bash
   node server.js
   ```

4. Open `http://localhost:8001` in your browser.
5. Enter a word and click **Check**.

Use the port number shown in `server.listen(...)` if yours differs from 8001.

### Examples

- `madam` → It is a palindrome!
- `racecar` → It is a palindrome!
- `hello` → It is not a palindrome.

### How It Works

The browser sends the entered word to the server. The server makes the text lowercase, removes spaces and punctuation, reverses it, and compares both versions. It returns a message that the browser displays.

### Current Limitation

Use single words containing letters. Sending special characters in the URL is not supported reliably by this version.
