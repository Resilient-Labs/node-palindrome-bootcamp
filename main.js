//palindrome

document.querySelector('button').addEventListener('click', checkPalindrome)

function checkPalindrome(){
  let word = document.querySelector('input').value
  if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
    document.querySelector('h2').innerText = `It's a palindrome`
  }else{
    document.querySelector('h2').innerText = `It's not`
  }

  console.log(typeof word)
}

