document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const word = document.querySelector("#string").value;

  fetch(`/api?word=${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").innerHTML = data.result;
    });
}