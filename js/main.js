/* Worked on with House Moses: Cyd V., Deneille D., James P., Joshua F., Kelly Ch., Mecca Y., Nafeesah S., Tiago D., and Will S. */

document.querySelector('.submitBtn').addEventListener('click', palindromeChecker)
// create an event listner for when the user clicks the button after entering a string

// the function that will run to request information from the server
function palindromeChecker() {
    const palindrome = document.querySelector('.palindrome').value
    console.log(palindrome)
    // create a variable for the user's input value. Record this value int he console.

    // create the api fetch that will grab the information from the server
    fetch(`/api?checkedPalindrome=${palindrome}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector('.result').innerText = data.result
            document.querySelector('.resultIMG').src = data.srcURL
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
    document.querySelector('.palindrome').value = ''
}