# Palindrome

## How it's made
JS, Node.JS

JS: The client side calls the API in the local server using the Fetch API. It will grab the user's input, the reversed of the user's input, and compare whether these two values are a palindrome. The results will print to the DOM.

Node.JS: Node.js was used to import several Node.js modules: http, fs, url, and queryStrings (from the user). Then I defined the server, extract the requested page's pathname, and parses query parameters. When a user submits a string, the following tasks are performed on the server side. Variables are created to hold the future object that will be returned as part of the API response. The user's input is reversed and checked by following these steps: the string is converted into an array using the 'split()' method, reversed using the 'reverse()' method, and finally, the reversed array is converted back into a string using the 'join()' method.

The server compares the original user input with the reversed version of the input to determine if they match. If they do match, the API returns a boolean value of 'true' to indicate that the input is a palindrome; otherwise, it returns 'false' to signify that the input is not a palindrome.

## Lessons Learned
I learned the quintessential difference between accessing user inputs between the DOM's browser API and the server side. Since document.query selector is no longer relevant on the server side, I had to understand how to grab the user's input a different way, by whether a key named 'palindrome' exists in the params object and, if it does, to assign the corresponding value to a variable named 'name'. That value is the user's input.