document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#wordInput").value;

  fetch(`/api?word=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#isItAPalindrome").textContent = data.isPalindrome
    //   document.querySelector("#personStatus").textContent = data.status
    //   document.querySelector("#personOccupation").textContent = data.currentOccupation
    });

}