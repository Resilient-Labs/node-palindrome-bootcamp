document.querySelector('button').addEventListener('click', palindromeCheck)

function palindromeCheck(){
    const userInput = document.querySelector('input').value
    fetch(`check?palindrome=${userInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.querySelector('.whatIsIt').textContent = data.result
        // document.querySelector.textContent = data.NotAPalindrome
        // if (data.isaPalindrome) {
        //     document.querySelector('.whatIsIt').innerHTML ="Its a Palindrome"
        // } else if(data.notAPalindrome) {
        //     document.querySelector('.whatIsIt').innerHTML ='Not a Palindrome'
        // }
    })
}

// btn.addEventListener('click', palindromeCheck)