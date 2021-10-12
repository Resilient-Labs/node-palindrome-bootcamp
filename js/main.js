// document.querySelector('#clickMe').addEventListener('click', makeReq)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;

//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.isPalindrome
//     //   document.querySelector("#personStatus").textContent = data.status
//     //   document.querySelector("#personOccupation").textContent = data.currentOccupation
//     });

// }

document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = data.isPalindrome
    //   document.querySelector("#personStatus").textContent = data.status
    //   document.querySelector("#personOccupation").textContent = data.currentOccupation
    });

}
