const checkButton = document.querySelector('#checkButton');
const textInput = document.querySelector('#textInput');
const palindromeResult = document.querySelector('#palindromeResult');

checkButton.addEventListener('click', () => {
    let input = textInput.value;
    checkIfPalindrome(input);
});

function checkIfPalindrome(input) {
    fetch('http://localhost:8080/checkIfPalindrome?input=' + input)
        .then(response => response.text())
        .then(data => {
            palindromeResult.innerText = data;
        });
}