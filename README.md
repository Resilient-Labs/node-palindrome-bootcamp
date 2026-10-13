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
```
I completed the challenge: 5
I feel good about my code: 4
I'm not sure if my constructors are setup cleanly...
```

## Running the app

Requires Node.js 18 or newer. There are no packages to install.

```
npm start
```

Then open http://localhost:8000 in your browser. To use a different port, set the `PORT` environment variable before starting the server (e.g. `PORT=3000 npm start` in Git Bash).

You can also call the API directly:

```
GET /api/check?word=racecar   ->  200 {"word":"racecar","isPalindrome":true}
GET /api/check?word=hello     ->  200 {"word":"hello","isPalindrome":false}
GET /api/check                ->  400 {"error":"..."}
```

Case, spaces, and punctuation are ignored, so `A man, a plan, a canal: Panama` is a palindrome. Missing or empty input, input with no letters or numbers, and input longer than 1000 characters return a 400 error.

## Running the tests

```
npm test
```
