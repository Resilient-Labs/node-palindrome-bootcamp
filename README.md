# Palindrome Pendulum Checker 🟢
 
A server-side palindrome checker built with Node.js core modules. No Express and no dependencies. Type a word or phrase, the server checks whether it reads the same forwards and backwards, and a Newton's-cradle style pendulum swings to show the result.
 
🔗 **Live Demo:** [node-palindrome-bootcamp-nc91.onrender.com](https://node-palindrome-bootcamp-nc91.onrender.com/)
 
<img width="1345" height="934" alt="Palindrome Pendulum Checker showing a row of pendulum balls under the input field" src="https://github.com/user-attachments/assets/c027afc6-1143-494d-a23e-2e5d505d1044" />

 
## ✨ Features
 
- **Server-side validation**: the browser sends the text to a Node.js API, which cleans it, reverses it, and decides whether it's a palindrome
- **Ignores spaces, punctuation, and capitals**, so phrases like _"A man, a plan, a canal: Panama"_ count
- **Pendulum visualization**: one ball for each letter. The outer balls swing like a Newton's cradle.
- **Color-coded results**: the balls turn **green** for a palindrome and **orange** when the text isn't one
- **Shows the reversed text** next to the result message
- **Check and Reset** controls
- **Responsive layout**: the pendulum row wraps on tablets and phones

 
## 🔍 How It Works
 
```
Browser ──▶ GET /api?word=Racecar ──▶ Node server cleans + reverses ──▶ JSON ──▶ pendulum + result
```
 
The server (`server.js`) uses only Node's built-in `http`, `fs`, and `path` modules. It reads the request URL and routes it by hand:
 
| Route         | What it returns                                                |
| ------------- | -------------------------------------------------------------- |
| `/`           | `index.html`                                                   |
| `/main.css`   | The stylesheet                                                 |
| `/js/main.js` | The client-side script                                         |
| `/api?word=…` | JSON with the palindrome result                                |
| anything else | `404 - Page Not Found`                                         |
 
### API example
 
```
GET /api?word=Race car
```
 
```json
{
  "original": "Race car",
  "cleaned": "racecar",
  "reversed": "racecar",
  "isPalindrome": true
}
```
 
If `word` is missing, the API returns status `400` with `{ "error": "Please enter a word or phrase." }`.
 

 
## 🛠️ Tech Stack
 
- **Node.js** (`http`, `fs`, `path`; no frameworks)
- **HTML5**
- **CSS3** (keyframe animations, radial gradients, media queries)
- **JavaScript** (DOM manipulation, Fetch API)
- **Render** for hosting
---
 
## 📁 Project Structure
 
```
node-palindrome-bootcamp/
├── index.html     # Page layout: input, pendulum scene, results
├── main.css       # Styling, pendulum swing animations, responsive rules
├── js/
│   └── main.js    # Calls the API, builds the pendulum balls, updates the UI
├── server.js      # Node HTTP server: serves files and the /api route
└── package.json
```
 

 
## 🚀 Run It Locally
 
You need [Node.js](https://nodejs.org/) installed.
 
```bash
git clone https://github.com/kareemahb/node-palindrome-bootcamp.git
cd node-palindrome-bootcamp
npm start
```
 
Then open [http://localhost:8000](http://localhost:8000). The server uses the `PORT` environment variable when it's set (Render sets it), and falls back to `8000` otherwise.
 

 
## 💡 What I Learned
 
- Building an HTTP server and routing requests without a framework
- Serving HTML, CSS, and JS files with the `fs` module and the right `Content-Type` headers
- Reading query parameters with the `URL` class
- Designing a small JSON API and handling bad input with a `400` response
- Connecting front end to back end with `fetch`
- Deploying a Node app to Render with a dynamic `PORT`

 
## 👩‍💻 Created By
 
**Kareemah Bahaadur**
[GitHub @kareemahb](https://github.com/kareemahb)
 
