/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

document.querySelector('button').addEventListener('click', clicky)

function clicky(element){
  let input = document.querySelector('#input').value.toLowerCase()
  fetch(`/funStuff?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('#results').innerText = document.querySelector('#input').value + " " + data.isPalindrome

    })
}



//         let str = 'laugh'

//         const splitString = str.split('') //[l, a, u, g, h]
//         const reverseString = splitString.reverse('') //[h, g, u, a, l]
//         const joinString = reverseString.join('') /hgual
//         return joinString

// if(joinString === input)

  //palindrome = Leon Noel, Racecar, Anna, madam, level, civic, sagas, kayak, rotor

//   whhat about something like this
// let inputArray = document.querySelector('#inputArray')
// let counter = 0
//   const halfLength = Math.floor(`${inputArray}`.length/2)
//   for(i=0;i<halfLength;i++){
//     if(`${inputArray}`[i] === `${inputArray}`[endOfArray-i]){
//       counter++
//     }
//   }
