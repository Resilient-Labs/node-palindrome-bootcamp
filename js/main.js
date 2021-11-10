// user types in a word
// they click the button to check if it's a palindrome
// program activates function
// program stores the value in a string
// reverse string to check if it's the same
// if yes, then it's a palindrome // civic racecar leonnoel
// if they're not, then it's not a palindrome // red yellow jeonnoel
// display result

document.querySelector('button').addEventListener('click', checkIfPalindrome)

function checkIfPalindrome(){
    let word = document.querySelector('input').value.toLowerCase()

    fetch(`/api?string=${word}`) // fetch the local API
        .then(response => response.json()) // if request works
        .then(data => {
            console.log(data)
            let result = data.isPalindrome
            console.log(result)
            if(result){
                document.querySelector('span').innerText = `Yes. Reversed: ${data.reversed} `
            } else {
                document.querySelector('span').innerText = `No. Reversed: ${data.reversed} `
            }
        })
        .catch(err => console.log(err))
}