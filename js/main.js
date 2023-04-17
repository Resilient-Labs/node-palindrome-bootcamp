let btn = document.querySelector('button')
btn.addEventListener('click', checkFor)

function checkFor() {

    let outcome = document.querySelector('input').value

    fetch(`/api?input=${outcome}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

 
     document.querySelector('h2').innerText = data


    });





}