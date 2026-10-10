//get input from HTML 
// listen for button click
// get user's input
// fetch api endpoint
// get response 
// display result
const input = document.querySelector('#input');
const result = document.querySelector('#result');

document.querySelector('#clickButton').addEventListener('click', checkPalindrome)

function checkPalindrome(){

  const userInput = input.value;

  fetch(`/api?palindrome=${encodeURIComponent(userInput)}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      if (data.palindrome) { 
        result.textContent = 'This word is a palindrome!';
      } else { 
        result.textContent = 'This word is NOT a palindrome.';
      }
    });

}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
