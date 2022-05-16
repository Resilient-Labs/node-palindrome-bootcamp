
document.querySelector('button').addEventListener('click', palindromeChecker)

function palindromeChecker(){
    const palindrome = document.querySelector('input').value
    console.log(palindrome)

    fetch(`/api?checkedPalindrome=${palindrome}`)
    // fetch url from server 
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        document.querySelector('h3').innerText = data.result
        
    }) 
    .catch (err => {
        console.log(`Error ${err}`)
    })
} 