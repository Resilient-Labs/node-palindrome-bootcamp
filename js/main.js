//palindrome



function checkPalindrome() {
    
    let word = document.querySelector('input').value

    fetch(`/api?word=${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.isPalindrome === true) {
        document.querySelector('h2').innerText = `It's a palindrome`
    } else if(data.isPalindrome === false) {
        document.querySelector('h2').innerText = `It's not a palindrome!`
    }else{
        document.querySelector('h2').innerText = `Please enter a word!`
    }
    });  
}


document.querySelector('button').addEventListener('click', checkPalindrome)