# 🔄 Palindrome Validator with `fs` and `http`

**Goal:** Develop a web application using Node's `fs` and `http` modules. The application will validate server-side whether a provided string is a palindrome.

## Introduction

Experience the wonders of palindromes with this simple web application! Users can input a string, and the server will validate whether or not it's a palindrome, showcasing the seamless interplay between frontend input and server-side logic.

![Palindrome Validator Preview](<img/work.png>)(<img/working 2.png>)

## Tech Breakdown 🛠️

**Key Technologies:** Node.js (using `fs` and `http` modules), HTML, JavaScript

### Core Components:

- **Node.js with `http`:** Establishes a server to deliver our application to end-users.
  
- **Node.js with `fs`:** Reads and serves the HTML file, enabling the user interface to be accessible via the `http` server.
  
- **HTML:** Provides the user interface for the palindrome checker: an input field for the string and a button to initiate the check, along with an area to display the result.
  
- **JavaScript:** Handles the client-side actions, such as capturing the user's input and sending it to the server for validation.

## Server-side Logic 🔍

The heart of this application lies in its server-side palindrome validation. Once the string is sent to the server, it undergoes a series of transformations to verify its palindromic nature:

1. The string is cleaned: spaces, punctuation, and capitalization are removed.
2. The cleaned string is reversed.
3. The reversed string is compared to the original cleaned string. If they match, it's a palindrome!

## Lessons & Takeaways 🌱

- Explored the versatility of Node's core modules (`fs` and `http`), understanding their potential in building practical web applications.
- Reinforced the power of server-side validation, ensuring accurate and secure data processing.
