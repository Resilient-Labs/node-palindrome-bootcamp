document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector("#userInput").value;

  fetch(`/api?student=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      const result = document.querySelector("#palindromeResult")
      if (data.isPalindrome === 'It is a palindrome') {
        result.textContent = 'Yes! It is a palindrome.'
      } else {
        result.textContent = 'No, it is not a palindrome.'
      }
    })

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
