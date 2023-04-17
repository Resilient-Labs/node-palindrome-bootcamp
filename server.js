const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/palindrome") {
    if ("palindromeInQuestion" in params) {
      if (
        params["palindromeInQuestion"].toLowerCase() ==
        params["palindromeInQuestion"]
          .toLowerCase()
          .split("")
          .reverse()
          .join("")
      ) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const objToJson = {
          input: params["palindromeInQuestion"].toLowerCase(),
          output: params["palindromeInQuestion"]
            .toLowerCase()
            .split("")
            .reverse()
            .join(""),
          result: "is a Palindrome.",
          value: true,
        };
        res.end(JSON.stringify(objToJson));
      } else if (
        params["palindromeInQuestion"].toLowerCase() !==
        params["palindromeInQuestion"]
          .toLowerCase()
          .split("")
          .reverse()
          .join("")
      ) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const objToJson = {
          input: params["palindromeInQuestion"].toLowerCase(),
          output: params["palindromeInQuestion"]
            .toLowerCase()
            .split("")
            .reverse()
            .join(""),
          result: "is not a Palindrome.",
          value: false,
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/css/normalize.css") {
    fs.readFile("css/normalize.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
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
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
