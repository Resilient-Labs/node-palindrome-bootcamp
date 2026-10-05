# ↔️ Project: Server Side Palindrome Checker

### Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

### How it looks like
![How it looks like the app](./img/palindrome.png)

### How it works:
- The user writes a word or phrase.
- JavaScript validates that the input is not empty.
- The browser sends the value to the Node.js server through the /api route.
- The server returns the result as JSON.
- The browser displays whether the submitted text is a palindrome.

### Features:
- Accepts a word from the user
- Checks palindrome logic on the Node.js server
- Displays a clear result without reloading the page
- Uses fetch() to communicate between the browser and the server
- Not external API used 

### Technologies used:
- HTML5
- CSS3 
- JavaScript (ES6)
- Node.js

### Installation:
- Clone this repository: git clone https://github.com/YOUR-USERNAME/palindrome-checker.git
- cd node-palindrome
- npm install
- npm install figlet
- node server.js
- http://localhost:8000

### Future Improvements:
- Highlight the characters that create the palindrome pattern
- Add a reset button to clear the input and message

