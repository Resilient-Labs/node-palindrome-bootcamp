const button = document.querySelector('button')
const input = document.querySelector('input')
const pal = document.querySelector('h1')

button.addEventListener('click', checkPal)

// function checkPal() {
//     let word = input.value
//     let wordPal = word.split('').reverse().join('')
//     if( word === wordPal) {
//         pal.innerText = `${wordPal} is a Palindrome!`
//     } else {
//         pal.innerText = `This ${word} is NOT what we want!`
//     }
// }


function checkPal() {
    let submit = input.value
    fetch(`/api?palindrome=${submit}`)
      .then(response => response.json())
      .then((data) => {
          pal.innerText = `${data.result}`
      });
}
