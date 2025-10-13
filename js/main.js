const button = document.querySelector('button');
const output = document.querySelector('#output');
const inputField = document.querySelector('#userInput');

// when button clicked, check the word
button.addEventListener('click', getTheDrome);

// allow Enter key to trigger button
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});

function getTheDrome() {
    const userInput = inputField.value;

    // if input is empty
    if (userInput === '') {
        output.textContent = "Please enter a word";
        output.classList.remove('good', 'bad', 'reflect');
        return;
    }

    // fetch from the backend API
    fetch(`/api?word=${userInput}`)
        .then(res => res.json())
        .then(data => {
            output.classList.remove('good', 'bad', 'reflect');

            if (data.isPalindrome) {
                output.textContent = `${data.userInput} is a palindrome!`;
                output.classList.add('good', 'reflect'); // add reflection
            } else {
                output.textContent = `${data.userInput} is not a palindrome`;
                output.classList.add('bad'); // no reflection
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            output.textContent = "Something went wrong. Try again.";
        });
}
