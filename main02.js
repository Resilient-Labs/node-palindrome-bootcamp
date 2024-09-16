document.querySelector("button").addEventListener('click', function() {
  let userInputWord = document.querySelector("input").value
  let checkPalindrome = userInputWord.split(' ').join('')
  fetch(`/api?word=${checkPalindrome}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("p").textContent = data.palindrome
    });
})
