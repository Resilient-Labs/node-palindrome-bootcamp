// Activate button
document.querySelector('#clickMe').addEventListener('click', makeReq)

// Make request
function makeReq() {
  const userInput = document.querySelector("input").value;

  fetch(`/api?choice=${userInput}`) //send input to api
    .then(response => response.json()) //parse to json
    .then((data) => {  //open the json
      console.log(data);
      //display the result on dom

      document.querySelector("#result").textContent = 
      `This is ${data.result}.`
      console.log(`palidrome: ${data.palidrome}`)
      console.log(`User word: ${data.userInput}`)
      console.log(`${data.result}`)
    });
}