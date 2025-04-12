document.querySelector('.button').addEventListener('click', () => {
  let input = document.querySelector('#text').value
  fetch(`/api?checker=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('#results').innerHTML = data.Results
    })
    .catch(err => {
      console.log(`error: ${err}`)
    })
})

// document.querySelector('.button').addEventListener('click', () => {
//   fetch('/backwards')
//     .then(response => response.text())
//     .then((data) => {
//       document.querySelector('.backwards').innerText = data
//     })
// })

//Front-End (Working Code)
// function checkPalindrome() {
//     let forward = document.querySelector('.results').innerText.replace(/[^a-z0-9]/gi, '').toLowerCase();
//     let backwards = forward.split('').reverse().join('');
//     console.log(forward)

//     if (forward === backwards) {
//         document.querySelector('.results').innerText = 'This is not a Palindrome';
//     } else {
//         document.querySelector('.results').innerText = 'This is a Palindrome';
//     }
// }