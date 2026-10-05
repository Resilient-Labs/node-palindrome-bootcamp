'use strict';

const wordCheck = document.querySelector('input');
const checkWord = document.querySelector('button');
const palidromeCheck = document.querySelector('h2');

console.log(wordCheck);
console.log(checkWord);

checkWord.addEventListener('click', checkForPalidrome);

function checkForPalidrome() {
    const word = wordCheck.value;
    console.log(word);

    fetch('/api?word=' + word)
        .then(function (response) {
            console.log(response);

            return response.json();
        })
        .then(function (data) {
            console.log(data);

            palidromeCheck.innerText = data.result;
            console.log(palidromeCheck);
        })
        .catch(function (error) {
            console.log(error);

            palidromeCheck.innerText = 'Something went wrong.';
        });
}