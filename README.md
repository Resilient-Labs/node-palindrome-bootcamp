# Palindrome Checker

A simple web app that checks if a word or name reads the same forwards and backwards. Type in any word and the server will tell you if it's a palindrome.

## What's a Palindrome?

A palindrome is a word that's spelled the same way forwards and backwards. Some examples are "anna", "racecar", "mom", and "kayak". This app checks if whatever you type is one of these special words.

## How to Use It

1. Make sure Node.js is installed on your computer
2. Download this project
3. Open your terminal in the project folder
4. Type `npm install` and hit enter
5. Type `node server.js` and hit enter
6. Open your browser and go to `http://localhost:8000`
7. Type a word in the box and click "Check"

The app will tell you right away if your word is a palindrome or not.

## What I Built This With

This is a basic full-stack app using Node.js on the backend. I created a custom server without using Express or any other framework - just Node's built-in modules like `http` and `fs`. The frontend is straightforward HTML, CSS, and JavaScript.

I also added Figlet to show a fun ASCII art message if you accidentally go to a page that doesn't exist.

## How the Checking Works

When you type a word and click the button, here's what happens:

1. Your browser sends the word to the server
2. The server takes your word and reverses it
3. It compares the original word to the reversed version (ignoring uppercase/lowercase)
4. If they match, it's a palindrome
5. The server sends back the result
6. Your browser displays whether it's a palindrome or not

The input box automatically clears after each check so you can try another word right away.

## Files in the Project

- `index.html` - The page with the input box and button
- `server.js` - The Node.js server that does the palindrome checking
- `js/main.js` - Handles sending your word to the server and showing the result
- `css/style.css` - Styling with a purple color scheme

## Why I Made This

This was a practice project to learn how to build a server from scratch using Node's core modules. It shows how to handle HTTP requests, work with query parameters, serve static files, and send JSON responses back to the client.

## Things to Try

Type in some classic palindromes:
- anna
- racecar
- level
- madam
- noon

Or try regular words to see them get rejected:
- hello
- world
- computer

## What I Might Add Later

- Support for checking full phrases (like "A man a plan a canal Panama")
- A history of words you've checked
- Statistics on how many palindromes you've found
- More interesting animations when you find a palindrome
- A list of famous palindromes

---

Built to practice server-side validation and custom Node.js servers.
