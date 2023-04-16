document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const word = document.querySelector("#userName").value;

  fetch(`/api?palindrome=${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#palindroMe").textContent = data.palindrome
  
    });

}

