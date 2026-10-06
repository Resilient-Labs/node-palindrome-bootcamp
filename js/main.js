document.querySelector('#clickMe').addEventListener('click', ShowPaliOutcome)

function ShowPaliOutcome(){

const paliEntered = document.querySelector("#PaliEntered").value;

console.log(paliEntered)
  // go to this address and give us whats there
  fetch(`/api?pali=${paliEntered}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#choice").textContent = data.isPaliOutcome

    });

}

