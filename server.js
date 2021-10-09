const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const server = http.createServer(function (request, response) {
  const page = url.parse(request.url).pathname; // parses requested URL to their pathname/route
  const params = querystring.parse(url.parse(request.url).query);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send 200 status code response
      response.write(data);
      response.end();
    });
  } else if (page == "/api") {
	let lowParam = params["student"].toLowerCase();
	let checker = lowParam.split("").reverse().join("");
	let isItPalidrome = lowParam == checker ? "Yes" : "No";
    if ("student" in params) {
      if (params["student"]) {
        response.writeHead(200, { "Content-Type": "application/json" });
		const obj = {
			palin: isItPalidrome
		}
        response.end(JSON.stringify(obj));
      }
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      response.write(data);
      response.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      response.writeHead(200, { "Content-Type": "text/javascript" });
      response.write(data);
      response.end();
    });
  } else {
    function pleaseWork(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      response.write(data);
      response.end();
    }
  }
});
server.listen(8000);
