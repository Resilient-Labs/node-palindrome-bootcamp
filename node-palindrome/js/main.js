

document.querySelector('button').addEventListener('click', checkForPalindrome)
//add an event listener to the button to check if word is a palindrome after input 

function checkForPalindrome(){
    let inputWord = document.querySelector('input').value //declare a variable of inputWord to have the value of the word that is inputted by the user
        console.log(inputWord)
        fetch(`/api?checkedWord=${inputWord}`) //fetch to retrieve information from the server
        .then(res => res.json())
        .then(data => {
        console.log(data)

        document.querySelector('h3').innerText = data.result
    })
}