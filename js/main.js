document.querySelector('button').addEventListener('click',makeReq)

function makeReq(){
  const phrase = document.querySelector("#phrase").value;
  

  if (!phrase) {
    alert('First Name and Last Name are required')
    return
  }

  fetch(`/api?phrase=${phrase}`)
    .then(response => response.json())
    .then((data) => {
      phrase.value = ""

      alert(data.result);
    });

}