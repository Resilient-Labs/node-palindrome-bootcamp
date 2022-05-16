const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log("this is page", page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("checkedPalindrome" in params) {
      res.writeHead(200, { "Content-Type": "application/json" });
      const checker = {
        reg: /[\W_]/g,
        string: params["checkedPalindrome"],
        result: "",
        stringChecker() {
          let lowerCase = this.string.toLowerCase().replace(this.reg, "");
          let reversed = lowerCase.split("").reverse().join("");
          if (reversed === lowerCase) {
            this.result = `${this.string} is a palindrome, W`;
          } else {
            this.result = `${this.string} isn't a palindrome, L`;
          }
        },
      };
      checker.stringChecker();
      res.end(JSON.stringify(checker));
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(3001);
