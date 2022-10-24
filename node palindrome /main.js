document.querySelector('button').addEventListener('click', checkPalindrome)

function checkPalindrome() {
  const wordInput = document.querySelector('input').value

  console.log(wordInput)

  fetch(`/api?checkIfPalindrome=${wordInput}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('.answer').innerText = data.result
    })
}