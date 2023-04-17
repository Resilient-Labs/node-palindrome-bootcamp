document.querySelector('#clickMe').addEventListener('click', checkThePal)

function checkThePal(){

  const theName = document.querySelector("#theName").value;

  fetch(`/api?drome=${theName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#personName').innerText= data.status
    });

}

