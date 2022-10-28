/*

Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

create button event listener to submit the word

create functions to evaluate if the string is has the same characters reading forward and reversed

turn the characters in the word into and array [],. push (), .shift(), .split(), .join() , .reverse(), control for casing .toLowerCase()

use methods on that array to determine if they are read the same forward and backward*/

let submitBtn = document.getElementById('button').addEventListener('click',triggerServer)

// submitBtn.addEventListener('click', triggerServer)


// function checkPalindrome(pPalindrome) {
//   // return

//   // l e o n n o e l

//   let wordArray = pPalindrome.split("");

//   console.log(wordArray);

//   wordArray.reverse();

//   console.log(wordArray);

//   //  = [ ]
//   // .reverse()
//   let reversedWord = wordArray.join("");

  

//   if(reversedWord.toLowerCase()=== pPalindrome.toLowerCase()){
//     return true
//   } else {
//     return false
//   }
// }


// else if (page == "/api") {
//   let isPalindrome = checkPalindrome(params.pPalindrome);
//   console.log(`check to see if ${params.pPalindrome} is palindrome:`);
//   const palindromeResult = {
//     isPalindrome: isPalindrome,
//   };
 


function triggerServer() {
  let userInput =document.getElementById("word").value

  
  fetch(`/api?pPalindrome=${userInput}`)
  .then(response => response.json())
  .then((data) => {
     console.log(data)
    if(data.isPalindrome == true){
      console.log(data)
      document.querySelector('.print').innerText="This word IS a palindrome!"
      console.log(data)
    }else if(data.isPalindrome == false) {
      console.log(data)
      document.querySelector('.print').innerText='This word is NOT a palindrome!'
    }
    //  console.log(data);
    // checkPalindrome(pPalindrome)
    // let isPalindrome = checkPalindrome(params.pPalindrome);
    // console.log(`check to see if ${params.pPalindrome} is palindrome:`);
    // const palindromeResult = {
    //   isPalindrome: isPalindrome,
    // }
    
  });

}

// fetch(`/api?coinT=${coinFace}`)
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
//    if(data.coinLand === 'win' ){
//     document.querySelector('#coinResult').innerText = 'It\'s your lucky day! 🍀 '
//    } else if(data.coinLand === 'lose'){
//     document.querySelector('#coinResult').innerText = 'Tough luck! ☹️'
//    }
//     //true / false by default ( acts like an if/ else
//     // document.querySelector('.coin').classList.add(data.coinLand)
//      if(data.imageDisplay ===1){
//        document.querySelector('.coin').classList.add('heads')
//      }else{
//        document.querySelector('.coin').classList.add('tails')
//      }
