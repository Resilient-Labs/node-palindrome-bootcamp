document.querySelector("#button").addEventListener('click', palindrome)

function palindrome(str){
    let len = str.length
    document.querySelector('#checkName')
    
    for(let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]){
            "It is not palindrome"
        }
    }
    "It is a palindrome"
}

document.getElementById('#palindrome').innerText  = palindrome();