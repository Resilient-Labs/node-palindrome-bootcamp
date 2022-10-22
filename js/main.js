document.querySelector("button").onclick = makeReq;

function makeReq(){
  let userInput = document.querySelector("input").value

  console.log(userInput)

  fetch(`/api?userInput=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    document.querySelector('#result').innerHTML = data.result
    
  })
  
}

