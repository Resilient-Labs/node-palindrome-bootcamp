document.querySelector('#clickMe').addEventListener('click', palindrome)

function palindrome(){

  const initialWord = document.querySelector("#initialWord").value;

  fetch(`/api?palindrome=${initialWord}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      console.log(initialWord)
      document.querySelector("#entry").textContent = `intial word:${data.initial}`
      document.querySelector("#reversed").textContent = 
      `reversed: ${data.reversed}`
      document.querySelector("#palindrome").textContent = `palindrome check: ${data.palindromCheck}`
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
