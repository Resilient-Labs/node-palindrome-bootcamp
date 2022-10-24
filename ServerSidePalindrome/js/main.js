document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;


  fetch(`/api?word=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = "Word: "+ data.word
      document.querySelector("#personStatus").textContent = "Reverse: " + data.reverse
      document.querySelector("#personOccupation").textContent = "Palindrone: " +data.match
    });

}
