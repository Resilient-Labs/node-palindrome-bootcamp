let inputWord = document.querySelector('input')
let message = document.querySelector('p')

// let word1 = userWord.value
// let word2 =  ''

// function reverseWord(e){
//     e.preventDefault()
//     let originalWord = inputWord.value
//     let flippedWord = inputWord.value
//     flippedWord = flippedWord.split('').reverse().join('')

//     if (originalWord === flippedWord){
//         console.log('issa a palindrome')
//         message.innerText = "It's a palindrome"
//     }else{
//         console.log('issa not a palindrome')
//         message.innerText = "It's not a palindrome"
//     }

// }

function reverseWord(e){
    e.preventDefault()
    let inputWord = document.querySelector('input').value
  
    fetch(`/checker?word=${inputWord}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        message.innerText = data.PalindromeResponse
        // document.querySelector("#personName").textContent = data.name
        // document.querySelector("#personStatus").textContent = data.status
        // document.querySelector("#personOccupation").textContent = data.currentOccupation

      });
  
  }

document.querySelector('button').addEventListener('click', reverseWord)