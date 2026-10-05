'use strict';

const http = require('http');
const fileSystem = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (request, response) {

    const page = url.parse(request.url).pathname;
    const parameters = querystring.parse(url.parse(request.url).query);

    console.log(page);
    console.log(parameters);

    if (page == '/') {

        fileSystem.readFile('index.html', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/css/modern-normalize.css') {

        fileSystem.readFile('css/modern-normalize.css', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/css'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/css/styles.css') {

        fileSystem.readFile('css/styles.css', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/css'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/js/main.js') {

        fileSystem.readFile('js/main.js', function (error, data) {

            console.log(error);
            console.log(data);

            response.writeHead(200, {
                'Content-Type': 'text/javascript'
            });

            response.write(data);
            response.end();
        });

    }
    else if (page == '/api') {

        console.log(parameters);

        const wordToCheck = parameters.word;
        console.log(wordToCheck);

        let palidromeResult = '';
        let wordToBackward = '';

        for (let i = wordToCheck.length - 1; i >= 0; i--) {
            wordToBackward = wordToBackward + wordToCheck[i];

            console.log(wordToBackward);
        };

        if (wordToCheck.toUpperCase == wordToBackward.toUpperCase) {
            palidromeResult = wordToCheck + ' is the same as ' + wordToBackward;
        }
        else {
            palidromeResult = 'This is not a palidrome.';
        };

        console.log(palidromeResult);

        const responseData = {
            result: palidromeResult
        };

        console.log(responseData);

        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        response.end(JSON.stringify(responseData));

    }
    else {

        console.log(page);

        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        response.write('Page not found');
        response.end();
    };
});

server.listen(8000);