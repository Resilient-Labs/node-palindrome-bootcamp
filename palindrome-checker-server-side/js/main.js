// Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
document.querySelector('button').addEventListener('click', checkPalindrome)


function checkPalindrome(){

    const word = document.querySelector('input').value

    fetch(`/api?input=${word}`)
    .then(response => response.json())
    .then(data => {
            console.log('API Response:', data)
            document.querySelector('#userWord').innerHTML = data.userWord
            document.querySelector('#reversedWord').innerHTML = data.reversedWord
            document.querySelector('#isPalindrome').innerHTML = `Is it a palindrome: ${data.trueOrFalse}`
            })
    .catch(error => console.error('Error:', error));
}