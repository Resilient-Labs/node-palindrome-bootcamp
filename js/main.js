function convert() {
  const word = document.querySelector("#word").value;

  fetch(`/api?palindrome=${word}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#results").textContent = data.word;
      // document.querySelector("#personStatus").textContent = data.status
    });
}

document.querySelector("#clickMe").addEventListener("click", convert);

// let word = document.getElementById('word').value;
// let word2 = document.getElementById('word').value;
// let reversed = word2.split('').reverse().join('');
// if(word === reversed){
//   document.getElementById('results').innerText = "YES";
// document.getElementById('reverse').innerText = reversed;
// }else{
//   document.getElementById('results').innerText = "NO";
//   document.getElementById('reverse').innerText = reversed;
// }
