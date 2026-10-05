//what i need to do 

//check if the user has 

document.querySelector('#clickMe').addEventListener('click', checkForPalindrome)

function checkForPalindrome() {
    const inputValue = document.querySelector('#userName').value;

        if (!inputValue) return;
    //this goes inside of the function to make it run when the button is clicked
    fetch(`/api?palindrome=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
     console.log(data)

     const userDisplay = document.querySelector('#checkForPalindrome');

     if (data.isPalindrome === true) {
        userDisplay.innerText = `Yes, ${data.word} is a palindrome.`;    
     } else{
        userDisplay.innerText = `${data.word} is not a palindrome. Try again!`
     }
}); 
}


