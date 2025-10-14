# ↔️ Week08 Bootcamp2019a Project: Server Side Palindrome Checker

### Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:

I completed the challenge: 5
I feel good about my code: 4
I feel good about this project.

My Awesome Project

Node js project that checks if a string is a palindrome or not!

Link to project: https://node-palindrome-bootcamp.onrender.com/

How It's Made:

HTML, CSS, JavaScript

I used the raw http and fs modules to create a full stack web application that checks wether a string is a palindrome or not. To do this, first I setup my http, fs, querystring, and url modules in to my sever.js file. I setup a fetch request in the client side javascript to request the '/api' route. I setup an input in my HTML. The user will enter a string, that string will be passed into the fetch request URL as a query parameter, using a template literal. If the pathname of the request is /api, it grabs the query parameter (user input string) and performs a few functions on it. .split('') turns the string into an array of individual letters. .reverse() reverses the array. .join('') brings the individual characters back to gether. Now we have a reversed string that we can play with. We check if the reversed string is equal to the original string. Based on that outcome, we create an object with the result key, where the value returns "true!" if true and "false!" if false. The user will press the button with an event listener on it, the fetch request will send the query string to the server.js file (currently hosted on render), and the logic will run, checking if the original string is equal to the reversed string. If true, it will return "true!" to the fetch request, and the fetch request will insert that value into the dom!

Optimizations

This project is a wonderfully simple project. In terms of optimizations, definitely using express would simplify things. I wanted a challenge and used the raw modules though, since I find understanding the core pillars of node fun!  

Lessons Learned:
I definitely learned a lot about the core modules, and learned about how to take in query parameters from fetch requests server side.
