document.querySelector('#clickMe').addEventListener("click", palindrome); 

function palindrome() {

  const word = document.getElementById("wordCheck").value.trim();
  const result = document.getElementById("Result");  

  if (word === ""){
      result.textContent ="Please enter a word.";
      result.className = "error"; 
      return 
  }

  fetch(`/api?palindrome=${word}`)
    .then(response => response.json())
    .then((data) => {
      if (data.results === "yes") {
        result.textContent = `"${word}" is a palindrome`;
        result.className = "success";
      } else {
        result.textContent = `"${word}" is not a palindrome`;
        result.className = "not-palindrome" 
      }
      }) 
        .catch (error => {
        console.error("Error:", error);
        result.textContent = 'Something went wrong...'
          result.className = "error"
      }); 

} 

  // console.log(data);
  // document.querySelector("#personName").textContent = data.name
  // document.querySelector("#personStatus").textContent = data.status
  // document.querySelector("#personOccupation").textContent = data.currentOccupation
// })};

// }

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
//
