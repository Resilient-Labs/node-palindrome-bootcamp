document.querySelector('#check').addEventListener('click', checkPalindrome)

function checkPalindrome(){
  const word = document.querySelector('input').value

  fetch(`/api?palindrome=${word}`)
    .then(response => response.json())
    .then((data) => {
        document.querySelector('#result').innerText = `${data.result}`
    });
}