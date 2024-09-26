const checkPalinBtn = document.querySelector('#checkPalinBtn')

function makeReq(){

  const stringInput = document.querySelector("#stringInput").value;

  fetch(`/api?palindrome=${stringInput}`) // full request to server is localhost:8008/api?student=leon
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      
      document.querySelector("#palinResult").textContent = data.palindrome
    });

}

checkPalinBtn.addEventListener('click', makeReq)
