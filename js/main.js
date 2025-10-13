// psuedo code
// user input
// event listner when clicking on submit
// event function
  //get user input
  //send user input to api 

document.querySelector("button").onclick = checkIfPalindrome;

//event listener function
function checkIfPalindrome(){
  //get user input
  const word = document.querySelector("input").value;
  //word = radar
    ///api?word=radar
  //send user input to api
  fetch(`/api/?word=${word}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".entered-word").innerText = `Your word: ${data.serverWord}`
      document.querySelector(".reversed-word").innerText = `Reverse of your word: ${data.serverReverse}`
      document.querySelector(".result").innerText = data.serverConfirm
    })
    .catch((err) => console.error(err));
}


  // get reponse back from backend
  // show reponse in the DOM


//Citations:
// Referenced from Resilient Coders Week 9 Matierial
// Use of House Cass, Google AI Overview, Chatgpt for debug and syntax reference