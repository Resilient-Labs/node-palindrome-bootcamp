let btn = document.querySelector('button')
let outcome = document.querySelector('h2')


function getValue(){
    let inputValue = document.querySelector('#input').value
    fetch(`/api?input=${inputValue}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      outcome.innerText = data
    }); 
}

btn.addEventListener('click', getValue)
