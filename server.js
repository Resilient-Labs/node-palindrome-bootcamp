const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

function isPalindrome(str) {
	let copy = str.toLowerCase().split("").reverse().join("");
	return str.toLowerCase() === copy; // true or false
}

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
	} else if (page == "/otherpage") {
		fs.readFile("otherpage.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/otherotherpage") {
		fs.readFile("otherotherpage.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/api") {
		if ("palindrome" in params) {
			const word = params["palindrome"];
			if (word !== "") {
				res.writeHead(200, { "Content-Type": "application/json" });
				const objToJson = {
					result: isPalindrome(word),
				};
				res.end(JSON.stringify(objToJson));
			} else {
				res.writeHead(400, { "Content-Type": "application/json" });
				const objToJson = {
					error:
						"Invalid input. Parameter 'palindrome' cannot be an empty string.",
				};
				res.end(JSON.stringify(objToJson));
			}
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
		figlet("404!!", function (err, data) {
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

server.listen(8000);
