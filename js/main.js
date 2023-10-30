document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector("#userWord").value;
  
  console.log(`userInput : ${userInput}`)
  fetch(`/api?palindrome=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = data.name
      document.querySelector("#personStatus").textContent = data.status
      document.querySelector("#personOccupation").textContent = data.currentOccupation
    });

}
