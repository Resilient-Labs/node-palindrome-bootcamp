document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  let word = document.querySelector("#word").value;
  word = word.toLowerCase().split(" ").join("")
  let word2 = word.split("").reverse().join("")
  
  //make the word all lowercase, remove any potential spaces and reverse to check against original word
  let result = word === word2
  console.log(word,word2,result)
  fetch(`/api?palindrome=${result}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = data.palindrome
    });

}